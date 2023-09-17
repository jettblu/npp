import CountdownTimer from "../../components/time/Countdown";
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
      <div className="xl:fixed xl:w-[50%] xl:h-full xl:bg-gradient-to-b from-black to-zinc-900">
        {/* <div className="w-fit px-2 py-1 rounded-xl bg-yellow-500/20 text-gray-700 xl:text-gray-200 text-sm ml-8 mt-8 ring-[1px] ring-yellow-400">
          March 29-30, 2024
        </div> */}
        <div className="xl:h-[24vh] w-12" />
        <div className="text-center">
          <h1 className="text-7xl font-bold xl:text-white">Detour</h1>
          <p className="text-3xl text-gray-500">
            We're bringing the best of improv to Pittsburgh.
          </p>
          <div className="relative w-fit mx-auto mt-4">
            <div className="absolute right-0 -top-1">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400/60 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500/20"></span>
              </span>
            </div>

            <a
              href="https://cmu.ca1.qualtrics.com/jfe/form/SV_aXjZokBjd9RHkqi"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <p className=" underline hover:cursor-pointer text-yellow-400 text-2xl">
                Tell us what you want to learn.
              </p>
            </a>
          </div>
          <div className="mx-auto w-fit px-2 py-1 rounded-xl bg-yellow-500/20 text-gray-700 xl:text-gray-200 text-lg mt-8 ring-[1px] ring-yellow-400">
            March 29-30, 2024
          </div>
        </div>
        {/* <CountdownTimer date="2024-03-29" /> */}

        <div className="my-6 xl:my-0 text-gray-400 text-xl xl:text-gray-400 xl:fixed bottom-2 left-0 xl:max-w-[50%] px-2 py-2 w-full">
          <p className="mx-auto max-w-2xl xl:max-w-xl">
            Join us for a weekend of workshops, shows, and more. Classes will be
            led by some of the best instructors from around the nation. We'll
            also have shows featuring local and national talent. More details to
            come. Save the date!
          </p>
        </div>
      </div>
      <Splash />
    </div>
  );
}
