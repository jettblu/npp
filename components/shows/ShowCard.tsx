import { NextPage } from "next";
import Image from "next/image";
import { IShow } from "@/shows/models";
import DateFormatter from "../time/DateFormatter";
import fs from "node:fs/promises";
import { join } from "path";
import { getPlaiceholder } from "plaiceholder";

interface Props {
  show: IShow;
}

const basePath = join(process.cwd(), "public");
export default async function ShowCard(props: Props) {
  const { show } = { ...props };
  const imgBuffer = await fs.readFile(join(basePath, show.photoPath));
  const { base64 } = await getPlaiceholder(imgBuffer);

  return (
    <div className="flex flex-col md:flex-row border p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900">
      <Image
        src={show.photoPath}
        width={200}
        height={200}
        placeholder="blur"
        blurDataURL={base64}
        className="min-w-40 min-h-48 w-40 h-64 object-cover"
        alt={`${show.name} show poster.`}
      />
      <div className="flex flex-col space-y-2 mt-2 px-2">
        <div className="flex flex-col">
          <div className="mb-2">
            <p className="text-xl text-gray-700 dark:text-gray-200 font-semibold">
              {show.name}
            </p>
            <DateFormatter dateString={show.date} />
          </div>
          <div className="text-lg">{show.description}</div>
        </div>
      </div>
    </div>
  );
}
