import Link from "next/link";
import ImageWithBlur from "../../components/images/ImageWithBlur";
import cloudinary from "../../src/utils/cloudinary";
import Image from "next/image";
import Bridge from "../../components/icons/Bridge";

/* eslint-disable no-unused-vars */
export interface ImagePropsCloudinary {
  id: number;
  height: string;
  width: string;
  public_id: string;
  format: string;
  blurDataUrl?: string;
}

const folderGallery = "gallery";
async function getImages() {
  // fetch resources from cloudinary
  // return image paths
  const results = await cloudinary.v2.search
    .expression(`folder:${folderGallery}/*`)
    .sort_by("public_id", "desc")
    .max_results(400)
    .execute();
  let reducedResults: ImagePropsCloudinary[] = [];

  let i = 0;
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    });
    i++;
  }
  return reducedResults;
}

export default async function Gallery() {
  const imagePaths: string[] = [];
  const images = await getImages();
  return (
    <div className="min-h-screen pb-20 bg-gradient-to-b from-white to-yellow-300/10">
      <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4 px-2">
        <div className="text-black after:content relative mb-5 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-yellow-900/20 px-6 pb-16 pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <span className="flex max-h-full max-w-full items-center justify-center text-black">
              <Bridge />
            </span>
            <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
          </div>
          <h1 className="mt-8 mb-4 text-base font-bold uppercase tracking-widest text-black">
            2023 NPP Photos
          </h1>
          <p className="max-w-[40ch] sm:max-w-[32ch] text-black/75">
            Silly shots from our shows and workshops.
          </p>
          <Link
            className="pointer z-10 mt-6 rounded-lg border border-white bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-white/10 hover:text-white md:mt-4"
            href="/"
          >
            Back to Home
          </Link>
        </div>
        {images.map((image: ImagePropsCloudinary) => {
          return (
            <Link
              key={image.id}
              href={`/?photoId=${image.id}`}
              as={`/p/${image.id}`}
              shallow
              className="after:content group relative mb-5 block w-full cursor-pointer after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
            >
              <Image
                key={image.id}
                width={200}
                height={200}
                alt="Gallery image"
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${image.public_id}.${image.format}`}
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110 w-full h-full object-cover object-center"
                sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 40vw,
                  25vw"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
