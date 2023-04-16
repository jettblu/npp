import type { NextPage } from "next";
import { IMember } from "@/members/models";
import { pgSpring23 } from "@/pg/spring23";
import MemberCard from "../../components/members/MemberCard";
import toast from "react-hot-toast";

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
          <h1 className="text-5xl font-bold mb-2">Performing Group</h1>
          <p className="text-lg text-slate-400 dark:text-slate-300">
            Your Forbes Ave giggle and guffaw inducers
          </p>
        </div>

        <div className="grid my-6 grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 mx-auto place-items-center">
          {membersToDisplay.length != 0 &&
            membersToDisplay.map((member: IMember, index: number) => (
              <MemberCard member={member} key={index} />
            ))}
        </div>
      </main>
    </div>
  );
};

export default Members;
