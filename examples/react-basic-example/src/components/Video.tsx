import { useState, useRef, useEffect } from "react";

interface VideoPlayerProps {
  src: string;
  isPlaying: boolean;
}

const VideoPlayer = ({ src, isPlaying }: VideoPlayerProps) => {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current?.play();
    } else {
      ref.current?.pause();
    }
  }, [isPlaying]);

  return <video ref={ref} src={src} loop playsInline />;
};

export const MediaControlApp = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <>
      <div className="media-group">
        <VideoPlayer
          isPlaying={isPlaying}
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        />
        <button
          className="btn btn-primary"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? "Pause" : "Play"} Video
        </button>
      </div>
    </>
  );
};
