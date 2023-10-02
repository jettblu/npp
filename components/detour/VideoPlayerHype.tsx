"use client";

import { NextPage } from "next";
import { useState } from "react";
import ReactPlayer from "react-player";

interface Props {
  videoSrc: string;
  isPlaying: boolean;
  onReadyCallback?: () => void;
}
const VideoPlayerHype: NextPage<Props> = (props) => {
  const { videoSrc, isPlaying, onReadyCallback } = { ...props };
  const [playVideo, setPlayVideo] = useState<boolean>(false);

  function handleOnReady() {
    console.log("ready");
    setPlayVideo(true);
    if (onReadyCallback) {
      onReadyCallback();
    }
  }

  return (
    <div className="w-full h-full max-h-full max-w-full overflow-hidden">
      <ReactPlayer
        url={videoSrc}
        playing={playVideo}
        loop={true}
        controls={false}
        light={false}
        width="100%"
        height="100%"
        onReady={() => handleOnReady()}
        muted
      />
    </div>
  );
};

export default VideoPlayerHype;
