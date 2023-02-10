import { MdOutlineReplay, MdOutlineLoop } from "react-icons/md";
import { IoPlayOutline, IoPauseOutline } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";
import { AiOutlineSound } from "react-icons/ai";
export default () => {
  const audioPlayer = useRef();
  const animationRef = useRef();
  const [loaded, setLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const progressBar = useRef();

  useEffect(() => {
    setDuration(Math.floor(audioPlayer.current.duration));
    setCurrentTime(Math.floor(audioPlayer.current.currentTime));
  }, [loaded, audioPlayer?.current?.readyState]);

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const updateBar = () => {
    const curPercent = Math.floor(
      (audioPlayer.current.currentTime / duration) * 100
    );
    progressBar.current.style.background = `linear-gradient(to right, hsla(0, 100%, 100%, 0.7) ${curPercent}%, hsla(0,0%,99%,.08) 0)`;
    progressBar.current.childNodes[0].style.left =
      curPercent >= 99 ? `${98}%` : `${curPercent}%`;
  };

  const whilePlaying = () => {
    setCurrentTime(audioPlayer.current.currentTime);
    updateBar();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const dragHandler = (e) => {
    const { width, left } = progressBar.current.getBoundingClientRect();
    const cursorPos = e.pageX - left;
    const clickPercent = Math.round((cursorPos / width) * 100);
    audioPlayer.current.currentTime =
      (clickPercent / 100) * audioPlayer.current.duration;
    updateBar();
  };

  const handleTimeDrag = (e) => {
    document.addEventListener("mousemove", dragHandler);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", dragHandler);
    });
  };

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  return (
    <div>
      <audio
        ref={audioPlayer}
        src={`/hidden/test.mp3`}
        onLoadedMetadata={() => setLoaded(true)}
      />

      <div className="flex items-center gap-2">
        <span
          className="block text-xs tracking-wide text-left text-white/70 min-w-[42px]
        "
        >
          {calculateTime(currentTime)}
        </span>

        <div className="relative flex items-center w-full select-none">
          <div
            className="relative flex items-center flex-1 w-full h-1.5  rounded-full bg-main-border will-change-contents"
            ref={progressBar}
            onMouseDown={(e) => handleTimeDrag(e)}
          >
            <span className="relative top-0 bottom-0 left-0 right-0 block w-3 h-3 bg-white border border-white rounded-full will-change-contents" />
          </div>
        </div>

        <span className="block text-xs tracking-wide text-left text-white/70  min-w-[42px] ">
          {duration && !isNaN(duration) && calculateTime(duration)}
        </span>
      </div>

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
            {!isPlaying ? <IoPlayOutline className="ml-0.5" /> : <IoPauseOutline />}
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
  );
};
