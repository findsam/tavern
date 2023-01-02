import React from "react";
import Wrap from "./wrap";
import { AiOutlineFileAdd } from "react-icons/ai";
import { useRef, useEffect } from "react";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default ({ upload, setUpload }) => {
  const container = useRef(null);

  useEffect(() => {
    (async () => {
      if (upload) {
        await sleep(1);
        container?.current?.childNodes[0]?.classList?.remove("opacity-0");
        container?.current?.childNodes[0]?.classList?.remove("-translate-y-8");
      }
    })();
  }, [upload, container]);

  async function handleClose() {
    container?.current?.childNodes[0]?.classList?.add("opacity-0");
    container?.current?.childNodes[0]?.classList?.add("-translate-y-8");
    await sleep(300);
    setUpload(false);
  }

  return (
    upload && (
      <div
        className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full transition-all duration-150 bg-main-900/90"
        ref={container}
      >
        <div className="duration-300 -translate-y-8 border rounded-lg opacity-0 border-main-border bg-main-800 main">
          <div className="min-w-[500px] p-5">
            <p className="">Thread title:</p>
            <p className="text-xs tracking-wide opacity-70">
              Set a title that people can use to search for your thread.
            </p>
            <form className="mb-5 mt-3 flex items-center justify-center w-full px-2 py-2 border rounded-md bg-main-700 border-main-border max-h-[38px] min-h-[38px]">
              <input
                className="w-full col-span-2 text-xs font-medium bg-transparent focus:outline-none text-white/70 placeholder:text-white/70 placeholder:text-sm"
                // placeholder="Enter your thread title."
              ></input>
            </form>

            <p className="">Created with:</p>
            <p className="text-xs tracking-wide opacity-70">
              Please tell us the primary application used to create this file.
            </p>
            <form className="mb-5 mt-3 flex items-center justify-center w-full px-2 py-2 border rounded-md bg-main-700 border-main-border max-h-[38px] min-h-[38px]">
              <input
                className="w-full col-span-2 text-xs font-medium bg-transparent focus:outline-none text-white/70 placeholder:text-white/70 placeholder:text-sm "
                // placeholder="Enter primary application."
              ></input>
            </form>

            <p className="">A short description:</p>
            <p className="text-xs tracking-wide opacity-70">
              Please give a short description on this piece.
            </p>

            <textarea
              className="text-xs font-medium mt-3 mb-5 w-full col-span-2 p-2  bg-main-700 border-main-border border rounded-md resize-none  focus:outline-none text-white/70 placeholder:text-white/70 placeholder:text-sm min-h-[100px] "
              // placeholder="Please provide a small description for people to be able to understand your work."
            ></textarea>

            <p className="">Upload and attach files.</p>
            <p className="text-xs tracking-wide opacity-70">
              Upload and attach files to this thread.
            </p>
            <div className="mb-2 mt-3 border-2 border-dashed border-white/70 min-h-[150px] rounded-lg flex items-center justify-center flex-col">
              <AiOutlineFileAdd size={42} />
              <p className="mt-3">Click to Upload</p>
              <p className="text-xs tracking-wide opacity-70">
                Maximum file size of 10MB.
              </p>
            </div>
          </div>

          <div className="border-t border-main-border">
            <div className="flex gap-5 p-5">
              <button
                className="flex-1 px-4 min-h-[38px] text-sm text-white/70 border rounded-md bg-main-700 border-main-border  hover:bg-main-900 hover:text-white duration-150"
                onClick={() => handleClose()}
              >
                Cancel Creation
              </button>
              <button className="flex-1 px-4 min-h-[38px] text-sm  border border-green-900 rounded-md text-green-400 bg-green-900/40">
                Create Post
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
