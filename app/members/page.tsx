import { IAlumni, IMember } from "@/members/models";
import type { NextPage } from "next";

import MemberCard from "../../components/members/MemberCard";
import ButtonAddProfile from "../../components/members/ButtonAddProfile";
import { pgFall23 } from "@/pg/fall23";
import { pgAlumni } from "@/pg/alumni";
import AlumniCard from "../../components/members/AlumniCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Members",
  description:
    "Meet the No Parking Players! We're Carnegie Mellon University's premier improv comedy troupe.",
};

const Members: NextPage = () => {
  const membersToDisplay: IMember[] = pgFall23;
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
            Performing Group
          </h1>
          <p className="text-lg text-gray-500">
            We're putting the fun back in Forbes.
          </p>
        </div>

        <div className="grid my-6 grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 mx-auto place-items-center bg-gray-100 md:bg-inherit py-2 rounded-md">
          {membersToDisplay.length != 0 &&
            membersToDisplay.map((member: IMember, index: number) => (
              <MemberCard member={member} key={index} />
            ))}
        </div>
        <div className="mt-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-black dark:text-white">
            Alumni
          </h1>
          <div>
            {/* TODO: sort and label by year */}
            <p className="text-lg text-gray-500">2023</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 mx-auto place-items-center bg-gray-100 md:bg-inherit py-2 rounded-md">
              {pgAlumni.map((member: IAlumni, index: number) => (
                <AlumniCard member={member} key={index} />
              ))}
            </div>
          </div>
        </div>
        {/* project add form */}
        <div className="mx-auto">
          <ButtonAddProfile />
        </div>
      </main>
    </div>
  );
};

export default Members;
