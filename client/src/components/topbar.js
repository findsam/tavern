import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import Create from "./create";
import Modal from "./modal";
import { CommentItem } from "./notifications/commentItem";
import { LikeItem } from "./notifications/likeItem";
import { ContributionItem } from "./notifications/contributionItem";
import { useState, useRef, useEffect } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";

export default ({ user }) => {
  const [show, setShow] = useState(false);
  const [upload, setUpload] = useState(false);
  return (
    <>
      <Modal show={upload} setShow={setUpload}>
        <p className="">Thread title:</p>
        <p className="text-xs tracking-wide opacity-70">
          Set a title that people can use to search for your thread.
        </p>
        <form className="mb-5 mt-3 flex items-center justify-center w-full px-2 py-2 border rounded-md bg-main-700 border-main-border max-h-[38px] min-h-[38px]">
          <input className="w-full col-span-2 text-xs font-medium bg-transparent focus:outline-none text-white/70 placeholder:text-white/70 placeholder:text-sm"></input>
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
          Please give a short description on this thread.
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

        <div className="border-t border-main-border">
          <div className="flex gap-5 p-5">
            <button
              className="flex-1 px-4 min-h-[38px] text-sm text-white/70 border rounded-md bg-main-700 border-main-border  hover:bg-main-900 hover:text-white duration-150"
              onClick={() => handleClose()}
            >
              Cancel Creation
            </button>
            <button className="flex-1 px-4 min-h-[38px] text-sm  border border-green-900 rounded-md text-green-400 bg-green-900/40 duration-150 hover:bg-green-900">
              Create Thread
            </button>
          </div>
        </div>
      </Modal>
      <Modal show={show} setShow={setShow}>
        <div className="flex items-center border-b border-main-border">
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
      </Modal>
      <div className="fixed flex items-center border-b border-main-border bg-main-800 w-[calc(100%-62px)] right-0 z-10 top-0 min-h-[62px] max-h-[62px] px-2.5 md:px-5 py-5 gap-2.5 md:gap-5">
        <div className=" flex-1 flex w-full gap-2.5 md:gap-5">
          <form className="flex items-center justify-center w-[200px] md:w-[275px] px-2 py-2 border rounded-md bg-main-700 border-main-border max-h-[38px] min-h-[38px]">
            <button>
              <AiOutlineSearch className="mr-2 text-xl opacity-70" />
            </button>
            <input
              className="w-full col-span-2 bg-transparent focus:outline-none text-white/70 placeholder:text-white/70 placeholder:text-sm placeholder:font-normal"
              placeholder="Looking to explore..."
            ></input>
          </form>
          <button
            className="px-4 min-h-[38px] max-h-[38px] whitespace-nowrap text-sm text-white/70 border rounded-md bg-main-700 border-main-border  hover:bg-main-900 hover:text-white duration-150"
            onClick={() => setUpload(true)}
          >
            Create Post
          </button>
        </div>
        <div className="ml-0 flex-0 md:ml-auto">
          {user && (
            <aside className="flex flex-row-reverse items-center gap-2.5 ml-auto md:gap-5">
              <button
                onClick={() => setShow(true)}
                className="h-[38px] w-[38px] bg-main-700 border-main-600 border rounded-full flex items-center justify-center relative shrink-0"
              >
                <span className="absolute top-0 right-0 z-10 block w-3 h-3 bg-green-400 border-2 rounded-full border-main-800" />
                <BsBell className="text-xl shrink-0 opacity-70" />
              </button>
              <Image
                className="rounded-full ring-1 ring-main-border p-0.5"
                height="38"
                width="38"
                src={`https://cdn.discordapp.com/avatars/${user.me.id}/${user.me.avatar}.png`}
                alt="discord user profile picture generated by api"
              />
              <span className="hidden text-sm text-right md:block ">
                <a>
                  {user.me.username}#{user.me.discriminator}
                </a>
                <p className="text-xs tracking-wide text-left opacity-70">
                  {user.me.email}
                </p>
              </span>
            </aside>
          )}
        </div>
      </div>
    </>
  );
};
