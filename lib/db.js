import { Pool } from 'pg';

let pool = globalThis._pgPool;

function getPool() {
  if (!pool) {
    const connStr = process.env.DATABASE_URL ? process.env.DATABASE_URL.trim() : null;
    if (!connStr) {
      throw new Error("DATABASE_URL is not set.");
    }
    pool = new Pool({
      connectionString: connStr,
      ssl: { rejectUnauthorized: false },
      connectionTimeoutMillis: 15000,
      idleTimeoutMillis: 30000,
      max: 10
    });
    if (process.env.NODE_ENV !== 'production') {
      globalThis._pgPool = pool;
    }
  }
  return pool;
}

// Ensure tables exist before querying (cached so it executes at most once per process)
let tablesEnsured = false;
async function ensureTablesExist() {
  if (tablesEnsured) return;
  const currentPool = getPool();
  try {
    await currentPool.query(`
      CREATE TABLE IF NOT EXISTS news (
        id SERIAL PRIMARY KEY,
        tag VARCHAR(100),
        category VARCHAR(100),
        title VARCHAR(255),
        "desc" TEXT,
        date VARCHAR(100),
        image_url VARCHAR(500)
      );
      ALTER TABLE events
      ADD COLUMN IF NOT EXISTS details JSONB;
      CREATE TABLE IF NOT EXISTS resources (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255),
        category VARCHAR(100),
        type VARCHAR(100),
        size VARCHAR(50),
        "desc" TEXT,
        date VARCHAR(100),
        download_url VARCHAR(500)
      );
    `);
    tablesEnsured = true;
  } catch (error) {
    console.error("Error creating tables:", error);
  }
}


// Fetch all events from DB
export async function getEvents() {
  await ensureTablesExist();
  const currentPool = getPool();
  
  try {
    const res = await currentPool.query('SELECT * FROM events ORDER BY id ASC');
    
    // Map database snake_case to frontend camelCase
    return res.rows.map(row => ({
      id: row.id,
      dateDay: row.date_day,
      dateMonth: row.date_month,
      dateYear: row.date_year,
      category: row.category,
      title: row.title,
      subtitle: row.subtitle,
      imageUrl: row.image_url,
      filterType: row.filter_type,
      details: row.details || {}
    }));
  } catch (error) {
    console.error("Error fetching events from DB:", error);
    throw error;
  }
}

// Add a new event to DB
export async function addEvent(eventData) {
  await ensureTablesExist();
  const currentPool = getPool();

  const { dateDay, dateMonth, dateYear, category, title, subtitle, imageUrl, filterType, details } = eventData;

  const query = `
    INSERT INTO events (date_day, date_month, date_year, category, title, subtitle, image_url, filter_type, details)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9::jsonb)
    RETURNING *;
  `;

  const values = [dateDay, dateMonth, dateYear, category, title, subtitle || '', imageUrl, filterType, JSON.stringify(details || {})];

  try {
    const res = await currentPool.query(query, values);
    const row = res.rows[0];
    return {
      id: row.id,
      dateDay: row.date_day,
      dateMonth: row.date_month,
      dateYear: row.date_year,
      category: row.category,
      title: row.title,
      subtitle: row.subtitle,
      imageUrl: row.image_url,
      filterType: row.filter_type,
      details: row.details || {}
    };
  } catch (error) {
    console.error("Error inserting event into DB:", error);
    throw error;
  }
}

