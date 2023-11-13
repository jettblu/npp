import cloudinary from "cloudinary";
import { getBase64ImageUrlFromRemote } from "./generateBlurPlaceholder";

cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export default cloudinary;

/* eslint-disable no-unused-vars */
export interface ImagePropsCloudinary {
  id: number;
  height: string;
  width: string;
  public_id: string;
  format: string;
  blurDataUrl?: string;
}

const cache = new Map<ImagePropsCloudinary, string>();

export async function getBase64ImageUrlCloudinary(
  image: ImagePropsCloudinary
): Promise<string> {
  let base64Cached = cache.get(image);
  if (base64Cached) {
    return base64Cached;
  }
  const imgUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_jpg,w_8,q_70/${image.public_id}.${image.format}`;
  const base64 = await getBase64ImageUrlFromRemote(imgUrl);
  cache.set(image, base64);
  return base64;
}
