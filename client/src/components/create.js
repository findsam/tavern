import React from "react";
import Wrap from "./wrap";
import { AiOutlineFileAdd } from "react-icons/ai";

export default ({ upload }) => {
  return (
    upload && (
      <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-main-900/50">
        <div className="border rounded-lg border-main-700 bg-main-800">
          <div className="min-w-[500px] p-5">
            <p className="">Upload and attach files.</p>
            <p className="text-xs tracking-wide opacity-70">
              Upload and attach files to create a post.
            </p>

            <div className="mt-5 border-2 border-dashed border-white/70 min-h-[150px] rounded-lg flex items-center justify-center flex-col">
              <AiOutlineFileAdd size={42} />
              <p className="mt-3">Click to Upload</p>
              <p className="text-xs tracking-wide opacity-70">
                Maximum file size of 10MB.
              </p>
            </div>
          </div>

          <div className="border-t border-main-700">
            <div className="flex gap-5 p-5">
              <button className="flex-1 px-4 min-h-[38px] text-sm text-white border border-main-700 rounded-md bg-main-900">
                Cancel Creation
              </button>
              <button className="flex-1 px-4 min-h-[38px]text-sm text-white border border-green-900 rounded-md bg-green-900/40">
                Create Post
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
