import { useEffect, useRef, useState } from "react";
import subtitles from './subtitles/subtitles';

function App() {
  const videoRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const update = () => {
      const t = video.currentTime;
      const i = subtitles.findIndex((line, idx) =>
        typeof line.start === 'number' && t >= line.start && t < (subtitles[idx + 1]?.start ?? Infinity)
      );
      if (i !== -1 && i !== currentIndex) setCurrentIndex(i);
    };
    video.addEventListener("timeupdate", update);
    return () => video.removeEventListener("timeupdate", update);
  }, [currentIndex]);

  const speakJapanese = (text) => {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ja-JP";
    const voices = speechSynthesis.getVoices();
    const jpVoice = voices.find(v => v.lang === "ja-JP" && (v.name.includes("Google") || v.name.includes("Kyoko")));
    if (jpVoice) {
      utterance.voice = jpVoice;
    } else {
      const fallback = voices.find(v => v.lang === "ja-JP");
      if (fallback) utterance.voice = fallback;
    }
    speechSynthesis.speak(utterance);
  };

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="flex flex-col h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
        <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 p-6 shadow-md border-b flex flex-col items-center">
          <div className="flex justify-between items-center w-full max-w-3xl mb-4">
            <h1 className="text-3xl font-bold tracking-tight">Atashin'chi Episode 1</h1>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="px-4 py-2 rounded text-sm font-medium bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
            </button>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg border dark:border-gray-700 w-1/2" style={{ position: 'relative', height: 0, paddingBottom: '28.125%' }}>
            <iframe
              width="100%"
              height="100%"
              src="/video/Atashinchi_001.mp4"
              title="Video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              style={{ border: 'none', width: '100%', height: '100%', position: 'absolute', left: 0, top: 0, overflow: 'hidden' }}
            ></iframe>
          </div>
        </div>

        <div className="flex-grow overflow-y-scroll p-6 space-y-8 bg-gray-50 dark:bg-gray-800">
          {Array.isArray(subtitles) && subtitles.map((line, idx) => (
            <div key={idx}>
              <div
                className={`transition-all duration-200 p-4 rounded-xl shadow-sm ${idx === currentIndex ? 'border-2 border-blue-500 bg-blue-100 dark:bg-blue-900' : 'border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900'}`}
              >
                <p
                  className="text-xl font-bold underline cursor-pointer hover:text-blue-600 dark:hover:text-blue-300"
                  onClick={() => speakJapanese(line.japanese)}
                >
                  {line.japanese}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{line.furigana}</p>
                <p className="text-base mt-2 text-gray-700 dark:text-gray-200">{line.english}</p>
              </div>
              <hr className="mt-6 border-t border-gray-300 dark:border-gray-700" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
