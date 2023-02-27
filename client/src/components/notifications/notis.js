import React, { useRef, useState, useEffect } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { IoMdCheckmark } from "react-icons/io";
const Notis = () => {
  const slideContainer = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const STATIC_OPTS = [
    { name: "Unread" },
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
      <div className="flex items-center justify-center px-5 py-4">
        <div className="flex items-center w-full mr-auto">
          <h1 className="mr-auto text-xl font-medium tracking-wide">
            Notifications
          </h1>
          <span className="items-center flex ml-auto text-xs text-green-400 gap-1.5  hover:cursor-pointer">
            <IoMdCheckmark className="text-base" />
            Mark all as read
          </span>
        </div>
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
            } flex gap-2.5 items-center max-w-max hover:cursor-pointer duration-75`}
          >
            {_.name}
            <span
              className={`${
                activeSlide === i ? "bg-white text-black" : "bg-white/70 text-black"
              } flex items-center w-full h-5 px-1 text-xs font-semibold rounded-md max-w-max duration-75`}
            >
              108
            </span>
          </li>
        ))}
        <li className="flex ml-auto text-white/70">
          <AiOutlineSetting className="text-[1.3rem]" />{" "}
        </li>
      </ul>
    </div>
  );
};

export default Notis;
