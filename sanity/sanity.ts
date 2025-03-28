import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET,
  apiVersion: "v2022-03-07",
  useCdn: true,
});
