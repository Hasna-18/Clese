"use strict";(()=>{var t={};t.id=873,t.ids=[873],t.modules={399:t=>{t.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:t=>{t.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},8678:t=>{t.exports=import("pg")},4864:(t,e,r)=>{r.a(t,async(t,a)=>{try{r.r(e),r.d(e,{originalPathname:()=>g,patchFetch:()=>u,requestAsyncStorage:()=>c,routeModule:()=>d,serverHooks:()=>_,staticGenerationAsyncStorage:()=>E});var i=r(9303),s=r(8716),n=r(670),o=r(2586),l=t([o]);o=(l.then?(await l)():l)[0];let d=new i.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/events/route",pathname:"/api/events",filename:"route",bundlePath:"app/api/events/route"},resolvedPagePath:"C:\\Users\\VIGNESH\\HASNA\\universe\\universe\\app\\api\\events\\route.js",nextConfigOutput:"",userland:o}),{requestAsyncStorage:c,staticGenerationAsyncStorage:E,serverHooks:_}=d,g="/api/events/route";function u(){return(0,n.patchFetch)({serverHooks:_,staticGenerationAsyncStorage:E})}a()}catch(t){a(t)}})},2586:(t,e,r)=>{r.a(t,async(t,a)=>{try{r.r(e),r.d(e,{DELETE:()=>d,GET:()=>o,POST:()=>l,PUT:()=>u});var i=r(7070),s=r(53),n=t([s]);async function o(){try{let t=await (0,s.vw)();return i.NextResponse.json(t)}catch(t){return console.warn("DB offline or unreachable, returning empty list:",t.message),i.NextResponse.json([],{status:200})}}async function l(t){try{let e=await t.json();if(!e.title||!e.dateDay||!e.imageUrl||!e.filterType)return i.NextResponse.json({error:"Missing required fields (title, dateDay, imageUrl, filterType)"},{status:400});let r=await (0,s.vP)(e);return i.NextResponse.json(r,{status:201})}catch(t){return console.error("Error adding event:",t),i.NextResponse.json({error:t.message||"Failed to add event"},{status:500})}}async function u(t){try{let e=await t.json();if(!e.id)return i.NextResponse.json({error:"Event ID is required for update"},{status:400});let r=await (0,s.eJ)(e.id,e);return i.NextResponse.json(r)}catch(t){return console.error("Error updating event:",t),i.NextResponse.json({error:t.message||"Failed to update event"},{status:500})}}async function d(t){try{let{searchParams:e}=new URL(t.url),r=e.get("id");if(r||(r=(await t.json().catch(()=>({}))).id),!r)return i.NextResponse.json({error:"Event ID is required"},{status:400});let a=await (0,s.Bt)(r);return i.NextResponse.json(a)}catch(t){return console.error("Error deleting event:",t),i.NextResponse.json({error:t.message||"Failed to delete event"},{status:500})}}s=(n.then?(await n)():n)[0],a()}catch(t){a(t)}})},53:(t,e,r)=>{r.a(t,async(t,a)=>{try{r.d(e,{Bt:()=>c,Y:()=>E,dD:()=>y,eJ:()=>d,fg:()=>p,id:()=>T,jB:()=>w,jh:()=>m,kN:()=>h,lg:()=>g,rp:()=>R,uB:()=>_,vP:()=>u,vw:()=>l,yQ:()=>f});var i=r(8678),s=t([i]);i=(s.then?(await s)():s)[0];let D=globalThis._pgPool;function n(){if(!D){let t=process.env.DATABASE_URL?process.env.DATABASE_URL.trim():null;if(!t)throw Error("DATABASE_URL is not set.");D=new i.Pool({connectionString:t,ssl:{rejectUnauthorized:!1},connectionTimeoutMillis:15e3,idleTimeoutMillis:3e4,max:10})}return D}async function o(){let t=n();try{await t.query(`
      CREATE TABLE IF NOT EXISTS news (
        id SERIAL PRIMARY KEY,
        tag VARCHAR(100),
        category VARCHAR(100),
        title VARCHAR(255),
        "desc" TEXT,
        date VARCHAR(100),
        image_url VARCHAR(500)
      );
    `),await t.query(`
      ALTER TABLE events
      ADD COLUMN IF NOT EXISTS details JSONB;
    `),await t.query(`
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
    `)}catch(t){console.error("Error creating tables:",t)}}async function l(){await o();let t=n();try{return(await t.query("SELECT * FROM events ORDER BY id ASC")).rows.map(t=>({id:t.id,dateDay:t.date_day,dateMonth:t.date_month,dateYear:t.date_year,category:t.category,title:t.title,subtitle:t.subtitle,imageUrl:t.image_url,filterType:t.filter_type,details:t.details||{}}))}catch(t){throw console.error("Error fetching events from DB:",t),t}}async function u(t){await o();let e=n(),{dateDay:r,dateMonth:a,dateYear:i,category:s,title:l,subtitle:u,imageUrl:d,filterType:c,details:E}=t,_=`
    INSERT INTO events (date_day, date_month, date_year, category, title, subtitle, image_url, filter_type, details)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9::jsonb)
    RETURNING *;
  `,g=[r,a,i,s,l,u||"",d,c,JSON.stringify(E||{})];try{let t=(await e.query(_,g)).rows[0];return{id:t.id,dateDay:t.date_day,dateMonth:t.date_month,dateYear:t.date_year,category:t.category,title:t.title,subtitle:t.subtitle,imageUrl:t.image_url,filterType:t.filter_type,details:t.details||{}}}catch(t){throw console.error("Error inserting event into DB:",t),t}}async function d(t,e){await o();let r=n(),{dateDay:a,dateMonth:i,dateYear:s,category:l,title:u,subtitle:d,imageUrl:c,filterType:E,details:_}=e,g=`
    UPDATE events
    SET date_day = $1, date_month = $2, date_year = $3, category = $4, title = $5, subtitle = $6, image_url = $7, filter_type = $8, details = $9::jsonb
    WHERE id = $10
    RETURNING *;
  `,y=[a,i,s,l,u,d||"",c,E,JSON.stringify(_||{}),t];try{let t=await r.query(g,y);if(0===t.rows.length)throw Error("Event not found");let e=t.rows[0];return{id:e.id,dateDay:e.date_day,dateMonth:e.date_month,dateYear:e.date_year,category:e.category,title:e.title,subtitle:e.subtitle,imageUrl:e.image_url,filterType:e.filter_type}}catch(t){throw console.error("Error updating event in DB:",t),t}}async function c(t){let e=n();try{let r=await e.query("DELETE FROM events WHERE id = $1 RETURNING id;",[t]);if(0===r.rows.length)throw Error("Event not found");return{success:!0,id:t}}catch(t){throw console.error("Error deleting event from DB:",t),t}}async function E(t){await o();let e=n();try{let r=await e.query("SELECT * FROM events WHERE id = $1 LIMIT 1;",[t]);if(0===r.rows.length)return null;let a=r.rows[0];return{id:a.id,dateDay:a.date_day,dateMonth:a.date_month,dateYear:a.date_year,category:a.category,title:a.title,subtitle:a.subtitle,imageUrl:a.image_url,filterType:a.filter_type,details:a.details||{}}}catch(t){throw console.error("Error fetching event by ID:",t),t}}async function _(){let t=n();try{let e=await t.query("SELECT * FROM event_settings WHERE id = 1 LIMIT 1;");if(0===e.rows.length)return null;let r=e.rows[0],a=[];return r.featured_initiatives&&(a="string"==typeof r.featured_initiatives?JSON.parse(r.featured_initiatives):r.featured_initiatives),Array.isArray(a)&&0!==a.length||(a=[{id:"init-1",tag:r.featured_tag||"FEATURED INITIATIVE",title:r.featured_title||"STEM 4 Girls",subtitle:r.featured_subtitle||"Creating opportunities.<br/>Inspiring futures.",imageUrl:r.featured_image||"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",link:r.featured_link||"#"}]),{id:r.id,heroTag:r.hero_tag,heroTitle:r.hero_title,heroSubtitle:r.hero_subtitle,heroImage:r.hero_image,featuredTag:r.featured_tag,featuredTitle:r.featured_title,featuredSubtitle:r.featured_subtitle,featuredImage:r.featured_image,featuredLink:r.featured_link,featuredInitiatives:a,stat1Number:r.stat1_number,stat1Text:r.stat1_text,stat2Number:r.stat2_number,stat2Text:r.stat2_text,stat3Number:r.stat3_number,stat3Text:r.stat3_text,stat4Number:r.stat4_number,stat4Text:r.stat4_text,newsletterTitle:r.newsletter_title,newsletterText:r.newsletter_text}}catch(t){throw console.error("Error fetching event settings from DB:",t),t}}async function g(t){let e=n(),{heroTag:r,heroTitle:a,heroSubtitle:i,heroImage:s,featuredTag:o,featuredTitle:l,featuredSubtitle:u,featuredImage:d,featuredLink:c,featuredInitiatives:E,stat1Number:_,stat1Text:g,stat2Number:y,stat2Text:f,stat3Number:w,stat3Text:h,stat4Number:m,stat4Text:R,newsletterTitle:T,newsletterText:p}=t,D=JSON.stringify(E||[]),$=`
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
  `;try{let t=(await e.query($,[r||"EVENTS",a||"Discover. Learn.\nConnect.",i||"",s||"/events/e1.png",o||"FEATURED INITIATIVE",l||"STEM 4 Girls",u||"",d||"/events/e1.png",c||"#",_||"56+",g||"Gifted Students<br/>Supported",y||"44",f||"Schools in<br/>Kerala",w||"41",h||"Educational<br/>Districts",m||"6+",R||"Programmes<br/>Organized",T||"Stay Updated",p||"",D])).rows[0],n=[];return t.featured_initiatives&&(n="string"==typeof t.featured_initiatives?JSON.parse(t.featured_initiatives):t.featured_initiatives),{id:t.id,heroTag:t.hero_tag,heroTitle:t.hero_title,heroSubtitle:t.hero_subtitle,heroImage:t.hero_image,featuredTag:t.featured_tag,featuredTitle:t.featured_title,featuredSubtitle:t.featured_subtitle,featuredImage:t.featured_image,featuredLink:t.featured_link,featuredInitiatives:n,stat1Number:t.stat1_number,stat1Text:t.stat1_text,stat2Number:t.stat2_number,stat2Text:t.stat2_text,stat3Number:t.stat3_number,stat3Text:t.stat3_text,stat4Number:t.stat4_number,stat4Text:t.stat4_text,newsletterTitle:t.newsletter_title,newsletterText:t.newsletter_text}}catch(t){throw console.error("Error updating event settings in DB:",t),t}}async function y(){await o();let t=n();try{return(await t.query("SELECT * FROM news ORDER BY id DESC")).rows.map(t=>({id:t.id,tag:t.tag,category:t.category,title:t.title,desc:t.desc,date:t.date,imageUrl:t.image_url}))}catch(t){throw console.error("Error fetching news:",t),t}}async function f(t){await o();let e=n(),{tag:r,category:a,title:i,desc:s,date:l,imageUrl:u}=t,d=`
    INSERT INTO news (tag, category, title, "desc", date, image_url)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;try{let t=(await e.query(d,[r,a,i,s,l,u])).rows[0];return{id:t.id,tag:t.tag,category:t.category,title:t.title,desc:t.desc,date:t.date,imageUrl:t.image_url}}catch(t){throw console.error("Error inserting news:",t),t}}async function w(t,e){await o();let r=n(),{tag:a,category:i,title:s,desc:l,date:u,imageUrl:d}=e,c=`
    UPDATE news
    SET tag = $1, category = $2, title = $3, "desc" = $4, date = $5, image_url = $6
    WHERE id = $7
    RETURNING *;
  `;try{let e=await r.query(c,[a,i,s,l,u,d,t]);if(0===e.rows.length)throw Error("News not found");let n=e.rows[0];return{id:n.id,tag:n.tag,category:n.category,title:n.title,desc:n.desc,date:n.date,imageUrl:n.image_url}}catch(t){throw console.error("Error updating news:",t),t}}async function h(t){await o();let e=n();try{let r=await e.query("DELETE FROM news WHERE id = $1 RETURNING id;",[t]);if(0===r.rows.length)throw Error("News not found");return{success:!0,id:t}}catch(t){throw console.error("Error deleting news:",t),t}}async function m(){await o();let t=n();try{return(await t.query("SELECT * FROM resources ORDER BY id DESC")).rows.map(t=>({id:t.id,title:t.title,category:t.category,type:t.type,size:t.size,desc:t.desc,date:t.date,downloadUrl:t.download_url}))}catch(t){throw console.error("Error fetching resources:",t),t}}async function R(t){await o();let e=n(),{title:r,category:a,type:i,size:s,desc:l,date:u,downloadUrl:d}=t,c=`
    INSERT INTO resources (title, category, type, size, "desc", date, download_url)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;
  `;try{let t=(await e.query(c,[r,a,i,s,l,u,d])).rows[0];return{id:t.id,title:t.title,category:t.category,type:t.type,size:t.size,desc:t.desc,date:t.date,downloadUrl:t.download_url}}catch(t){throw console.error("Error inserting resource:",t),t}}async function T(t,e){await o();let r=n(),{title:a,category:i,type:s,size:l,desc:u,date:d,downloadUrl:c}=e,E=`
    UPDATE resources
    SET title = $1, category = $2, type = $3, size = $4, "desc" = $5, date = $6, download_url = $7
    WHERE id = $8
    RETURNING *;
  `;try{let e=await r.query(E,[a,i,s,l,u,d,c,t]);if(0===e.rows.length)throw Error("Resource not found");let n=e.rows[0];return{id:n.id,title:n.title,category:n.category,type:n.type,size:n.size,desc:n.desc,date:n.date,downloadUrl:n.download_url}}catch(t){throw console.error("Error updating resource:",t),t}}async function p(t){await o();let e=n();try{let r=await e.query("DELETE FROM resources WHERE id = $1 RETURNING id;",[t]);if(0===r.rows.length)throw Error("Resource not found");return{success:!0,id:t}}catch(t){throw console.error("Error deleting resource:",t),t}}a()}catch(t){a(t)}})}};var e=require("../../../webpack-runtime.js");e.C(t);var r=t=>e(e.s=t),a=e.X(0,[276,972],()=>r(4864));module.exports=a})();