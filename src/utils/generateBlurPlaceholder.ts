import { getPlaiceholder } from "plaiceholder";

export async function getBase64ImageUrlFromRemote(imgUrl: string) {
  const response = await fetch(imgUrl);
  const bufferArr = await response.arrayBuffer();
  // convert to buffer
  const buffer = Buffer.from(bufferArr);
  const { base64 } = await getPlaiceholder(buffer);
  return base64;
}
