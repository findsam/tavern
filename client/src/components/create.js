import { useEffect, useState, useRef } from "react";
import {
  AiOutlineCalendar,
  AiOutlineTags,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
export default () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slideContainer = useRef();
  useEffect(() => {
    const childNodes = [...slideContainer.current.childNodes].slice(1);
    const activeChildNode = childNodes[activeSlide];
    const { width, height } = activeChildNode.getBoundingClientRect();
    const lavaLamp = slideContainer.current.childNodes[0];
    lavaLamp.style.width = `${width}px`;
    lavaLamp.style.height = `${height}px`;
    lavaLamp.style.left = `${activeChildNode.offsetLeft}px`;
  }, [activeSlide]);

  const STATIC_TABS = ["Enabled", "Disabled"];
  return (
    <>
      <div className="flex items-center justify-center px-5 py-4">
        <div className="flex items-center w-full mr-auto">
          <h1 className="mr-auto text-xl font-medium">Create Post</h1>
        </div>
      </div>

      <div className="w-full py-5 border-t border-main-border">
        <form className="flex flex-col gap-6 px-5">
          <span className="flex flex-col gap-1.5">
            <table className="inline-flex items-center text-xs text-left text-white/70 ">
              Title <span className="block w-1 h-1 mx-2 rounded-full bg-white/40" />{" "}
              <a className="inline text-ellipsis">Required</a>
            </table>
            <input className="px-3 py-2 text-sm text-white bg-transparent border rounded-md border-main-border " />
          </span>
          <span className="flex justify-between  gap-1.5">
            <span className="flex flex-col gap-1.5 flex-1">
              <table className="inline-flex items-center text-xs text-left text-white/70 ">
                Tags <span className="block w-1 h-1 mx-2 rounded-full bg-white/40" />{" "}
                <a className="inline text-ellipsis">Required</a>
              </table>
              <span className="flex items-center gap-2 px-3 py-2 text-sm text-white bg-transparent border rounded-md border-main-border">
                <AiOutlineTags className="text-lg text-white/70" />
                <input className="bg-transparent" />
              </span>
            </span>
            <span className="flex flex-col gap-1.5 flex-1">
              <table className="inline-flex items-center text-xs text-left text-white/70 ">
                Contributions{" "}
              </table>
              <ul
                ref={slideContainer}
                className="flex justify-center relative p-0.5 border rounded-md  border-main-border max-h-[38px] min-h-[38px] gap-1"
              >
                <span
                  className={`will-change-transform block w-full absolute z-10 font-normal bg-main-700 rounded-md left-0.5 duration-150 ease-[cubic-bezier(.17,.67,.83,.67)] transition-[left]`}
                />
                {STATIC_TABS.map((_, i) => (
                  <li
                    className={`px-6 py-1 h-full font-normal select-none rounded-md z-50 relative text-white/70 text-sm flex items-center hover:cursor-pointer hover:text-white duration-150  ${
                      activeSlide === i && "text-white"
                    }`}
                    onClick={() => {
                      setActiveSlide(i);
                    }}
                  >
                    {_}
                  </li>
                ))}
              </ul>
            </span>
          </span>
          <span className="flex flex-col gap-1.5">
            <table className="inline-flex items-center text-xs text-left text-white/70 ">
              Description{" "}
              <span className="block w-1 h-1 mx-2 rounded-full bg-white/40" />{" "}
              <a className="inline text-ellipsis">Required</a>
            </table>
            <textbox className="px-3 text-sm text-white bg-transparent border rounded-md border-main-border py-2 min-h-[100px] resize-none" />
          </span>
          <span className="flex flex-col gap-1.5 max-w-max">
            <table className="inline-flex items-center text-xs text-left text-white/70 ">
              Date created{" "}
            </table>
            <p className="flex items-center gap-2 px-3 py-2 text-sm text-white bg-transparent border rounded-md border-main-border">
              <AiOutlineCalendar className="text-lg text-white/70" />
              26, Jan 2022
            </p>
          </span>
        </form>
      </div>
    </>
  );
};
