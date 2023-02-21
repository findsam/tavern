import { useState, useRef, useEffect } from "react";

//   "bg-main-800 text-white-100"
//    "bg-transparent text-white/70"

export default () => {
  const slideContainer = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const STATIC_TABS = ["Feed", "Following", "For You"];

  const handleStaticTabClick = (idx) => {
    setActiveSlide(idx);
  };

  useEffect(() => {
    const childNodes = [...slideContainer.current.childNodes].slice(1);
    const activeChildNode = childNodes[activeSlide];
    const width = activeChildNode.getBoundingClientRect().width;
    const height = activeChildNode.getBoundingClientRect().height;
    const lavaLamp = slideContainer.current.childNodes[0];
    lavaLamp.style.width = `${width}px`;
    lavaLamp.style.height = `${height}px`;
    lavaLamp.style.left = `${activeChildNode.offsetLeft}px`;
  }, [activeSlide]);

  return (
    <ul
      className="flex items-stretch justify-center relative p-0.5 border rounded-md bg-main-700 border-main-border max-h-[38px] min-h-[38px] gap-1"
      ref={slideContainer}
    >
      <span
        className={`block w-full absolute z-10 bg-main-800 rounded-md left-0.5 ease-[cubic-bezier(.17,.67,.83,.67)] duration-150 transition-[left]`}
      />
      {STATIC_TABS.map((_, i) => (
        <li
          className={`px-6 py-1 h-full rounded-md z-50 relative text-white/70 text-sm flex items-center hover:cursor-pointer hover:text-white duration-150  ${
            activeSlide === i && "text-white"
          }`}
          onClick={() => handleStaticTabClick(i)}
        >
          {_}
        </li>
      ))}
    </ul>
  );
};
