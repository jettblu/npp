import { GOLD_THREAD, GREEN_THREAD, SCOTS_ROSE } from "@/constants/colors";

export default function Learn() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex flex-col">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-black dark:text-white">
          Learn
        </h1>
        <div className="prose dark:prose-invert md:prose-xl">
          <p>
            Improv is a skill: something you can practice and improve. And the
            best part is you can laugh and learn at the same time!
          </p>
          <p>
            Begin your improv journey here with resources compiled over 27 years
            of teaching, learning, and performing. Consider this your guide to
            the intergalactic adventures of improv comedy.
          </p>
        </div>
        <div className="rounded-md px-2 py-2 bg-gradient-to-r from-gray-50 to-white mt-8 ring-2 ring-gray-500/40">
          <div className="flex flex-row">
            <h2 className="text-2xl font-bold mb-2 text-black dark:text-white">
              Workshop
            </h2>
            <div className="flex-grow">
              <div className="rounded-md bg-gray-400/10 rounded-md p-2 float-right">
                Fall 2023
              </div>
            </div>
          </div>

          <p className="prose dark:prose-invert md:prose-xl">
            Learn the basics of improv comedy in a fun, supportive environment.
            No experience necessary!
          </p>
          <div
            className="flex flex-col space-y-2 text-xl mt-2"
            style={{ color: GREEN_THREAD }}
          >
            <p className="font-semibold">
              Every Wednesday: 8-10 PM, Posner 145
            </p>
            <p className="font-semibold" style={{ color: GOLD_THREAD }}>
              Every Sunday: 8-10 PM, Doherty 1211
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