// Update an existing event in DB
export async function updateEvent(id, eventData) {
  await ensureTablesExist();
  const currentPool = getPool();
  const { dateDay, dateMonth, dateYear, category, title, subtitle, imageUrl, filterType, details } = eventData;

  const query = `
    UPDATE events
    SET date_day = $1, date_month = $2, date_year = $3, category = $4, title = $5, subtitle = $6, image_url = $7, filter_type = $8, details = $9::jsonb
    WHERE id = $10
    RETURNING *;
  `;

  const values = [dateDay, dateMonth, dateYear, category, title, subtitle || '', imageUrl, filterType, JSON.stringify(details || {}), id];

  try {
    const res = await currentPool.query(query, values);
    if (res.rows.length === 0) throw new Error("Event not found");
    const row = res.rows[0];
    return {
      id: row.id,
      dateDay: row.date_day,
      dateMonth: row.date_month,
      dateYear: row.date_year,
      category: row.category,
      title: row.title,
      subtitle: row.subtitle,
      imageUrl: row.image_url,
      filterType: row.filter_type
    };
  } catch (error) {
    console.error("Error updating event in DB:", error);
    throw error;
  }
}

// Delete an event from DB
export async function deleteEvent(id) {
  const currentPool = getPool();
  try {
    const res = await currentPool.query('DELETE FROM events WHERE id = $1 RETURNING id;', [id]);
    if (res.rows.length === 0) throw new Error("Event not found");
    return { success: true, id };
  } catch (error) {
    console.error("Error deleting event from DB:", error);
    throw error;
  }
}

// Get single event by ID
export async function getEventById(id) {
  await ensureTablesExist();
  const currentPool = getPool();
  try {
    const res = await currentPool.query('SELECT * FROM events WHERE id = $1 LIMIT 1;', [id]);
    if (res.rows.length === 0) return null;
    const row = res.rows[0];
    return {
      id: row.id,
      dateDay: row.date_day,
      dateMonth: row.date_month,
      dateYear: row.date_year,
      category: row.category,
      title: row.title,
      subtitle: row.subtitle,
      imageUrl: row.image_url,
      filterType: row.filter_type,
      details: row.details || {}
    };
  } catch (error) {
    console.error("Error fetching event by ID:", error);
    throw error;
  }
}

// Get Page Settings
export async function getEventSettings() {
  const currentPool = getPool();
  try {
    const res = await currentPool.query('SELECT * FROM event_settings WHERE id = 1 LIMIT 1;');
    if (res.rows.length === 0) {
      return null;
    }
    const row = res.rows[0];
    
    // Parse featured_initiatives
    let featuredInitiatives = [];
    if (row.featured_initiatives) {
      featuredInitiatives = typeof row.featured_initiatives === 'string' 
        ? JSON.parse(row.featured_initiatives) 
        : row.featured_initiatives;
    }

    // Fallback if empty
    if (!Array.isArray(featuredInitiatives) || featuredInitiatives.length === 0) {
      featuredInitiatives = [
        {
          id: 'init-1',
          tag: row.featured_tag || 'FEATURED INITIATIVE',
          title: row.featured_title || 'STEM 4 Girls',
          subtitle: row.featured_subtitle || 'Creating opportunities.<br/>Inspiring futures.',
          imageUrl: row.featured_image || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop',
          link: row.featured_link || '#'
        }
      ];
    }

    return {
      id: row.id,
      heroTag: row.hero_tag,
      heroTitle: row.hero_title,
      heroSubtitle: row.hero_subtitle,
      heroImage: row.hero_image,
      featuredTag: row.featured_tag,
      featuredTitle: row.featured_title,
      featuredSubtitle: row.featured_subtitle,
      featuredImage: row.featured_image,
      featuredLink: row.featured_link,
      featuredInitiatives: featuredInitiatives,
      stat1Number: row.stat1_number,
      stat1Text: row.stat1_text,
      stat2Number: row.stat2_number,
      stat2Text: row.stat2_text,
      stat3Number: row.stat3_number,
      stat3Text: row.stat3_text,
      stat4Number: row.stat4_number,
      stat4Text: row.stat4_text,
      newsletterTitle: row.newsletter_title,
      newsletterText: row.newsletter_text,
    };
  } catch (error) {
    console.error("Error fetching event settings from DB:", error);
    throw error;
  }
}

