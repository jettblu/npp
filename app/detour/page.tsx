import CountdownTimer from "../../components/time/Countdown";
import Image from "next/image";
import type { Metadata } from "next";
import Splash from "../../components/detour/SplashImage";
import Link from "next/link";
import { Oswald, Open_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Detour 2024",
  description:
    "We're bringing the best of improv to Pittsburgh. Join us for a weekend of workshops, shows, and more March 29th-30th, 2024.",
};

const oswald = Oswald({ subsets: ["latin"], weight: "variable" });
const open_sans = Open_Sans({ subsets: ["latin"], weight: "variable" });

export default function Detour() {
  return (
    <div
      className={`bg-gradient-to-b from-detourPrimaryLight to-detourPrimaryYellow pb-32 xl:pb-0 h-full -mb-64 xl:-mb-32 -mt-4 ${open_sans.className}`}
    >
      <div className="flex flex-col xl:flex-row h-full">
        <div className="xl:w-[50%]  xl:h-full px-4 relative">
          {/* <div className="w-fit px-2 py-1 rounded-xl bg-yellow-500/20 text-gray-700 xl:text-gray-200 text-sm ml-8 mt-8 ring-[1px] ring-yellow-400">
          March 29-30, 2024
        </div> */}
          <div>
            {/* <div className="w-fit px-2 py-1 rounded-xl bg-yellow-500/20 text-gray-700 xl:text-gray-200 text-lg mt-8 ring-[1px] ring-yellow-400">
              April 29-30, 2024
            </div> */}
            <div className="h-[16vh]" />

            <div className="text-center">
              <h1
                className={`text-8xl xl:text-9xl text-center font-bold text-detourPrimaryDark xl:tracking-widest ${oswald.className}`}
              >
                DETOUR
              </h1>
              {/* <h2 className="text-4xl text-detourPrimaryYellow"></h2> */}
              <p className="text-4xl text-detourSecondaryDark">
                We're bringing the best of improv to Pittsburgh.
              </p>
            </div>

            <div className="mx-auto relative w-fit py-1 px-1 rounded-xl xl:text-gray-200 text-sm mt-6 ring-[1px] ring-detourSecondaryBlue1 mx-auto transition-colors duration-300 hover:bg-yellow-500/20 ">
              <p className="hover:cursor-pointer text-detourSecondaryBlue2 text-2xl">
                March 29th-30th, 2024
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-2 mt-3 ml-4">
            <p className="text-lg text-detourPrimaryDark">With Classes By</p>
            <Link href="/detour/2024/instructors">
              <div className="flex flex-row w-fit hover:scale-105 duration-300">
                <Image
                  src="/detour/2024/instructor headshots/DC Headshot.jpg"
                  width={100}
                  height={100}
                  alt="David Charles"
                  className={`rounded-full h-12 w-12 object-cover`}
                />
                <Image
                  src="/detour/2024/instructor headshots/FB Headshot.jpg"
                  width={100}
                  height={100}
                  alt="Fred Brown"
                  className={`rounded-full h-12 w-12 object-cover -ml-2`}
                />
                <Image
                  src="/detour/2024/instructor headshots/JP Headshot.jpg"
                  width={100}
                  height={100}
                  alt="Jonathan Pitts"
                  className={`rounded-full h-12 w-12 object-cover -ml-2`}
                />
                <Image
                  src="/detour/2024/instructor headshots/RG Headshot.webp"
                  width={100}
                  height={100}
                  alt="Ryan Goodman"
                  className={`rounded-full h-12 w-12 object-cover -ml-2`}
                />
                <Image
                  src="/detour/2024/instructor headshots/SL Headshot.webp"
                  width={100}
                  height={100}
                  alt="Shaun Laundry"
                  className={`rounded-full h-12 w-12 object-cover -ml-2`}
                />
              </div>
            </Link>
            <Link href="/detour/2024/instructors">
              <p className="text-lg text-detourSecondaryBlue2">Learn More</p>
            </Link>
          </div>

          {/* <CountdownTimer date="2024-03-29" /> */}
          <div className="h-[4vh]" />

          <div className="space-y-3 text-detourPrimaryDark mb-8 xl:mb-2 xl:px-2">
            <div className="flex flex-col space-y-1 ">
              <h2 className="text-3xl xl:text-2xl font-bold">FAQ</h2>
              <h3 className="text-xl xl:text-4xl font-bold">What is Detour?</h3>
              <p className="text-detourSecondaryDark text-xl">
                Join us for a weekend of workshops, shows, and more. Classes
                will be led by some of the best instructors from around the
                nation. We'll also have shows featuring local and national
                talent. See below for more info.
              </p>
            </div>
            <div className="flex flex-col space-y-1 ">
              <h3 className="text-xl xl:text-4xl font-bold">
                Where will it be hosted?
              </h3>
              <p className="text-detourSecondaryDark text-xl">
                Detour will be hosted at Carnegie Mellon University. Our address
                is 5000 Forbes Ave, Pittsburgh, PA 15213.
              </p>
            </div>
            <div className="flex flex-col space-y-1">
              <h3 className="text-xl xl:text-4xl font-bold">More Questions?</h3>
              {/* include mail link */}

              <p className="text-detourSecondaryDark text-xl">
                Email{" "}
                <a
                  href="mailto:anewkirk@andrew.cmu.edu"
                  className="hover:cursor-pointer hover:font-semibold text-detourSecondaryBlue2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Alex Newkirk
                </a>{" "}
                or{" "}
                <a
                  href="mailto:satao@andrew.cmu.edu"
                  className="hover:cursor-pointer hover:font-semibold text-detourSecondaryBlue2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Stephen Tao
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        <div className="xl:w-[50%] xl:h-[93vh] h-[80vh] px-2 xl:px-0 relative overflow-hidden">
          <Splash />
        </div>
      </div>
    </div>
  );
}
