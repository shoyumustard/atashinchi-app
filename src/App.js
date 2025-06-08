import { useEffect, useRef, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/tabs";
import { ThemeProvider } from "next-themes";
import subtitles from "./subtitles/sub_001";
import subtitles2 from "./subtitles/sub_550";
import subtitles3 from "./subtitles/sub_551";

function SubtitleViewer({ subtitles, videoSrc, title }) {
  const videoRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [showAllSubtitles, setShowAllSubtitles] = useState(true);

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
    <div className="flex flex-col min-h-screen bg-white text-black dark:bg-black dark:text-white">
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
            <div className="w-full max-w-3xl mx-auto">
              <hr className="mb-2 border-t border-gray-400 dark:border-gray-600" />
              <div className="text-yellow-300 [&>p]:text-yellow-300 [&_ruby]:text-yellow-300 [&_rt]:text-yellow-300 text-3xl md:text-4xl bg-black/80 inline-block px-6 py-4 rounded subtitle-text font-jp leading-snug">
                <p className="text-yellow-300" dangerouslySetInnerHTML={{ __html: subtitles[currentIndex].ruby }} />
                <p className="text-xl mt-3">{subtitles[currentIndex].english}</p>
              </div>
              <hr className="mt-2 border-t border-gray-400 dark:border-gray-600" />
            </div>
          </div>
        )}
      </div>

      <div className="flex-grow overflow-y-scroll p-6 bg-gray-100 dark:bg-gray-900">
        <button
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={() => setShowAllSubtitles((prev) => !prev)}
        >
          {showAllSubtitles ? "Hide Subtitles" : "Show Subtitles"}
        </button>

        {showAllSubtitles && (
          <div className="space-y-8">
            {Array.isArray(subtitles) &&
              subtitles.map((line, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <div key={idx} className={isActive ? '' : 'opacity-60'}>
                    <div
                      className={`transition-all duration-200 p-4 rounded-xl shadow-sm ${
                        isActive
                          ? "border-2 border-blue-400 bg-blue-100 dark:bg-blue-900"
                          : "border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                      }`}
                    >
                      <p
                        className="text-sm underline tracking-wider cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 font-jp"
                        onClick={() => speakJapanese(line.japanese)}
                        dangerouslySetInnerHTML={{ __html: line.ruby }}
                      ></p>
                      <p className="text-xs mt-2 text-gray-800 dark:text-gray-300">{line.english}</p>
                    </div>
                    <hr className="mt-6 border-t border-gray-300 dark:border-gray-700" />
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider attribute="class">
      <div className="font-jp">
        <Tabs defaultValue="ep2" className="w-full">
          <TabsList className="sticky top-0 z-20 flex justify-center bg-gray-100 dark:bg-gray-900 p-2 border-b border-gray-300 dark:border-gray-700">
            <TabsTrigger value="ep1">Episode 1</TabsTrigger>
            <TabsTrigger value="ep2">Episode 550</TabsTrigger>
            <TabsTrigger value="ep3">Episode 551</TabsTrigger>
          </TabsList>

          <TabsContent value="ep1">
            <SubtitleViewer
              subtitles={subtitles}
              videoSrc="/video/Atashinchi_001.mp4"
              title="Atashin'chi Episode 1"
            />
          </TabsContent>

          <TabsContent value="ep2">
            <SubtitleViewer
              subtitles={subtitles2}
              videoSrc="/video/Atashinchi_550.mp4"
              title="Atashin'chi Episode 550"
            />
          </TabsContent>

          <TabsContent value="ep3">
            <SubtitleViewer
              subtitles={subtitles3}
              videoSrc="/video/Atashinchi_551.mp4"
              title="Atashin'chi Episode 551"
            />
          </TabsContent>
        </Tabs>
      </div>
    </ThemeProvider>
  );
}

export default App;
