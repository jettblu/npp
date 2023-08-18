"use client";

import { PopupButton } from "@typeform/embed-react";

export default function ButtonAddProfile() {
  return (
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
  );
}
