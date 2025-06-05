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

  const speakJapanese = (text) => {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ja-JP";
    const voices = speechSynthesis.getVoices();
    const jpVoice = voices.find(v => v.lang === "ja-JP" && (v.name.includes("Google") || v.name.includes("Kyoko")));
    utterance.voice = jpVoice || voices.find(v => v.lang === "ja-JP");
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="font-jp">
      <div className="flex flex-col h-screen bg-white text-black">
        <div className="sticky top-0 z-10 bg-white p-6 shadow-md border-b flex flex-col items-center">
          <div className="flex justify-between items-center w-full max-w-3xl mb-4">
            <h1 className="text-3xl font-bold tracking-tight">Atashin'chi Episode 1</h1>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg border w-1/2" style={{ position: 'relative', height: 0, paddingBottom: '28.125%' }}>
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

        <div className="flex-grow overflow-y-scroll p-6 space-y-8 bg-gray-50">
          {Array.isArray(subtitles) && subtitles.map((line, idx) => (
            <div key={idx}>
              <div
                className={`transition-all duration-200 p-4 rounded-xl shadow-sm ${
                  idx === currentIndex
                    ? 'border-2 border-blue-500 bg-blue-100'
                    : 'border border-gray-300 bg-white'
                }`}
              >
                <p
  className="text-xl font-extrabold underline tracking-wider cursor-pointer hover:text-blue-600"
  onClick={() => speakJapanese(line.japanese)}
>
  {line.japanese}
</p>                
                <p className="text-sm text-gray-500 mt-1">{line.furigana}</p>
                <p className="text-base mt-2 text-gray-700">{line.english}</p>
              </div>
              <hr className="mt-6 border-t border-gray-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
