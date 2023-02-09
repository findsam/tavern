import { MdOutlineReplay, MdOutlineLoop } from "react-icons/md";
import { IoPlayOutline, IoPauseOutline } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";
import { AiOutlineSound } from "react-icons/ai";
export default () => {
  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();
  const progressContainer = useRef();
  const volBar = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
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
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.width = `${Math.floor(
      (progressBar.current.value / duration) * 100
    )}%`;
    setCurrentTime(progressBar.current.value);
  };

  const whilePlaying = () => {
    progressBar.current.value = Math.floor(audioPlayer.current.currentTime);
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const startDrag = ({ pageX }) => {
    cancelAnimationFrame(animationRef.current);
    const { width, left } = progressContainer.current.getBoundingClientRect();
    const cursorPos = pageX - left;
    const clickPercent = Math.round((cursorPos / width) * 100);

    progressBar.current.style.width = `${clickPercent}%`;
    audioPlayer.current.currentTime = Math.round((clickPercent / 100) * duration);
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const handleVolumeControls = ({ pageX }) => {
    const { width, left } = volBar.current.getBoundingClientRect();
    const cursorPos = pageX - left;
    const clickPercent = Math.round((cursorPos / width) * 100);
    console.log(clickPercent);
    audioPlayer.current.volume = clickPercent / 100;
    volBar.current.childNodes[0].style.width = clickPercent + "%";
  };

  return (
    <div>
      <audio
        ref={audioPlayer}
        src={`/hidden/test.mp3`}
        onLoadedMetadata={() => setLoaded(true)}
      />
      <div className="flex flex-col gap-1">
        <div className="relative w-full max-w-[80px] mx-auto">
          <div className="flex items-center gap-2">
            <AiOutlineSound className="text-lg text-white/70" />
            <span
              className="relative flex w-full h-1 rounded-full bg-main-border hover:cursor-pointer"
              ref={volBar}
              onClick={(e) => handleVolumeControls(e)}
            >
              <span className="absolute content-[''] my-auto left-0 right-0 bottom-0 top-0 w-full h-full bg-white/70 rounded-full"></span>
            </span>
          </div>
        </div>
        <span className="flex items-center justify-center gap-3 ">
          <span className="block text-xs tracking-wide text-left text-white/70">
            {calculateTime(currentTime)}
          </span>
          <span
            className="relative flex w-full h-1 rounded-full bg-main-border "
            onClick={(e) => startDrag(e)}
            ref={progressContainer}
          >
            <span
              className="absolute content-[''] my-auto left-0 right-0 bottom-0 top-0 w-0 h-full bg-white/70 rounded-full"
              ref={progressBar}
              onClick={(e) => startDrag(e)}
            ></span>

            {/* <span
            className="absolute content-[''] my-auto left-0
                right-0 bottom-0 top-0 w-3.5 h-3.5
                bg-white/70 rounded-full z-10"
            onMouseDown={startDrag}
            ref={progressGrabber}
            onMouseUp={() => null}
        ></span> */}
          </span>

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
