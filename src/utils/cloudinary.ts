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

export const cloudinaryResourceSchema = z.object({
  public_id: z.string(),
  width: z.number(),
  height: z.number(),
  secure_url: z.string(),
  context: z
    .object({
      custom: z.object({
        alt: z.string(),
      }),
    })
    .optional(),
});

export type CloudinaryResource = z.infer<typeof cloudinaryResourceSchema>;

export const getCloudinaryResource = async (cloudinaryId: string) => {
  let resource: CloudinaryResource;

  try {
    const response = await cloudinaryClient.api.resource(cloudinaryId);

    // debugger;

    resource = cloudinaryResourceSchema.parse(response);
  } catch (e) {
    throw Error(JSON.stringify(e));
  }

  return resource;
};

export type Size = [minWidthPX: number, sizeVW: number];

export const defaultImageSizes: Size[] = [
  [0, 100],
  [600, 75],
  [800, 50],
];
