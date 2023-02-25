import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { sleep } from "../static/util";

export default () => {
  const slideContainer = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const STATIC_TABS = [{ name: "Feed" }, { name: "Following" }];
  const router = useRouter();

  useEffect(() => {
    if (!router.query.activity) return;
    const foundIndex = STATIC_TABS.findIndex(
      (_) => _.name.toLocaleLowerCase() === router.query.activity.toLocaleLowerCase()
    );
    setActiveSlide(foundIndex);
  }, [router.query]);

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
    <div
      className="flex items-stretch justify-center relative p-0.5 border rounded-md bg-main-700 border-main-border max-h-[38px] min-h-[38px] gap-1"
      ref={slideContainer}
    >
      <span
        className={`will-change-transform block w-full absolute z-10 font-normal bg-main-800 rounded-md left-0.5 duration-150 ease-[cubic-bezier(.17,.67,.83,.67)] transition-[left]`}
      />
      {STATIC_TABS.map((_, i) => (
        <button
          className={`px-6 py-1 h-full font-normal select-none rounded-md z-50 relative text-white/70 text-sm flex items-center hover:cursor-pointer hover:text-white duration-150  ${
            activeSlide === i && "text-white"
          }`}
          onClick={() => {
            router.push(`/?activity=${_.name.toLowerCase()}`);
            setActiveSlide(i);
          }}
        >
          {_.name}
        </button>
      ))}
    </div>
  );
};
