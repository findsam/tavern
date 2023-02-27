import React, { useRef, useState, useEffect } from "react";
import { AiOutlineSetting } from "react-icons/ai";
const Notis = () => {
  const slideContainer = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const STATIC_OPTS = [
    { name: "Feed" },
    { name: "Following" },
    { name: "Archived" },
  ];

  useEffect(() => {
    const childNodes = [...slideContainer.current.childNodes].slice(1);
    const activeChildNode = childNodes[activeSlide];
    const { width, height } = activeChildNode.getBoundingClientRect();
    const lavaLamp = slideContainer.current.childNodes[0];
    lavaLamp.style.width = `${width}px`;
    lavaLamp.style.height = `${height}px`;
    lavaLamp.style.left = `${activeChildNode.offsetLeft}px`;
  }, [activeSlide]);

  return (
    <div className="flex flex-col border-b border-main-border">
      <div className="flex flex-col items-center justify-center px-5 py-4">
        <h1 className="mr-auto font-medium tracking-wide">Notifications</h1>
        <span className="items-center  mr-auto text-xs text-green-400 gap-1.5 inline-flex hover:cursor-pointer">
          Mark all as read
        </span>
      </div>
      <ul
        ref={slideContainer}
        className="flex gap-5 px-5 py-4 text-sm leading-5 border-t text-white/70 border-main-border"
      >
        <span
          className={`will-change-transform block w-full absolute bottom-0 z-10 font-normal bg-white rounded-md  max-h-[1px] left-0.5 duration-150 ease-[cubic-bezier(.17,.67,.83,.67)] transition-[left]`}
        />
        {STATIC_OPTS.map((_, i) => (
          <li
            key={i}
            onClick={() => {
              setActiveSlide(i);
            }}
            className={`${
              activeSlide === i && "text-white"
            } flex gap-2.5 items-center max-w-max hover:cursor-pointer`}
          >
            {_.name}
            <span
              className={`${
                activeSlide === i ? "bg-white text-black" : "bg-white/70 text-black"
              } flex items-center w-full h-5 px-1 text-xs font-semibold rounded-md max-w-max`}
            >
              108
            </span>
          </li>
        ))}
        {/* <li className="flex gap-2.5 items-center text-white">
          Unread
          <span className="flex items-center w-full h-5 px-1 text-xs font-semibold text-black bg-white rounded-md">
            28
          </span>
        </li>
        <li className="flex gap-2.5 items-center ">
          Following
          <span className="flex items-center w-full h-5 px-1 text-xs font-semibold text-white bg-indigo-600 rounded-md">
            108
          </span>
        </li> */}
        <li className="flex gap-2.5 items-center text-white/70 ml-auto">
          <AiOutlineSetting className="text-[1.35rem]" />{" "}
        </li>
      </ul>
    </div>
  );
};

export default Notis;
