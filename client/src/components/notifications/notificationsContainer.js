import { CommentItem } from "./commentItem";
import { LikeItem } from "./likeItem";
import { ContributionItem } from "./contributionItem";
export default () => {
  return (
    <>
      <div className="relative flex items-center border-b border-main-border top-[1px] bg-main-800">
        <ul className="flex h-full gap-5 px-5">
          <li className="py-5 flex text-sm gap-1.5 after:absolute after:content-[''] after:bottom-[-1px] after:h-[2px] after:block after:bg-green-900 relative after:w-full">
            <span className="text-green-400">Notifications</span>
            <span className="h-[20px] w-[24px] border-green-900 border bg-green-900/40 text-green-400 text-center font-semibold rounded-md tracking-tighter flex items-center justify-center">
              3
            </span>
          </li>
          <li className="py-5  flex text-sm gap-1.5 after:absolute after:content-[''] after:block after:bg-main-border relative after:w-full">
            <span className=" text-white/70">Following</span>
            <span className="h-[20px] w-[24px] border-main-border  border text-white/70 rounded-md bg-main-700 text-center font-semibold  tracking-tighter flex items-center justify-center">
              23
            </span>
          </li>
        </ul>
      </div>
      <ul className="grid max-h-[600px] h-full overflow-y-scroll">
        <CommentItem />
        <LikeItem />
        <ContributionItem />
        <LikeItem />
        <CommentItem />
        <ContributionItem />
      </ul>
    </>
  );
};
