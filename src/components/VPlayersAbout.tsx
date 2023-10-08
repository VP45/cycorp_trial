import React from "react";
import PlayButton from "../../public/play.svg";
import PauseButton from "../../public/pause.svg";

interface VideoPlayerControlsProps {
  progress: number;
  size?: number | undefined;
  width?: number | undefined;
  isPaused: boolean;
  onPlayPause: () => void;
}

const VideoPlayerControls: React.FC<VideoPlayerControlsProps> = ({
  progress,
  size = 48,
  width = 3,
  isPaused,
  onPlayPause,
}) => {
  const center = size / 2;
  const radius = center - width;
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = dashArray * (1 - progress);

  return (
    <div className="relative flex justify-center items-center">
    </div>
  );
};

export default VideoPlayerControls;
