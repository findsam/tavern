import { useEffect, useState, useRef } from "react";
import { AiOutlineCalendar, AiOutlineTags, AiOutlineCloudUpload } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

export default () => {
  const tagsRef = useRef();
  const [tags, setTags] = useState([]);
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

  const handleTags = (e) => {
    if (tags.length >= 3) return null;
    e.preventDefault();
    setTags([...tags, tagsRef.current.value]);
    tagsRef.current.value = "";
  };

  return (
    <>
      <div className="flex items-center justify-center px-5 py-4 min-h-[61px]">
        <div className="flex items-center w-full mr-auto">
          <h1 className="mr-auto text-xl font-medium">New Thread</h1>
        </div>
      </div>

      <div className="w-full py-5 border-t border-main-border">
        <div
          className="flex flex-col gap-2.5 px-5"
          // onSubmit={(e) => e.preventDefault()}
        >
          <span className="flex flex-col gap-1.5">
            <label className="inline-flex items-center text-xs text-left text-main-text/70 ">
              Title <span className="ml-0.5 font-medium text-red-500">*</span>
            </label>
            <input className="px-3 py-2 text-sm bg-transparent border rounded-md text-main-text border-main-border focus:outline-none active:outline-none " />
          </span>
          <div className="flex gap-2.5">
            <span className="flex flex-col gap-1.5  max-w-max ">
              <label className="inline-flex items-center text-xs text-left text-main-text/70 ">
                Contributions <span className="ml-0.5 font-medium text-red-500">*</span>
              </label>
              <ul
                ref={slideContainer}
                className="flex justify-center items-center relative p-0.5 border rounded-md border-main-border max-h-[38px] min-h-[38px] gap-1"
              >
                <span
                  className={`will-change-transform block w-full absolute z-10 font-normal bg-main-700 rounded-md left-0.5 duration-150 ease-[cubic-bezier(.17,.67,.83,.67)] transition-[left]`}
                />
                {STATIC_TABS.map((_, i) => (
                  <li
                    className={`px-6 py-1 h-full font-normal select-none rounded-md z-50 relative text-main-text/70 text-sm flex items-center hover:cursor-pointer hover:text-main-text duration-150  ${
                      activeSlide === i && "text-main-text"
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
            <span className="flex flex-col gap-1.5 max-w-max">
              <label className="inline-flex items-center text-xs text-left text-main-text/70 ">Date</label>
              <p className="flex items-center gap-2 px-3 py-2 text-sm bg-transparent border rounded-md text-main-text border-main-border">
                <AiOutlineCalendar className="text-lg text-main-text/70" />
                26, Jan 2022
              </p>
            </span>
          </div>
          <span className="flex flex-col gap-1.5">
            <label className="inline-flex items-center text-xs text-left text-main-text/70 ">
              Description{" "}
            </label>
            <textarea className="px-3 text-sm text-main-text bg-transparent border rounded-md border-main-border py-2 min-h-[142px] resize-none focus:outline-none active:outline-none" />
          </span>

          <span className="flex flex-col gap-1.5">
            <label className="inline-flex items-center text-xs text-left text-main-text/70 ">Tags</label>
            <span className="flex items-center gap-2 px-3 min-h-[38px] w-full text-sm text-main-text bg-transparent border rounded-md border-main-border">
              <AiOutlineTags className="text-lg text-main-text/70 shrink-0" />
              <ul className="flex gap-1 max-w-max">
                {tags.map((_, i) => (
                  <li className="px-2 py-1 text-xs border rounded-md text-main-text/70 border-main-border bg-main-700">
                    {_}
                  </li>
                ))}
              </ul>
              <form onSubmit={(e) => handleTags(e)} className="w-full">
                <input className="w-full bg-transparent focus:outline-none active:outline-none" ref={tagsRef} />
              </form>
            </span>
          </span>

          <span className="flex flex-col gap-1.5">
            <label className="inline-flex items-center text-xs text-left text-main-text/70 ">
              Add file <span className="ml-0.5 font-medium text-red-500">*</span>
            </label>

            <div className="px-3 text-sm text-main-text bg-transparent border rounded-md border-main-border  py-2 min-h-[142px] flex items-center justify-center flex-col gap-1">
              <AiOutlineCloudUpload className="text-xl" />
              <p className="text-sm text-main-text">Click to upload a file...</p>
              <p className="text-xs text-left text-main-text/70">Max 5mb</p>
            </div>
          </span>

          <span className="relative flex items-center w-full gap-2 text-xs text-center">
            <span className="h-[1px] block flex-1 bg-main-border" />
            <span className="mx-3 text-main-text/70">Confirm Upload</span>
            <span className="h-[1px] block flex-1 bg-main-border" />
          </span>
          <div className="flex gap-2.5 mt-0.5 w-full">
            <button className="px-6 min-h-[38px] w-full text-sm text-main-text/70 border rounded-md bg-main-700 border-main-border  hover:border-white/70 duration-150">
              Cancel Creation
            </button>
            <button className="px-6 min-h-[38px] w-full text-sm border border-green-900 rounded-md text-green-400 bg-green-900/40 duration-150 hover:border-green-400">
              Create Thread
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
