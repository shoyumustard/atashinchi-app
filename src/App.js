import { useEffect, useRef, useState } from "react";
import subtitles from "./subtitles/subtitles";

export default function App() {
  const videoRef = useRef(null);
  const [currentSubtitle, setCurrentSubtitle] = useState(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;
      const active = subtitles.find(
        (line) => currentTime >= line.start && currentTime <= line.end
      );
      setCurrentSubtitle(active || null);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="relative w-full max-w-4xl aspect-video bg-black">
        <video
          ref={videoRef}
          controls
          className="w-full h-full object-contain"
          src="/video.mp4"
        />

        {/* Subtitle overlay */}
        {currentSubtitle && (
          <div className="absolute bottom-6 w-full px-4 text-center">
            <p className="text-white text-lg bg-black/60 inline-block px-4 py-2 rounded subtitle-text">
              <strong>{currentSubtitle.japanese}</strong>
              <br />
              {currentSubtitle.english}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
