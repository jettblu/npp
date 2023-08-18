import { IMember } from "@/members/models";
import { pgSpring23 } from "@/pg/spring23";
import type { NextPage } from "next";
import { PopupButton } from "@typeform/embed-react";

import MemberCard from "../../components/members/MemberCard";

const Members: NextPage = () => {
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
        {/* project add form */}
        <div className="mx-auto">
          <PopupButton
            id="KXqyk6L0"
            size={80}
            onReady={() => {
              console.log("Member profile form ready");
            }}
            className="font-bold bg-black p-2 rounded-lg text-white dark:text-slate-200 transition ease-in-out hover:scale-105 text-xl mx-auto hover:brightness-150"
          >
            Add Your Profile
          </PopupButton>
        </div>
      </main>
    </div>
  );
};
