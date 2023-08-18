import type { NextPage } from "next";

import { nppShows } from "@/shows";

import VideoPlayer from "../../components/film/VideoPlayer";
import ShowCard from "../../components/shows/ShowCard";

const Members: NextPage = () => {
  const archiveShows = nppShows;
  return (
    <div className="">
      {/* <Head>
        <title>CMU Projects</title>
        <meta name="description" content="CMU blockchain club resouces." />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <main className="max-w-4xl mx-auto px-8 pb-20">
        <div className="min-h-[6vh]"></div>

        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-black dark:text-white">
            Shows
          </h1>
          <p className="text-lg text-gray-500">
            Come experience the magic of improv comedy!
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          {archiveShows.map((s) => {
            return <ShowCard show={s} key={s.name} />;
          })}
        </div>
        <div className="mt-10">
          <div className="px-2 pt-2 pb-8 rounded-tl-lg rounded-tr-lg max-w-full mx-auto flex flex-col space-y-8 hover:bg-gray-50 transition-colors duration-300">
            <div className="px-2">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 dark:text-white ">
                Highlights ✨
              </h3>
              <p className="text-lg text-gray-500">
                Frames from our most recent shows.
              </p>
            </div>

            <VideoPlayer
              videoSrc="https://youtu.be/EnYGBnY17V4"
              isPlaying={false}
            />

            <VideoPlayer
              videoSrc="https://www.youtube.com/watch?v=29jch1yiPhA"
              isPlaying={false}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Members;
