import { NextPage } from "next";

import { IMember } from "@/members/models";

interface Props {
  member: IMember;
}
const MemberCard: NextPage<Props> = (props) => {
  const { member } = { ...props };

  const handleMemberClicked = function () {};

  return (
    <div className="">
      <div
        className="mx-auto hover:z-10 transition ease-in-out hover:scale-110 border-2 border-gray-600 dark:border-gray-300 rounded-md hover:shadow-lg hover:shadow-gray-500 grayscale hover:grayscale-0"
        onClick={() => handleMemberClicked()}
      >
        <img src={member.photoPath} className="h-64 object-cover" />
        <div className="flex flex-col space-y-2 mt-2 px-2">
          <p className="my-2 text-lg text-gray-700 dark:text-gray-200 font-semibold">
            {member.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
