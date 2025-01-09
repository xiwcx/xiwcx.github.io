import cloudinary from "cloudinary";
import { CLOUDINARY_URL } from "astro:env/server";
import { z } from "astro:content";

const { hostname, username, password } = new URL(CLOUDINARY_URL);
const cloudinaryClient = cloudinary.v2;

cloudinaryClient.config({
  secure: true,
  cloud_name: hostname,
  api_key: username,
  api_secret: password,
});

export { cloudinaryClient };

const cloudinaryDerivedSchema = z.object({
  transformation: z.string(),
  format: z.string(),
  bytes: z.number(),
  id: z.string(),
  url: z.string(),
  secure_url: z.string(),
  extension: z.string(),
});

export const cloudinaryResourceSchema = z.object({
  asset_id: z.string(),
  public_id: z.string(),
  format: z.string(),
  version: z.number(),
  resource_type: z.string(),
  type: z.string(),
  created_at: z.string(),
  bytes: z.number(),
  width: z.number(),
  height: z.number(),
  asset_folder: z.string(),
  display_name: z.string(),
  url: z.string(),
  secure_url: z.string(),
  context: z.object({
    custom: z.object({
      alt: z.string(),
    }),
  }),
  last_updated: z.object({
    context_updated_at: z.string(),
    updated_at: z.string(),
  }),
  next_cursor: z.string(),
  derived: z.array(cloudinaryDerivedSchema),
  rate_limit_allowed: z.number(),
  rate_limit_reset_at: z.coerce.date(),
  rate_limit_remaining: z.number(),
});

export type CloudinaryResource = z.infer<typeof cloudinaryResourceSchema>;
