import { MdOutlineReplay, MdOutlineLoop } from "react-icons/md";
import { IoPlayOutline, IoPauseOutline } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";
export default () => {
  const audioPlayer = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    // progressBar.current.max = seconds;
  }, [loaded, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    !prevValue ? audioPlayer.current.play() : audioPlayer.current.pause();
  };

  return (
    <div>
      <audio
        ref={audioPlayer}
        src={`/hidden/sound.mp3 `}
        onLoadedMetadata={() => setLoaded(true)}
      />
      <div className="flex flex-col gap-1">
        <span className="flex items-center justify-center gap-3 ">
          <span className="block text-xs tracking-wide text-left text-white/70">
            {calculateTime(currentTime)}
          </span>
          <span
            className="relative flex w-full h-1 rounded-full bg-main-border 
                before:absolute before:content-[''] before:my-auto before:left-0 before:right-0 before:bottom-0 before:top-0 before:w-1/4 before:h-full before:bg-white/70 before:rounded-full
              after:absolute after:content-[''] after:my-auto after:left-1/4 after:right-0 after:bottom-0 after:top-0 after:w-3.5 after:h-3.5 after:bg-white/70 after:rounded-full z-10"
          />
          <span className="block text-xs tracking-wide text-left text-white/70">
            {duration && !isNaN(duration) && calculateTime(duration)}
          </span>
        </span>
        <div className="flex items-center justify-center gap-2">
          <span
            className={`border-transparent text-white/70 flex relative border rounded-md hover:cursor-pointer group`}
          >
            <span className="relative flex items-center justify-center rounded-full text-white/70">
              <MdOutlineReplay className="text-lg text-white/70" />
              <span className="absolute z-50 px-2 py-1 text-xs tracking-wide text-white duration-150 -translate-x-1/2 rounded-md opacity-0 pointer-events-none -bottom-5 left-1/2 whitespace-nowrap bg-main-800 group-hover:opacity-100 group-hover:-bottom-9">
                Replay
              </span>
            </span>
          </span>

          <span
            onClick={() => togglePlayPause()}
            className={`border-transparent text-white/70 flex relative border rounded-md hover:cursor-pointer group`}
          >
            <span className="rounded-full border border-main-border text-white/70 bg-main-800 h-[38px] w-[38px] text-xl flex items-center justify-center relative">
              {!isPlaying ? (
                <IoPlayOutline className="ml-0.5" />
              ) : (
                <IoPauseOutline />
              )}
              <span className="absolute z-50 px-2 py-1 text-xs tracking-wide text-white duration-150 -translate-x-1/2 rounded-md opacity-0 pointer-events-none -bottom-5 left-1/2 whitespace-nowrap bg-main-800 group-hover:opacity-100 group-hover:-bottom-9">
                {isPlaying ? "Pause" : "Play"}
              </span>
            </span>
          </span>

          <span
            className={`border-transparent text-white/70 flex relative border rounded-md hover:cursor-pointer group`}
          >
            <span className="relative flex items-center justify-center rounded-full text-white/70">
              <MdOutlineLoop className="text-lg text-white/70" />
              <span className="absolute z-50 px-2 py-1 text-xs tracking-wide text-white duration-150 -translate-x-1/2 rounded-md opacity-0 pointer-events-none -bottom-5 left-1/2 whitespace-nowrap bg-main-800 group-hover:opacity-100 group-hover:-bottom-9">
                Loop
              </span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
