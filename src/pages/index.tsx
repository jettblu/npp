import Image from "next/image";
import { Inter } from "next/font/google";
import toast from "react-hot-toast";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [clcikCount, setClickCount] = useState(0);
  function onClickLogo() {
    setClickCount(clcikCount + 1);
    toast(`Hehe ${clcikCount > 1 ? `x${clcikCount}` : ""}`);
  }
  return (
    <main className="flex-col pt-4 md:pt-[10vh] space-y-4 max-w-2xl mx-auto mx-auto">
      <div className="">
        <Image
          src={"/brand/logoLight.webp"}
          alt={"NPP Logo."}
          priority
          width={500}
          height={500}
          className="mx-auto dark:invert hover:scale-105 hover:cursor-pointer transition-transform duration-500 ease-in-out"
          onClick={onClickLogo}
        />
      </div>
    </main>
  );
}
