export const EXPERIENCE_GROQ = `*[_type == "projects"]{
    "techstacks": techstack[].asset->url,
    "thumbnail":thumbnail.asset->url,
    "title":title,
    "description":description,
    "livelink":livelink,
    "sourcelink":sourcelink,
    "_id":_id,
}`;
