export const PROJECTS_GROQ = `*[_type == "projects"]{
    "techstacks": techstack[].asset->url,
    "thumbnail":thumbnail.asset->url,
    "title":title,
    "description":description,
    "livelink":livelink,
    "sourcelink":sourcelink,
    "_id":_id,
}`;

export const TESTIMONIALS_GROQ = `*[_type == "testimoniols"]{
  "quote":quote,
  "name":name,
  "_id":_id,
  "client_profile":profile.asset->url,
  "title":title
}`;

export const COMPANIES = `*[_type == "companies"]{
  "company_logo": logo[].asset->url,
  "name":name,
  "_id":_id
}`;

export const EXPERIENCE_GROQ = `*[_type == "experience"]{
  "workplace_name":workplace_name,
  "start_date":start_date,
  "workplace_logo":image.asset->url,
  "end_date":end_date,
  "role":role,
  "year":year,
  "_id":_id,
  "task_handled":task_handled[]{
  style,
  list,
  marks[]{
    value
  },
  children[]{
    text
  }
}
}`;