// Update Page Settings
export async function updateEventSettings(settings) {
  const currentPool = getPool();
  const {
    heroTag,
    heroTitle,
    heroSubtitle,
    heroImage,
    featuredTag,
    featuredTitle,
    featuredSubtitle,
    featuredImage,
    featuredLink,
    featuredInitiatives,
    stat1Number,
    stat1Text,
    stat2Number,
    stat2Text,
    stat3Number,
    stat3Text,
    stat4Number,
    stat4Text,
    newsletterTitle,
    newsletterText,
  } = settings;

  const initiativesJson = JSON.stringify(featuredInitiatives || []);

  const query = `
    INSERT INTO event_settings (
      id, hero_tag, hero_title, hero_subtitle, hero_image,
      featured_tag, featured_title, featured_subtitle, featured_image, featured_link,
      stat1_number, stat1_text, stat2_number, stat2_text, stat3_number, stat3_text, stat4_number, stat4_text,
      newsletter_title, newsletter_text, featured_initiatives
    ) VALUES (
      1, $1, $2, $3, $4,
      $5, $6, $7, $8, $9,
      $10, $11, $12, $13, $14, $15, $16, $17,
      $18, $19, $20::jsonb
    )
    ON CONFLICT (id) DO UPDATE SET
      hero_tag = EXCLUDED.hero_tag,
      hero_title = EXCLUDED.hero_title,
      hero_subtitle = EXCLUDED.hero_subtitle,
      hero_image = EXCLUDED.hero_image,
      featured_tag = EXCLUDED.featured_tag,
      featured_title = EXCLUDED.featured_title,
      featured_subtitle = EXCLUDED.featured_subtitle,
      featured_image = EXCLUDED.featured_image,
      featured_link = EXCLUDED.featured_link,
      stat1_number = EXCLUDED.stat1_number,
      stat1_text = EXCLUDED.stat1_text,
      stat2_number = EXCLUDED.stat2_number,
      stat2_text = EXCLUDED.stat2_text,
      stat3_number = EXCLUDED.stat3_number,
      stat3_text = EXCLUDED.stat3_text,
      stat4_number = EXCLUDED.stat4_number,
      stat4_text = EXCLUDED.stat4_text,
      newsletter_title = EXCLUDED.newsletter_title,
      newsletter_text = EXCLUDED.newsletter_text,
      featured_initiatives = EXCLUDED.featured_initiatives
    RETURNING *;
  `;

  const values = [
    heroTag || 'EVENTS',
    heroTitle || 'Discover. Learn.\nConnect.',
    heroSubtitle || '',
    heroImage || '/events/e1.png',
    featuredTag || 'FEATURED INITIATIVE',
    featuredTitle || 'STEM 4 Girls',
    featuredSubtitle || '',
    featuredImage || '/events/e1.png',
    featuredLink || '#',
    stat1Number || '56+',
    stat1Text || 'Gifted Students<br/>Supported',
    stat2Number || '44',
    stat2Text || 'Schools in<br/>Kerala',
    stat3Number || '41',
    stat3Text || 'Educational<br/>Districts',
    stat4Number || '6+',
    stat4Text || 'Programmes<br/>Organized',
    newsletterTitle || 'Stay Updated',
    newsletterText || '',
    initiativesJson
  ];

  try {
    const res = await currentPool.query(query, values);
    const row = res.rows[0];
    
    let parsedInitiatives = [];
    if (row.featured_initiatives) {
      parsedInitiatives = typeof row.featured_initiatives === 'string' 
        ? JSON.parse(row.featured_initiatives) 
        : row.featured_initiatives;
    }

    return {
      id: row.id,
      heroTag: row.hero_tag,
      heroTitle: row.hero_title,
      heroSubtitle: row.hero_subtitle,
      heroImage: row.hero_image,
      featuredTag: row.featured_tag,
      featuredTitle: row.featured_title,
      featuredSubtitle: row.featured_subtitle,
      featuredImage: row.featured_image,
      featuredLink: row.featured_link,
      featuredInitiatives: parsedInitiatives,
      stat1Number: row.stat1_number,
      stat1Text: row.stat1_text,
      stat2Number: row.stat2_number,
      stat2Text: row.stat2_text,
      stat3Number: row.stat3_number,
      stat3Text: row.stat3_text,
      stat4Number: row.stat4_number,
      stat4Text: row.stat4_text,
      newsletterTitle: row.newsletter_title,
      newsletterText: row.newsletter_text,
    };
  } catch (error) {
    console.error("Error updating event settings in DB:", error);
    throw error;
  }
}

