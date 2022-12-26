import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { TfiTwitter } from "react-icons/tfi";
import { VscGithubAlt } from "react-icons/vsc";
import Create from "./create";
import { useState } from "react";

export default ({ user }) => {
  const [upload, setUpload] = useState(false);
  return (
    <>
      <Create upload={upload} setUpload={setUpload} />
      <div className="fixed flex items-center border-b border-main-border bg-main-800 w-[calc(100%-65px)] right-0 z-10 top-0 min-h-[65px] max-h-[65px] px-5">
        <form className="flex items-center justify-center w-[275px] mr-5 px-2 py-2 border rounded-md bg-main-700 border-main-border max-h-[38px] min-h-[38px]">
          <button>
            <AiOutlineSearch className="mr-2 text-xl opacity-70" />
          </button>
          <input
            className="w-full col-span-2 bg-transparent focus:outline-none text-white/70 placeholder:text-white/70 placeholder:text-sm "
            placeholder="Explore..."
          ></input>
        </form>

        <ul className="flex max-w-max border rounded-md bg-main-700 border-main-border max-h-[38px] min-h-[38px] items-center">
          <li className="flex px-3 py-1 mx-1 rounded-md bg-main-600">
            <span className="text-sm font-normal opacity-100">Recommended</span>
          </li>
          <li className="flex px-3 py-1 mx-1 rounded-md bg-main-700">
            <span className="text-sm font-normal opacity-70">Mutual friends</span>
          </li>
          <li className="flex px-3 py-1 mx-1 rounded-md bg-main-700">
            <span className="text-sm font-normal opacity-70">Your posts</span>
          </li>
        </ul>

        <button
          className="ml-5 px-4 min-h-[38px] max-h-[38px] whitespace-nowrap text-sm text-white border rounded-md bg-main-700 border-main-border "
          onClick={() => setUpload(true)}
        >
          Create Post
        </button>

        <div className="ml-auto">
          {user && (
            <aside className="flex items-center gap-5 ml-auto">
              <span className="text-sm text-right">
                <a>
                  {user.me.username}#{user.me.discriminator}
                </a>
                <p className="text-xs tracking-wide text-right opacity-70">
                  {user.me.email}
                </p>
              </span>
              <Image
                className="rounded-full ring-1 ring-main-600 p-0.5"
                height="38"
                width="38"
                src={`https://cdn.discordapp.com/avatars/${user.me.id}/${user.me.avatar}.png`}
                alt="discord user profile picture generated by api"
              />
              <span className="h-[38px] w-[38px] bg-main-700 border-main-border border rounded-full flex items-center justify-center">
                <BsBell className="text-xl shrink-0 opacity-70" />
              </span>
            </aside>
          )}
        </div>
      </div>
    </>
  );
};
