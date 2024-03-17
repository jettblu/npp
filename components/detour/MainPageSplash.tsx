import Image from "next/image";
import { IMember } from "@/members/models";
import { pgSpring23 } from "@/pg/spring23";
import type { NextPage } from "next";
import Link from "next/link";
import SocialFooter from "../footer/SocialFooter";
import { Open_Sans, Oswald } from "next/font/google";
import GroupImage from "/public/pg/spring23/NPP Group Clue Blur.webp";

const oswald = Oswald({ subsets: ["latin"], weight: "variable" });
const open_sans = Open_Sans({ subsets: ["latin"], weight: "variable" });
const MainPageSplash: NextPage = () => {
  const membersToDisplay: IMember[] = pgSpring23;

  return (
    <div className="">
      <main className="px-4">
        <div className="mb-8">
          <div className="flex flex-row space-x-2">
            <h1 className="font-extrabold text-left text-8xl text-gray-800 dark:text-gray-200 hover:dark:text-white hover:text-black transition-colors duration-1500">
              NPP
            </h1>
          </div>
          <div className="text-3xl md:text-5xl text-gray-500 mb-8">
            <p>Sharing giggles and guffaws since 1996.</p>
          </div>
          <p className={`${open_sans.className} text-7xl md:text-9xl `}>
            You Like Improv? You'll love{" "}
            <Link href={"/detour"} className="hover:cursor-pointer">
              <span
                className={`${oswald.className} tracking-wide xl:tracking-widest text-detourPrimaryYellow underline`}
              >
                DETOUR
              </span>
            </Link>
            .
          </p>
        </div>
        <Image
          src={GroupImage}
          alt="NPP Group Clue"
          width={1000}
          height={1000}
          placeholder="blur"
          className="rounded-xl mx-auto w-full ring ring-2 ring-gray-300 hover:ring-gray-400 transition-colors duration-300"
        />
        <p className="text-center text-gray-500 text-2xl">
          The No Parking Players after our final show of spring 2023.
        </p>
        <div className="w-full">
          <div className="mx-auto w-fit">
            <Link
              href="/gallery"
              className="text-yellow-400 text-2xl py-1 hover:brightness-105 text-center mx-auto"
            >
              👀 View More Photos 👀
            </Link>
          </div>
        </div>
        <div className="h-12" />
      </main>
      <SocialFooter />
    </div>
  );
};

export default MainPageSplash;