// ==========================================
// NEWS CRUD
// ==========================================

export async function getNews() {
  await ensureTablesExist();
  const currentPool = getPool();
  try {
    const res = await currentPool.query('SELECT * FROM news ORDER BY id DESC');
    return res.rows.map(row => ({
      id: row.id,
      tag: row.tag,
      category: row.category,
      title: row.title,
      desc: row.desc,
      date: row.date,
      imageUrl: row.image_url
    }));
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
}

export async function addNews(newsData) {
  await ensureTablesExist();
  const currentPool = getPool();
  const { tag, category, title, desc, date, imageUrl } = newsData;
  const query = `
    INSERT INTO news (tag, category, title, "desc", date, image_url)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;
  try {
    const res = await currentPool.query(query, [tag, category, title, desc, date, imageUrl]);
    const row = res.rows[0];
    return {
      id: row.id,
      tag: row.tag,
      category: row.category,
      title: row.title,
      desc: row.desc,
      date: row.date,
      imageUrl: row.image_url
    };
  } catch (error) {
    console.error("Error inserting news:", error);
    throw error;
  }
}

export async function updateNews(id, newsData) {
  await ensureTablesExist();
  const currentPool = getPool();
  const { tag, category, title, desc, date, imageUrl } = newsData;
  const query = `
    UPDATE news
    SET tag = $1, category = $2, title = $3, "desc" = $4, date = $5, image_url = $6
    WHERE id = $7
    RETURNING *;
  `;
  try {
    const res = await currentPool.query(query, [tag, category, title, desc, date, imageUrl, id]);
    if (res.rows.length === 0) throw new Error("News not found");
    const row = res.rows[0];
    return {
      id: row.id,
      tag: row.tag,
      category: row.category,
      title: row.title,
      desc: row.desc,
      date: row.date,
      imageUrl: row.image_url
    };
  } catch (error) {
    console.error("Error updating news:", error);
    throw error;
  }
}

export async function deleteNews(id) {
  await ensureTablesExist();
  const currentPool = getPool();
  try {
    const res = await currentPool.query('DELETE FROM news WHERE id = $1 RETURNING id;', [id]);
    if (res.rows.length === 0) throw new Error("News not found");
    return { success: true, id };
  } catch (error) {
    console.error("Error deleting news:", error);
    throw error;
  }
}

// ==========================================
// RESOURCES CRUD
// ==========================================

export async function getResources() {
  await ensureTablesExist();
  const currentPool = getPool();
  try {
    let res = await currentPool.query('SELECT * FROM resources ORDER BY id DESC');
    if (res.rows.length === 0) {
      const defaultResources = [
        {
          title: '4th SIET International Conference Official Brochure',
          category: 'Brochures',
          type: 'PDF',
          size: '1.2 MB',
          desc: 'Complete conference schedule, keynote profiles (Prof. Jan De Waters), themes on STEAM in Education, and registration guidelines.',
          date: 'March 2025',
          download_url: '#'
        },
        {
          title: 'Call for Papers: SIET & LEnSE Annual Educational Technology Proceedings',
          category: 'Submissions',
          type: 'PDF',
          size: '876 KB',
          desc: 'Paper formatting guidelines, submission tracks, peer review criteria, and deadlines for scholars and educational researchers.',
          date: 'February 2025',
          download_url: '#'
        },
        {
          title: 'FYUGP Semester II Extended Learning Module: Selected Literary Terms',
          category: 'Courseware',
          type: 'PDF / Interactive',
          size: '2.4 MB',
          desc: 'Technology-enabled supplementary coursework developed by Ms. Greeshma Raveendran with Dr. Divya C. Senan under University of Kerala.',
          date: 'January 2025',
          download_url: '#'
        },
        {
          title: 'Hands-on Activity Toolkit: School STEM Learning Lab Curriculum',
          category: 'Toolkits',
          type: 'PDF',
          size: '3.8 MB',
          desc: 'Comprehensive manual containing 50+ experiential lab activities, microcontroller coding tutorials, and robotics experiments for K-12 educators.',
          date: 'May 2025',
          download_url: '#'
        },
        {
          title: 'Prompt Engineering for Higher Education Educators: Instructional Guide',
          category: 'Guides',
          type: 'PDF',
          size: '1.5 MB',
          desc: 'Curated handbook from Dr. Briju Tankachan (EdTech Society & IIT Mumbai) on leveraging generative AI tools to improve classroom instruction quality.',
          date: 'January 2025',
          download_url: '#'
        },
        {
          title: 'Institutional Annual Report & Policy Document (LEnSE / CLESE 2024-2025)',
          category: 'Reports',
          type: 'PDF',
          size: '4.2 MB',
          desc: 'Comprehensive review of state camp series, gift student programs, international grants, and social inclusion reinvestment metrics.',
          date: 'August 2025',
          download_url: '#'
        }
      ];

      for (const item of defaultResources) {
        await currentPool.query(
          `INSERT INTO resources (title, category, type, size, "desc", date, download_url)
           VALUES ($1, $2, $3, $4, $5, $6, $7)`,
          [item.title, item.category, item.type, item.size, item.desc, item.date, item.download_url]
        );
      }
      res = await currentPool.query('SELECT * FROM resources ORDER BY id DESC');
    }

    return res.rows.map(row => ({
      id: row.id,
      title: row.title,
      category: row.category,
      type: row.type,
      size: row.size,
      desc: row.desc,
      date: row.date,
      downloadUrl: row.download_url
    }));
  } catch (error) {
    console.error("Error fetching resources:", error);
    throw error;
  }
}

export async function addResource(resData) {
  await ensureTablesExist();
  const currentPool = getPool();
  const { title, category, type, size, desc, date, downloadUrl } = resData;
  const query = `
    INSERT INTO resources (title, category, type, size, "desc", date, download_url)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;
  `;
  try {
    const res = await currentPool.query(query, [title, category, type, size, desc, date, downloadUrl]);
    const row = res.rows[0];
    return {
      id: row.id,
      title: row.title,
      category: row.category,
      type: row.type,
      size: row.size,
      desc: row.desc,
      date: row.date,
      downloadUrl: row.download_url
    };
  } catch (error) {
    console.error("Error inserting resource:", error);
    throw error;
  }
}

export async function updateResource(id, resData) {
  await ensureTablesExist();
  const currentPool = getPool();
  const { title, category, type, size, desc, date, downloadUrl } = resData;
  const query = `
    UPDATE resources
    SET title = $1, category = $2, type = $3, size = $4, "desc" = $5, date = $6, download_url = $7
    WHERE id = $8
    RETURNING *;
  `;
  try {
    const res = await currentPool.query(query, [title, category, type, size, desc, date, downloadUrl, id]);
    if (res.rows.length === 0) throw new Error("Resource not found");
    const row = res.rows[0];
    return {
      id: row.id,
      title: row.title,
      category: row.category,
      type: row.type,
      size: row.size,
      desc: row.desc,
      date: row.date,
      downloadUrl: row.download_url
    };
  } catch (error) {
    console.error("Error updating resource:", error);
    throw error;
  }
}

export async function deleteResource(id) {
  await ensureTablesExist();
  const currentPool = getPool();
  try {
    const res = await currentPool.query('DELETE FROM resources WHERE id = $1 RETURNING id;', [id]);
    if (res.rows.length === 0) throw new Error("Resource not found");
    return { success: true, id };
  } catch (error) {
    console.error("Error deleting resource:", error);
    throw error;
  }
}
