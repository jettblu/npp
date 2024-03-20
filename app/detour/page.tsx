import CountdownTimer from "../../components/time/Countdown";
import Image from "next/image";
import type { Metadata } from "next";
import Splash from "../../components/detour/SplashImage";
import Link from "next/link";
import { Oswald, Open_Sans } from "next/font/google";
import ScheduleList from "../../components/detour/ScheduleList";

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
      className={`bg-gradient-to-b bg-detourPrimaryLight pb-32 xl:pb-0 h-full -mb-64 xl:-mb-32 -mt-4 ${open_sans.className}`}
    >
      <div className="flex flex-col xl:flex-row">
        <div className="xl:w-[50%] px-4 relative">
          {/* <div className="w-fit px-2 py-1 rounded-xl bg-yellow-500/20 text-gray-700 xl:text-gray-200 text-sm ml-8 mt-8 ring-[1px] ring-yellow-400">
          March 29-30, 2024
        </div> */}
          <div>
            <div className="h-[16vh]" />

            <div className="text-center">
              <h1
                className={`text-7xl xl:text-9xl text-center font-bold text-detourPrimaryDark xl:tracking-widest ${oswald.className}`}
              >
                DETOUR
              </h1>
              {/* <h2 className="text-4xl text-detourPrimaryYellow"></h2> */}
              <p className="text-4xl text-detourSecondaryDark">
                We're bringing the best of improv to Pittsburgh.
              </p>
            </div>
            <CountdownTimer date="2024-03-29" />
            <a
              href="https://cglink.me/2c1/r1929023"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="mx-auto relative w-fit py-1 px-1 rounded-xl xl:text-gray-200 mt-6 ring-[1px] ring-detourSecondaryBlue1 mx-auto transition-colors duration-300 hover:bg-yellow-500/20 ">
                <p className="hover:cursor-pointer text-detourSecondaryBlue2 text-3xl animate-pulse">
                  Buy Tickets Now
                </p>
              </div>
            </a>
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
                  alt="Shaun Landry"
                  className={`rounded-full h-12 w-12 object-cover -ml-2`}
                />
              </div>
            </Link>
            <Link href="/detour/2024/instructors">
              <p className="text-lg text-detourSecondaryBlue2">Learn More</p>
            </Link>
          </div>
          <div className="h-[3vh] xl:h-[4vh]" />
          <p className="text-detourSecondaryDark text-xl">
            Join us for a weekend of workshops, shows, and more. Classes will be
            led by some of the best instructors from around the nation. We'll
            also have shows featuring local and national talent. See below for
            more info.
          </p>
          <div className="mx-auto w-fit flex flex-row space-x-4 text-3xl mt-3 xl:mt-32">
            <div className="w-12 h-12 rounded-full animate-bounce border border-2 border-detourSecondaryBlue2 text-xl text-center text-detourSecondaryBlue2 pt-2">
              ↓
            </div>
          </div>
        </div>
        <div className="xl:w-[50%] xl:h-[93vh] h-[80vh] px-2 xl:px-0 relative overflow-hidden bg-rd-500">
          <Splash />
        </div>
      </div>
      <div className="flex flex-col xl:flex-row xl:h-[93vh] w-full px-4 xl:px-0 mt-0 ">
        <div className="xl:w-1/2 xl:bg-detourPrimaryBlue">
          <h3
            className={`${open_sans.className} text-3xl xl:text-7xl font-bold xl:text-center mt-12 xl:mt-[25vh] xl:text-detourPrimaryLight mb-3`}
          >
            FAQ
          </h3>
        </div>
        <div className="xl:h-full xl:w-1/2">
          <div className=" space-y-3 text-detourPrimaryDark mb-8 xl:mb-2 xl:px-2 xl:mt-[20vh]">
            <div className="flex flex-col space-y-1 ">
              <h3 className="text-xl xl:text-4xl font-bold">What is Detour?</h3>
              <p className="text-detourSecondaryDark text-xl">
                Detour is a collegiate improv festival hosted by NPP at Carnegie
                Mellon University. The festival includes a variety of workshop
                topics and performances for everyone (even non-improvisers) to
                enjoy.
              </p>
              <p className="text-detourSecondaryDark text-xl">
                This is the fifth time we’ve hosted Detour, and we couldn’t be
                more excited!
              </p>
            </div>
            <div className="flex flex-col space-y-1 ">
              <h3 className="text-xl xl:text-4xl font-bold">
                How much does it cost?
              </h3>
              <p className="text-detourSecondaryDark text-xl">
                The festival’s opening ceremony, performances, and workshops are
                all completely <span className="font-semibold">free</span>!
                Individual workshops are ticketed, and space is limited.
              </p>
            </div>

            <div className="flex flex-col space-y-1 ">
              <h3 className="text-xl xl:text-4xl font-bold">
                Where can I sign up?
              </h3>
              <p className="text-detourSecondaryDark text-xl">
                RSVP information for our opening ceremony/dinner, performances,
                tickets for classes, etc. can be found{" "}
                <a
                  href="https://cglink.me/2c1/r1929023"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:cursor-pointer hover:font-semibold text-detourSecondaryBlue2"
                >
                  here
                </a>
                .
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
      </div>
      <div
        className="flex flex-col xl:flex-row h-[93vh] w-full px-4 xl:px-0"
        id="schedule"
      >
        <div className="xl:w-1/2 xl:bg-detourPrimaryBlue2">
          <h3
            className={`${open_sans.className} text-3xl xl:text-7xl font-bold xl:text-center mt-12 xl:mt-[35vh] mb-3`}
          >
            Schedule
          </h3>
        </div>
        <div className="h-full xl:w-1/2">
          <div className="space-y-3 text-detourPrimaryDark mb-8 xl:mb-2 xl:px-2 xl:mt-[14vh] ">
            <ScheduleList />
          </div>
        </div>
      </div>
    </div>
  );
}
