import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
const config = {
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-03-04",
  useCdn: false,
  token: process.env.REACT_APP_SANITY_TOKEN,
};
console.log(config, "config");
export const client = createClient(config);
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
