import { CommentItem } from "./commentItem";
import { LikeItem } from "./likeItem";
import { ContributionItem } from "./contributionItem";
import { useState } from "react";
import { PostItem } from "./postItem";

export default () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <div className="relative flex items-center border-b border-main-border top-[1px] bg-main-800">
        <ul className="flex h-full gap-5 px-5">
          <li
            onClick={() => setActiveTab(1)}
            className={`relative py-5 flex text-sm gap-1.5 ${
              activeTab &&
              "after:absolute after:content-[''] after:bottom-[-1px] after:h-[2px] after:block after:bg-green-900 after:w-full"
            }`}
          >
            <span className={`${activeTab ? "text-green-400" : "text-white/70"}`}>
              Notifications
            </span>
            <span
              className={`h-[20px] w-[24px] ${
                activeTab
                  ? "border-green-900 bg-green-900/40 text-green-400"
                  : "border-main-border text-white/70 bg-main-700"
              }  border text-center font-semibold rounded-md tracking-tighter flex items-center justify-center`}
            >
              3
            </span>
          </li>
          <li
            onClick={() => setActiveTab(0)}
            className={`relative py-5 flex text-sm gap-1.5 ${
              !activeTab &&
              "after:absolute after:content-[''] after:bottom-[-1px] after:h-[2px] after:block after:bg-green-900 after:w-full"
            }`}
          >
            <span className={`${!activeTab ? "text-green-400" : "text-white/70"}`}>
              Following
            </span>
            <span
              className={`h-[20px] w-[24px] ${
                !activeTab
                  ? "border-green-900 bg-green-900/40 text-green-400"
                  : "border-main-border text-white/70 bg-main-700"
              }  border text-center font-semibold rounded-md tracking-tighter flex items-center justify-center`}
            >
              23
            </span>
          </li>
        </ul>
      </div>
      <ul className="grid max-h-[600px] h-full overflow-y-scroll">
        {activeTab ? (
          <>
            <CommentItem />
            <LikeItem />
            <ContributionItem />
            <LikeItem />
            <CommentItem />
            <ContributionItem />
          </>
        ) : (
          <>
            <div className="block h-full">
              <PostItem />
            </div>
          </>
        )}
      </ul>
    </>
  );
};
