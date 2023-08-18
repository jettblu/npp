import Image from "next/image";
import { IMember } from "@/members/models";
import { pgSpring23 } from "@/pg/spring23";
import type { NextPage } from "next";

const About: NextPage = () => {
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
          <h1 className="font-extrabold text-left text-4xl md:text-5xl text-gray-800 dark:text-gray-200 hover:dark:text-white hover:text-black transition-colors duration-1500">
            NPP
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
        <div className="my-4">
          <Image
            src="/pg/spring23/NPP Group Clue Blur.webp"
            alt="NPP Group Clue"
            width={500}
            height={500}
            className="rounded-xl mx-auto w-full outline outline-gray-300 hover:outline-gray-400 transition-colors duration-300"
          />
          {/* caption for the image */}
          <p className="text-center text-gray-500">
            The No Parking Players after our final show of the spring.
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
