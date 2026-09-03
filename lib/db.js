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

// Fetch all events from DB
export async function getEvents() {
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
      filterType: row.filter_type
    }));
  } catch (error) {
    console.error("Error fetching events from DB:", error);
    throw error;
  }
}

// Add a new event to DB
export async function addEvent(eventData) {
  const currentPool = getPool();

  const { dateDay, dateMonth, dateYear, category, title, subtitle, imageUrl, filterType } = eventData;

  const query = `
    INSERT INTO events (date_day, date_month, date_year, category, title, subtitle, image_url, filter_type)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *;
  `;

  const values = [dateDay, dateMonth, dateYear, category, title, subtitle || '', imageUrl, filterType];

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
      filterType: row.filter_type
    };
  } catch (error) {
    console.error("Error inserting event into DB:", error);
    throw error;
  }
}

// Update an existing event in DB
export async function updateEvent(id, eventData) {
  const currentPool = getPool();
  const { dateDay, dateMonth, dateYear, category, title, subtitle, imageUrl, filterType } = eventData;

  const query = `
    UPDATE events
    SET date_day = $1, date_month = $2, date_year = $3, category = $4, title = $5, subtitle = $6, image_url = $7, filter_type = $8
    WHERE id = $9
    RETURNING *;
  `;

  const values = [dateDay, dateMonth, dateYear, category, title, subtitle || '', imageUrl, filterType, id];

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
