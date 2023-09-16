import CountdownTimer from "../../components/time/Countdown";
import Image from "next/image";

export default function Detour() {
  return (
    <div>
      <div className="md:fixed md:w-[50%] md:h-full md:bg-black">
        <div className="w-fit px-2 py-1 rounded-md bg-yellow-500/20 text-gray-700 md:text-gray-200 text-sm ml-8 mt-8 ring-[1px] ring-yellow-400">
          April 5th-6th, 2024
        </div>
        <div className="md:h-[24vh] w-12" />
        <div className="text-center">
          <h1 className="text-7xl font-bold md:text-white">Detour</h1>
          <p className="text-3xl text-gray-500">
            We're bringing the best of improv to Pittsburgh.
          </p>
          <a
            href="https://cmu.ca1.qualtrics.com/jfe/form/SV_aXjZokBjd9RHkqi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="mt-6 underline hover:cursor-pointer text-yellow-400">
              Tell us what you want to learn.
            </p>
          </a>
        </div>
        <CountdownTimer />
      </div>
      <div className="md:fixed md:right-0 md:w-[50%] md:h-full px-2 md:px-0">
        <Image
          src="/detour/peopleCover.jpg"
          width={200}
          height={200}
          alt="Detour people cover"
          className="rounded-md h-full w-full object-cover"
        />
      </div>
    </div>
  );
}