"use client";

import { NextPage } from "next";
import Image from "next/image";

import { IMember } from "@/members/models";
import PositionBadge from "./PositionBadge";

interface Props {
  member: IMember;
}
const MemberCard: NextPage<Props> = (props) => {
  const { member } = { ...props };

  const handleMemberClicked = function () {};

  return (
    <div className="">
      <div
        className="mx-auto transition z-0 hover:z-10 ease-in-out hover:scale-110 border-2 border-gray-600 dark:border-gray-300 rounded-md hover:shadow-lg hover:shadow-gray-500 grayscale hover:grayscale-0"
        onClick={() => handleMemberClicked()}
      >
        <Image
          src={member.photoPath}
          className="object-cover"
          width={256}
          height={256}
          alt={`A fun photo of ${member.name}`}
        />
        <div className="flex flex-col space-y-2 mt-2 px-2">
          <div className="flex flex-row">
            <p className="my-2 text-lg text-gray-700 dark:text-gray-200 font-semibold">
              {member.name}
            </p>
            <div className="flex-grow flex flex-row-reverse my-auto">
              {member.isBoard && <PositionBadge member={member} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
