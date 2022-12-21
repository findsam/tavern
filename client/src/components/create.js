import React from "react";
import Wrap from "./wrap";
import { AiOutlineFileAdd } from "react-icons/ai";

export default ({ upload, setUpload }) => {
  return (
    upload && (
      <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-main-900/90">
        <div className="border rounded-lg border-main-700 bg-main-800">
          <div className="min-w-[500px] p-5">
            <p className="">Thread title:</p>
            <p className="text-xs tracking-wide opacity-70">
              Set a title that people can use to search for your thread.
            </p>
            <form className="mb-5 mt-3 flex items-center justify-center w-full px-2 py-2 border rounded-md bg-main-700 border-main-600 max-h-[38px] min-h-[38px]">
              <input
                className="w-full col-span-2 bg-transparent focus:outline-none text-white/70 placeholder:text-white/70 placeholder:text-sm "
                placeholder="Enter your thread title..."
              ></input>
            </form>

            <p className="">Created With:</p>
            <p className="text-xs tracking-wide opacity-70">
              Please list the applications used to create this project.
            </p>
            <form className="mb-5 mt-3 flex items-center justify-center w-full px-2 py-2 border rounded-md bg-main-700 border-main-600 max-h-[38px] min-h-[38px]">
              <input
                className="w-full col-span-2 bg-transparent focus:outline-none text-white/70 placeholder:text-white/70 placeholder:text-sm "
                placeholder="Enter application names..."
              ></input>
            </form>

            <p className="">Upload and attach files.</p>
            <p className="text-xs tracking-wide opacity-70">
              Upload and attach files to this post.
            </p>
            <div className="mb-2 mt-3 border-2 border-dashed border-white/70 min-h-[150px] rounded-lg flex items-center justify-center flex-col">
              <AiOutlineFileAdd size={42} />
              <p className="mt-3">Click to Upload</p>
              <p className="text-xs tracking-wide opacity-70">
                Maximum file size of 10MB.
              </p>
            </div>
          </div>

          <div className="border-t border-main-700">
            <div className="flex gap-5 p-5">
              <button
                className="flex-1 px-4 min-h-[38px] text-sm text-white border border-main-700 rounded-md bg-main-900"
                onClick={() => setUpload(false)}
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
