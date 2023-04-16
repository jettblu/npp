import { IMember } from "@/members/models";
import { pgSpring23 } from "@/pg/spring23";
import type { NextPage } from "next";
import MemberCard from "../../components/members/MemberCard";
import { IShow } from "@/shows/models";
import { nppShows } from "@/shows";
import { useState } from "react";
import FeaturedShow from "@/components/shows/FeaturedShow";
import ShowCard from "@/components/shows/ShowCard";
import VideoPlayer from "@/components/film/VideoPlayer";

const Members: NextPage = () => {
  const [featuredShow, setFeaturedShow] = useState<IShow>(nppShows[0]);
  // TODO: UPDATE TO EXLUDE FEATURED SHOW
  const [archiveShows, setArchiveShows] = useState<IShow[]>(nppShows);
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
        <div className=" mx-auto mt-10 flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
          <div className="flex-grow">
            <VideoPlayer
              videoSrc="https://youtu.be/EnYGBnY17V4"
              isPlaying={false}
            />
          </div>
          <div className="flex-grow">
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
