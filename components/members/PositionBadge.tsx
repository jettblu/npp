import { NextPage } from "next";

import { IMember, clubPositionToUiString } from "@/members/models";

interface Props {
  member: IMember;
}
const PositionBadge: NextPage<Props> = (props) => {
  const { member } = { ...props };
  const positionString = clubPositionToUiString(member.position);
  const handleMemberClicked = function () {};

  return (
    <div className="rounded-xl dark:bg-gray-300 dark:text-black text-white bg-gray-700 text-md p-1 w-20 text-center">
      {positionString}
    </div>
  );
};

export default PositionBadge;
