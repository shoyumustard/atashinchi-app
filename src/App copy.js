import { useEffect, useRef, useState } from "react";
import subtitles from './subtitles/subtitles';

function App() {
  const videoRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(null);

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

  return (
    <div className="dark flex flex-col h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 p-4 border-b">
        <h1 className="text-2xl font-bold mb-2">Atashin'chi Episode 1</h1>
        <div style={{ position: 'relative', width: '100%', height: 0, paddingBottom: '56.25%' }}>
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

      <div className="flex-grow overflow-y-scroll p-4">
        {Array.isArray(subtitles) && subtitles.map((line, idx) => (
          <div
            key={idx}
            className={`p-4 border rounded mb-4 ${idx === currentIndex ? 'border-blue-500 bg-blue-50 dark:bg-blue-800' : 'border-gray-300 dark:border-gray-600'}`}
          >
            <p className="text-lg font-medium">{line.japanese}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{line.furigana}</p>
            <p className="text-base">{line.english}</p>
            <button
              className="mt-2 text-blue-600 dark:text-blue-400 underline"
              onClick={() => {
                speechSynthesis.cancel();
                const utterance = new SpeechSynthesisUtterance(line.japanese);
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
              }}
            >
              ▶ Speak
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
