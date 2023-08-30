"use client";

import { NextPage } from "next";
import Image from "next/image";

import { IAlumni, IMember } from "@/members/models";
import PositionBadge from "./PositionBadge";
import { useState } from "react";
import Modal from "../modals/modal";
import MemberCardFull from "./MemberCardFull";

interface Props {
  member: IAlumni;
}
const AlumniCard: NextPage<Props> = (props) => {
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
        className="mx-auto rounded-xl group flex flex-row w-64 transition z-0 hover:z-10 ease-in-out hover:scale-110 border-2 border-gray-600 dark:border-gray-300 rounded-md hover:shadow-lg hover:shadow-gray-500 grayscale hover:grayscale-0"
        onClick={() => handleMemberClicked()}
      >
        <Image
          src={member.photoPath}
          className="object-cover rounded-tl-md rounded-bl-md"
          width={50}
          height={50}
          alt={`A fun photo of ${member.name}`}
        />
        <div className="flex flex-row px-2">
          <p className="my-2 text-lg text-gray-700 dark:text-gray-200 font-semibold">
            {member.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlumniCard;
