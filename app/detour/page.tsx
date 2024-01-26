import CountdownTimer from "../../components/time/Countdown";
import Image from "next/image";
import type { Metadata } from "next";
import Splash from "../../components/detour/SplashImage";

export const metadata: Metadata = {
  title: "Detour 2024",
  description:
    "We're bringing the best of improv to Pittsburgh. Join us for a weekend of workshops, shows, and more April 5th-6th, 2024.",
};

export default function Detour() {
  return (
    <div className="xl:bg-black">
      <div className="flex flex-col xl:flex-row xl:h-[92vh]">
        <div className="xl:w-[50%] xl:bg-gradient-to-b from-black to-zinc-900 xl:h-full px-4 relative">
          {/* <div className="w-fit px-2 py-1 rounded-xl bg-yellow-500/20 text-gray-700 xl:text-gray-200 text-sm ml-8 mt-8 ring-[1px] ring-yellow-400">
          March 29-30, 2024
        </div> */}
          <div>
            {/* <div className="w-fit px-2 py-1 rounded-xl bg-yellow-500/20 text-gray-700 xl:text-gray-200 text-lg mt-8 ring-[1px] ring-yellow-400">
              April 29-30, 2024
            </div> */}
            <div className="h-[18vh]" />

            <div className="text-center">
              <h1 className="text-9xl font-bold xl:text-white">Detour</h1>
              <h2 className="text-4xl text-yellow-500">
                March 29th-30th, 2024
              </h2>
              <p className="text-4xl text-gray-500">
                We're bringing the best of improv to Pittsburgh.
              </p>
            </div>

            <div className="mx-auto relative w-fit py-1 rounded-xl text-gray-700 xl:text-gray-200 text-sm mt-8 ring-[1px] ring-yellow-400 mx-auto transition-colors duration-300 hover:bg-yellow-500/20 ">
              <a
                href="https://forms.gle/fuEVXt5XgAavptua9"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <p className="hover:cursor-pointer text-yellow-400 text-2xl">
                  Apply to Participate
                </p>
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-2 mt-3 ml-4">
            <p className="text-lg text-gray-400">With Classes By</p>
            <div className="flex flex-row w-fit">
              <Image
                src="/pg/spring23/alex.webp"
                width={100}
                height={100}
                alt="Alex Newkirk"
                className={`rounded-full h-12 w-12 object-cover`}
              />
              <Image
                src="/pg/spring23/stephen.jpg"
                width={100}
                height={100}
                alt="Stephen Tao"
                className={`rounded-full h-12 w-12 object-cover -ml-2`}
              />
              <Image
                src="/pg/spring23/patrick.jpg"
                width={100}
                height={100}
                alt="Stephen Tao"
                className={`rounded-full h-12 w-12 object-cover -ml-2`}
              />
              <Image
                src="/pg/spring23/efe.webp"
                width={100}
                height={100}
                alt="Efe"
                className={`rounded-full h-12 w-12 object-cover -ml-2`}
              />
              <Image
                src="/pg/spring23/liz.webp"
                width={100}
                height={100}
                alt="Efe"
                className={`rounded-full h-12 w-12 object-cover -ml-2`}
              />
            </div>
          </div>

          {/* <CountdownTimer date="2024-03-29" /> */}
          <div className="h-[4vh]" />

          <div className="space-y-3 xl:text-white mb-8 xl:mb-2 xl:px-2">
            <div className="flex flex-col space-y-1 ">
              <h2 className="text-4xl xl:text-2xl font-bold">FAQ</h2>
              <h3 className="text-2xl xl:text-4xl font-bold">
                What is Detour?
              </h3>
              <p className="text-gray-600 xl:text-gray-300 text-xl">
                Join us for a weekend of workshops, shows, and more. Classes
                will be led by some of the best instructors from around the
                nation. We'll also have shows featuring local and national
                talent. See below for more info.
              </p>
            </div>
            <div className="flex flex-col space-y-1 ">
              <h3 className="text-2xl xl:text-4xl font-bold">
                Where will it be hosted?
              </h3>
              <p className="text-gray-600 xl:text-gray-300 text-xl">
                Detour will be hosted at Carnegie Mellon University. Our address
                is 5000 Forbes Ave, Pittsburgh, PA 15213.
              </p>
            </div>
            <div className="flex flex-col space-y-1">
              <h3 className="text-2xl xl:text-4xl font-bold">
                More Questions?
              </h3>
              {/* include mail link */}

              <p className="text-gray-600 xl:text-gray-300 text-xl">
                Email{" "}
                <a
                  href="mailto:anewkirk@andrew.cmu.edu"
                  className="hover:cursor-pointer hover:font-semibold text-yellow-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Alex Newkirk
                </a>{" "}
                or{" "}
                <a
                  href="mailto:satao@andrew.cmu.edu"
                  className="hover:cursor-pointer hover:font-semibold text-yellow-400"
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
        <div className="xl:w-[50%] xl:h-full h-[80vh] px-2 xl:px-0 relative overflow-hidden">
          <Splash />
        </div>
      </div>
    </div>
  );
}
