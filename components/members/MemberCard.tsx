"use client";

import { NextPage } from "next";
import Image from "next/image";

import { IMember } from "@/members/models";
import PositionBadge from "./PositionBadge";
import { useState } from "react";
import Modal from "../modals/modal";
import MemberCardFull from "./MemberCardFull";

interface Props {
  member: IMember;
}
const MemberCard: NextPage<Props> = (props) => {
  const { member } = { ...props };
  const [openModal, setOpenModal] = useState(false);

  function handleMemberClicked() {
    setOpenModal(true);
  }

  function handleModalClose() {
    setOpenModal(false);
  }

  return (
    <div className="">
      <div
        className="mx-auto hover:cursor-pointer group transition z-0 hover:z-10 ease-in-out hover:scale-110 border-2 border-gray-600 dark:border-gray-300 rounded-md hover:shadow-lg hover:shadow-gray-500 grayscale hover:grayscale-0"
        onClick={() => handleMemberClicked()}
      >
        <div className="invisible group-hover:visible absolute top-0 right-0  bg-gray-500/50 p-2 rounded-tr-md text-white text-center rounded-bl-md text-sm">
          See More
        </div>
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
      <Modal isOpen={openModal} onRequestClose={handleModalClose}>
        <MemberCardFull member={member} />
      </Modal>
    </div>
  );
};

export default MemberCard;
