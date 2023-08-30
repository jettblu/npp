"use client";

import { NextPage } from "next";
import Image from "next/image";

import { IMember } from "@/members/models";
import PositionBadge from "./PositionBadge";
import { GOLD_THREAD } from "@/constants/colors";

interface Props {
  member: IMember;
}
const MemberCardFull: NextPage<Props> = (props) => {
  const { member } = { ...props };
  const formattedFirstName = member.name.split(" ")[0];

  const handleMemberClicked = function () {};

  const subfactHeaderClassName =
    "text-md font-semibold text-gray-500 dark:text-gray-400";
  const subfactBodyClassName = "prose dark:prose-invert md:prose-xl";

  return (
    <div
      className="mx-auto ring-2 ring-gray-600 dark:ring-gray-300 rounded-md hover:shadow-lg hover:shadow-gray-500 bg-gray-50 dark:bg-gray-900 max-w-md rounded-md pb-6"
      onClick={() => handleMemberClicked()}
    >
      <Image
        src={member.photoPath}
        className="w-full object-cover rounded-tl-md"
        width={300}
        height={300}
        alt={`A fun photo of ${member.name}`}
      />
      <div
        className="flex flex-row py-3 mb-3 px-2 text-white"
        style={{ backgroundColor: "black" }}
      >
        <p className="text-2xl text-gray-200 font-semibold my-auto">
          {member.name}
        </p>
        <div className="flex-grow flex flex-row-reverse my-auto">
          {member.isBoard && <PositionBadge member={member} />}
        </div>
      </div>
      <div className="mt-2 px-2">
        <div className="flex flex-col space-y-2 my-2">
          <p className={subfactHeaderClassName}>Hometown 📍</p>
          <p className={subfactBodyClassName}>
            {member.hometown
              ? member.hometown
              : `Hmmm, probably somewhere in Comedyville, North Dakota.`}
          </p>
        </div>
        <div className="flex flex-col space-y-2 my-2">
          <p className={subfactHeaderClassName}>Astrological Sign ✨</p>
          <p className={subfactBodyClassName}>
            {member.astrologicalSign
              ? member.astrologicalSign
              : `Hmmm, probably something cool like a Unicornitarius.`}
          </p>
        </div>
        <div className="flex flex-col space-y-2 my-2">
          <p className={subfactHeaderClassName}>
            Why did {formattedFirstName} begin improv? 🤔
          </p>
          <p className={subfactBodyClassName}>
            {member.description
              ? member.description
              : `Hmmm, it looks like we actually don't know why ${formattedFirstName} began improv. It was probably because laughing is a fantastic source of endorphins.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemberCardFull;
