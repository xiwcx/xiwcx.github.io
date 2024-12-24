import cloudinary from "cloudinary";
import { CLOUDINARY_URL } from "astro:env/server";

const { hostname, username, password } = new URL(CLOUDINARY_URL);

// console.log(url);

const cloudinaryClient = cloudinary.v2;

cloudinaryClient.config({
  secure: true,
  cloud_name: hostname,
  api_key: password,
  api_secret: username,
});

export { cloudinaryClient };
