import { NextPage } from "next";
import ReactPlayer from "react-player";

interface Props {
  videoSrc: string;
  isPlaying: boolean;
}
const VideoPlayer: NextPage<Props> = (props) => {
  const { videoSrc, isPlaying } = { ...props };

  return (
    <div className="mx-auto">
      <ReactPlayer
        url={videoSrc}
        playing={isPlaying}
        controls={true}
        width="100%"
        style={{
          outline: "1px solid #717171",
          borderRadius: "5px",
          padding: "5px",
          backgroundColor: "#DFDFDF",
        }}
      />
    </div>
  );
};

export default VideoPlayer;
