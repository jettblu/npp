"use client";
import { useState } from "react";
import Image from "next/image";
import VideoPlayerHype from "./VideoPlayerHype";

export default function Splash() {
  const [showPlaceholder, setShowPlaceholder] = useState<boolean>(true);

  function handleOnLoad() {
    // wait .24 seconds before showing the placeholder
    setTimeout(() => {
      setShowPlaceholder(false);
    }, 240);
  }

  return (
    <div className="relative h-full w-full">
      {showPlaceholder && (
        <div className="absolute top-0 left-0 w-full xl:h-full">
          <Image
            src="/detour/peopleCover.jpg"
            width={200}
            height={200}
            alt="Detour people cover"
            className={`rounded-xl h-full w-full object-cover mx-auto`}
          />
        </div>
      )}

      <div className="absolute top-0 left-0 w-full overflow-none">
        <VideoPlayerHype
          videoSrc="https://res.cloudinary.com/dn1pjozuf/video/upload/v1694880139/detour_hype_vid_y24als.mp4"
          isPlaying={false}
          onReadyCallback={handleOnLoad}
        />
      </div>
    </div>
  );
}
