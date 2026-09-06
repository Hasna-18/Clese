"use strict";exports.id=53,exports.ids=[53],exports.modules={53:(t,e,r)=>{r.a(t,async(t,a)=>{try{r.d(e,{Bt:()=>c,Y:()=>E,dD:()=>y,eJ:()=>u,fg:()=>D,id:()=>R,jB:()=>w,jh:()=>m,kN:()=>h,lg:()=>g,rp:()=>T,uB:()=>_,vP:()=>d,vw:()=>l,yQ:()=>f});var i=r(8678),o=t([i]);i=(o.then?(await o)():o)[0];let $=globalThis._pgPool;function s(){if(!$){let t=process.env.DATABASE_URL?process.env.DATABASE_URL.trim():null;if(!t)throw Error("DATABASE_URL is not set.");$=new i.Pool({connectionString:t,ssl:{rejectUnauthorized:!1},connectionTimeoutMillis:15e3,idleTimeoutMillis:3e4,max:10})}return $}let b=!1;async function n(){if(b)return;let t=s();try{await t.query(`
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
    `),b=!0}catch(t){console.error("Error creating tables:",t)}}async function l(){await n();let t=s();try{return(await t.query("SELECT * FROM events ORDER BY id ASC")).rows.map(t=>({id:t.id,dateDay:t.date_day,dateMonth:t.date_month,dateYear:t.date_year,category:t.category,title:t.title,subtitle:t.subtitle,imageUrl:t.image_url,filterType:t.filter_type,details:t.details||{}}))}catch(t){throw console.error("Error fetching events from DB:",t),t}}async function d(t){await n();let e=s(),{dateDay:r,dateMonth:a,dateYear:i,category:o,title:l,subtitle:d,imageUrl:u,filterType:c,details:E}=t,_=`
    INSERT INTO events (date_day, date_month, date_year, category, title, subtitle, image_url, filter_type, details)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9::jsonb)
    RETURNING *;
  `,g=[r,a,i,o,l,d||"",u,c,JSON.stringify(E||{})];try{let t=(await e.query(_,g)).rows[0];return{id:t.id,dateDay:t.date_day,dateMonth:t.date_month,dateYear:t.date_year,category:t.category,title:t.title,subtitle:t.subtitle,imageUrl:t.image_url,filterType:t.filter_type,details:t.details||{}}}catch(t){throw console.error("Error inserting event into DB:",t),t}}async function u(t,e){await n();let r=s(),{dateDay:a,dateMonth:i,dateYear:o,category:l,title:d,subtitle:u,imageUrl:c,filterType:E,details:_}=e,g=`
    UPDATE events
    SET date_day = $1, date_month = $2, date_year = $3, category = $4, title = $5, subtitle = $6, image_url = $7, filter_type = $8, details = $9::jsonb
    WHERE id = $10
    RETURNING *;
  `,y=[a,i,o,l,d,u||"",c,E,JSON.stringify(_||{}),t];try{let t=await r.query(g,y);if(0===t.rows.length)throw Error("Event not found");let e=t.rows[0];return{id:e.id,dateDay:e.date_day,dateMonth:e.date_month,dateYear:e.date_year,category:e.category,title:e.title,subtitle:e.subtitle,imageUrl:e.image_url,filterType:e.filter_type}}catch(t){throw console.error("Error updating event in DB:",t),t}}async function c(t){let e=s();try{let r=await e.query("DELETE FROM events WHERE id = $1 RETURNING id;",[t]);if(0===r.rows.length)throw Error("Event not found");return{success:!0,id:t}}catch(t){throw console.error("Error deleting event from DB:",t),t}}async function E(t){await n();let e=s();try{let r=await e.query("SELECT * FROM events WHERE id = $1 LIMIT 1;",[t]);if(0===r.rows.length)return null;let a=r.rows[0];return{id:a.id,dateDay:a.date_day,dateMonth:a.date_month,dateYear:a.date_year,category:a.category,title:a.title,subtitle:a.subtitle,imageUrl:a.image_url,filterType:a.filter_type,details:a.details||{}}}catch(t){throw console.error("Error fetching event by ID:",t),t}}async function _(){let t=s();try{let e=await t.query("SELECT * FROM event_settings WHERE id = 1 LIMIT 1;");if(0===e.rows.length)return null;let r=e.rows[0],a=[];return r.featured_initiatives&&(a="string"==typeof r.featured_initiatives?JSON.parse(r.featured_initiatives):r.featured_initiatives),Array.isArray(a)&&0!==a.length||(a=[{id:"init-1",tag:r.featured_tag||"FEATURED INITIATIVE",title:r.featured_title||"STEM 4 Girls",subtitle:r.featured_subtitle||"Creating opportunities.<br/>Inspiring futures.",imageUrl:r.featured_image||"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",link:r.featured_link||"#"}]),{id:r.id,heroTag:r.hero_tag,heroTitle:r.hero_title,heroSubtitle:r.hero_subtitle,heroImage:r.hero_image,featuredTag:r.featured_tag,featuredTitle:r.featured_title,featuredSubtitle:r.featured_subtitle,featuredImage:r.featured_image,featuredLink:r.featured_link,featuredInitiatives:a,stat1Number:r.stat1_number,stat1Text:r.stat1_text,stat2Number:r.stat2_number,stat2Text:r.stat2_text,stat3Number:r.stat3_number,stat3Text:r.stat3_text,stat4Number:r.stat4_number,stat4Text:r.stat4_text,newsletterTitle:r.newsletter_title,newsletterText:r.newsletter_text}}catch(t){throw console.error("Error fetching event settings from DB:",t),t}}async function g(t){let e=s(),{heroTag:r,heroTitle:a,heroSubtitle:i,heroImage:o,featuredTag:n,featuredTitle:l,featuredSubtitle:d,featuredImage:u,featuredLink:c,featuredInitiatives:E,stat1Number:_,stat1Text:g,stat2Number:y,stat2Text:f,stat3Number:w,stat3Text:h,stat4Number:m,stat4Text:T,newsletterTitle:R,newsletterText:D}=t,$=JSON.stringify(E||[]),b=`
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
  `;try{let t=(await e.query(b,[r||"EVENTS",a||"Discover. Learn.\nConnect.",i||"",o||"/events/e1.png",n||"FEATURED INITIATIVE",l||"STEM 4 Girls",d||"",u||"/events/e1.png",c||"#",_||"56+",g||"Gifted Students<br/>Supported",y||"44",f||"Schools in<br/>Kerala",w||"41",h||"Educational<br/>Districts",m||"6+",T||"Programmes<br/>Organized",R||"Stay Updated",D||"",$])).rows[0],s=[];return t.featured_initiatives&&(s="string"==typeof t.featured_initiatives?JSON.parse(t.featured_initiatives):t.featured_initiatives),{id:t.id,heroTag:t.hero_tag,heroTitle:t.hero_title,heroSubtitle:t.hero_subtitle,heroImage:t.hero_image,featuredTag:t.featured_tag,featuredTitle:t.featured_title,featuredSubtitle:t.featured_subtitle,featuredImage:t.featured_image,featuredLink:t.featured_link,featuredInitiatives:s,stat1Number:t.stat1_number,stat1Text:t.stat1_text,stat2Number:t.stat2_number,stat2Text:t.stat2_text,stat3Number:t.stat3_number,stat3Text:t.stat3_text,stat4Number:t.stat4_number,stat4Text:t.stat4_text,newsletterTitle:t.newsletter_title,newsletterText:t.newsletter_text}}catch(t){throw console.error("Error updating event settings in DB:",t),t}}async function y(){await n();let t=s();try{return(await t.query("SELECT * FROM news ORDER BY id DESC")).rows.map(t=>({id:t.id,tag:t.tag,category:t.category,title:t.title,desc:t.desc,date:t.date,imageUrl:t.image_url}))}catch(t){throw console.error("Error fetching news:",t),t}}async function f(t){await n();let e=s(),{tag:r,category:a,title:i,desc:o,date:l,imageUrl:d}=t,u=`
    INSERT INTO news (tag, category, title, "desc", date, image_url)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;try{let t=(await e.query(u,[r,a,i,o,l,d])).rows[0];return{id:t.id,tag:t.tag,category:t.category,title:t.title,desc:t.desc,date:t.date,imageUrl:t.image_url}}catch(t){throw console.error("Error inserting news:",t),t}}async function w(t,e){await n();let r=s(),{tag:a,category:i,title:o,desc:l,date:d,imageUrl:u}=e,c=`
    UPDATE news
    SET tag = $1, category = $2, title = $3, "desc" = $4, date = $5, image_url = $6
    WHERE id = $7
    RETURNING *;
  `;try{let e=await r.query(c,[a,i,o,l,d,u,t]);if(0===e.rows.length)throw Error("News not found");let s=e.rows[0];return{id:s.id,tag:s.tag,category:s.category,title:s.title,desc:s.desc,date:s.date,imageUrl:s.image_url}}catch(t){throw console.error("Error updating news:",t),t}}async function h(t){await n();let e=s();try{let r=await e.query("DELETE FROM news WHERE id = $1 RETURNING id;",[t]);if(0===r.rows.length)throw Error("News not found");return{success:!0,id:t}}catch(t){throw console.error("Error deleting news:",t),t}}async function m(){await n();let t=s();try{let e=await t.query("SELECT * FROM resources ORDER BY id DESC");if(0===e.rows.length){for(let e of[{title:"4th SIET International Conference Official Brochure",category:"Brochures",type:"PDF",size:"1.2 MB",desc:"Complete conference schedule, keynote profiles (Prof. Jan De Waters), themes on STEAM in Education, and registration guidelines.",date:"March 2025",download_url:"#"},{title:"Call for Papers: SIET & LEnSE Annual Educational Technology Proceedings",category:"Submissions",type:"PDF",size:"876 KB",desc:"Paper formatting guidelines, submission tracks, peer review criteria, and deadlines for scholars and educational researchers.",date:"February 2025",download_url:"#"},{title:"FYUGP Semester II Extended Learning Module: Selected Literary Terms",category:"Courseware",type:"PDF / Interactive",size:"2.4 MB",desc:"Technology-enabled supplementary coursework developed by Ms. Greeshma Raveendran with Dr. Divya C. Senan under University of Kerala.",date:"January 2025",download_url:"#"},{title:"Hands-on Activity Toolkit: School STEM Learning Lab Curriculum",category:"Toolkits",type:"PDF",size:"3.8 MB",desc:"Comprehensive manual containing 50+ experiential lab activities, microcontroller coding tutorials, and robotics experiments for K-12 educators.",date:"May 2025",download_url:"#"},{title:"Prompt Engineering for Higher Education Educators: Instructional Guide",category:"Guides",type:"PDF",size:"1.5 MB",desc:"Curated handbook from Dr. Briju Tankachan (EdTech Society & IIT Mumbai) on leveraging generative AI tools to improve classroom instruction quality.",date:"January 2025",download_url:"#"},{title:"Institutional Annual Report & Policy Document (LEnSE / CLESE 2024-2025)",category:"Reports",type:"PDF",size:"4.2 MB",desc:"Comprehensive review of state camp series, gift student programs, international grants, and social inclusion reinvestment metrics.",date:"August 2025",download_url:"#"}])await t.query(`INSERT INTO resources (title, category, type, size, "desc", date, download_url)
           VALUES ($1, $2, $3, $4, $5, $6, $7)`,[e.title,e.category,e.type,e.size,e.desc,e.date,e.download_url]);e=await t.query("SELECT * FROM resources ORDER BY id DESC")}return e.rows.map(t=>({id:t.id,title:t.title,category:t.category,type:t.type,size:t.size,desc:t.desc,date:t.date,downloadUrl:t.download_url}))}catch(t){throw console.error("Error fetching resources:",t),t}}async function T(t){await n();let e=s(),{title:r,category:a,type:i,size:o,desc:l,date:d,downloadUrl:u}=t,c=`
    INSERT INTO resources (title, category, type, size, "desc", date, download_url)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;
  `;try{let t=(await e.query(c,[r,a,i,o,l,d,u])).rows[0];return{id:t.id,title:t.title,category:t.category,type:t.type,size:t.size,desc:t.desc,date:t.date,downloadUrl:t.download_url}}catch(t){throw console.error("Error inserting resource:",t),t}}async function R(t,e){await n();let r=s(),{title:a,category:i,type:o,size:l,desc:d,date:u,downloadUrl:c}=e,E=`
    UPDATE resources
    SET title = $1, category = $2, type = $3, size = $4, "desc" = $5, date = $6, download_url = $7
    WHERE id = $8
    RETURNING *;
  `;try{let e=await r.query(E,[a,i,o,l,d,u,c,t]);if(0===e.rows.length)throw Error("Resource not found");let s=e.rows[0];return{id:s.id,title:s.title,category:s.category,type:s.type,size:s.size,desc:s.desc,date:s.date,downloadUrl:s.download_url}}catch(t){throw console.error("Error updating resource:",t),t}}async function D(t){await n();let e=s();try{let r=await e.query("DELETE FROM resources WHERE id = $1 RETURNING id;",[t]);if(0===r.rows.length)throw Error("Resource not found");return{success:!0,id:t}}catch(t){throw console.error("Error deleting resource:",t),t}}a()}catch(t){a(t)}})}};