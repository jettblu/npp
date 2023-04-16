import VideoPlayer from "@/components/film/VideoPlayer";
import { IMember } from "@/members/models";
import { pgSpring23 } from "@/pg/spring23";
import type { NextPage } from "next";

const Members: NextPage = () => {
  const membersToDisplay: IMember[] = pgSpring23;
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
            About
          </h1>
          <div className="text-lg text-gray-500 mb-4">
            <p>Inducing giggles and guffaws since 1996.</p>
          </div>
          <div className="text-xl text-black dark:text-white">
            <p>
              The No Parking Players are Carnegie Mellon University's premier
              improv comedy troupe.
            </p>
            <p>
              We perform monthly shows and host improv classes for students of
              all skill levels.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Members;
