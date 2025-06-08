import { useEffect, useRef, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs";
import subtitles from "./subtitles/sub_001";
import subtitles2 from "./subtitles/sub_550";
import subtitles3 from "./subtitles/sub_551";

function SubtitleViewer({ subtitles, videoSrc, title }) {
  const videoRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const update = () => {
      const t = video.currentTime;
      const i = subtitles.findIndex((line, idx) =>
        typeof line.start === "number" &&
        t >= line.start &&
        t < (subtitles[idx + 1]?.start ?? Infinity)
      );
      if (i !== -1 && i !== currentIndex) setCurrentIndex(i);
    };

    video.addEventListener("timeupdate", update);
    return () => video.removeEventListener("timeupdate", update);
  }, [currentIndex, subtitles]);

  const speakJapanese = (text) => {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ja-JP";
    const voices = speechSynthesis.getVoices();
    const jpVoice = voices.find(
      (v) => v.lang === "ja-JP" && (v.name.includes("Google") || v.name.includes("Kyoko"))
    );
    utterance.voice = jpVoice || voices.find((v) => v.lang === "ja-JP");
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <div className="relative w-full max-w-5xl mx-auto aspect-video bg-black">
        <video
          ref={videoRef}
          controls
          className="w-full h-full object-contain"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

       {subtitles[currentIndex] && (
  <div className="absolute bottom-6 w-full text-center px-4">
    <div className="text-white text-lg bg-black/70 inline-block px-4 py-2 rounded subtitle-text leading-snug">
      <p className="font-bold">{subtitles[currentIndex].japanese}</p>
      <p className="text-sm text-gray-300">{subtitles[currentIndex].furigana}</p>
      <p className="text-base mt-1">{subtitles[currentIndex].english}</p>
    </div>
  </div>
)}

      </div>

      <div className="flex-grow overflow-y-scroll p-6 space-y-8 bg-gray-900">
        {Array.isArray(subtitles) &&
          subtitles.map((line, idx) => (
            <div key={idx}>
              <div
                className={`transition-all duration-200 p-4 rounded-xl shadow-sm ${
                  idx === currentIndex
                    ? "border-2 border-blue-400 bg-blue-900"
                    : "border border-gray-700 bg-gray-800"
                }`}
              >
                <p
                  className="text-xl underline tracking-wider cursor-pointer hover:text-blue-400"
                  style={{ fontFamily: '"Noto Sans JP"', fontWeight: 700 }}
                  onClick={() => speakJapanese(line.japanese)}
                >
                  {line.japanese}
                </p>
                <p className="text-sm text-gray-400 mt-1">{line.furigana}</p>
                <p className="text-base mt-2 text-gray-300">{line.english}</p>
              </div>
              <hr className="mt-6 border-t border-gray-700" />
            </div>
          ))}
      </div>
    </div>
  );
}

function Test() {
  return (
    <div className="text-white text-lg bg-black/70 inline-block px-4 py-2 rounded subtitle-text font-jp leading-snug">

      <p>
        <ruby>
          学<rt>がく</rt>校<rt>こう</rt>
        </ruby>{" "}
        に <ruby>行<rt>い</rt></ruby>きます。
      </p>
    </div>
  );
}



function App() {
  return <Test />;
}


export default App;
