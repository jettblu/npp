import Image from "next/image";
import { IMember } from "@/members/models";
import { pgSpring23 } from "@/pg/spring23";
import type { NextPage } from "next";
import SocialFooter from "../components/footer/SocialFooter";
import GroupImage from "../public/pg/spring23/NPP Group Clue Blur.webp";
import Link from "next/link";

const Home: NextPage = () => {
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
          <div className="flex flex-row space-x-2">
            <h1 className="font-extrabold text-left text-4xl md:text-5xl text-gray-800 dark:text-gray-200 hover:dark:text-white hover:text-black transition-colors duration-1500">
              NPP
            </h1>
            <Image
              src="/brand/logoLight.webp"
              className="ml-3"
              width={50}
              height={50}
              alt="Logo"
            />
          </div>

          <div className="text-lg text-gray-500">
            <p>Sharing giggles and guffaws since 1996.</p>
          </div>
          <div className="text-xl text-black dark:text-white">
            <p>
              The No Parking Players are Carnegie Mellon University's premier
              improv comedy troupe.
            </p>
            <p>
              We perform monthly{" "}
              <Link
                href="/detour"
                className="hover:cursor-pointer text-yellow-400 underline"
              >
                shows
              </Link>{" "}
              and host improv classes for students of all skill levels.
            </p>
            <p className="mt-2 text-gray-400">
              P.S. You like improv festivals? You'll love{" "}
              <Link
                href="/detour"
                className="hover:cursor-pointer text-yellow-400 underline"
              >
                Detour
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="my-4">
          <Image
            src={GroupImage}
            alt="NPP Group Clue"
            width={500}
            height={500}
            placeholder="blur"
            className="rounded-xl mx-auto w-full ring ring-2 ring-gray-300 hover:ring-gray-400 transition-colors duration-300"
          />
          {/* caption for the image */}
          <p className="text-center text-gray-500">
            The No Parking Players after our final show of the spring.
          </p>
        </div>
      </main>
      <SocialFooter />
    </div>
  );
};

export default Home;
