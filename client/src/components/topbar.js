import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { TfiTwitter } from "react-icons/tfi";
import { VscGithubAlt } from "react-icons/vsc";
import Create from "./create";
import { useState } from "react";

export default ({ user }) => {
  const [upload, setUpload] = useState(false);
  return (
    <>
      <Create upload={upload} />
      <div className="fixed flex py-4 px-12 border-b border-main-700 bg-main-800 w-[calc(100%-275px)] right-0 z-10">
        <button
          className="px-4 mr-5 text-sm text-white border border-indigo-900 rounded-md bg-indigo-900/40"
          onClick={() => setUpload(true)}
        >
          Create Post
        </button>

        <ul className="flex max-w-max border rounded-md bg-main-700 border-main-600 max-h-[38px] min-h-[38px] items-center">
          <li className="flex px-3 py-1 mx-1 rounded-md bg-main-600">
            <span className="text-sm font-medium opacity-100">Explore</span>
          </li>
          <li className="flex px-3 py-1 mx-1 rounded-md bg-main-700">
            <span className="text-sm font-normal opacity-70">Community feed</span>
          </li>
          <li className="flex px-3 py-1 mx-1 rounded-md bg-main-700">
            <span className="text-sm font-normal opacity-70">Mutual friends</span>
          </li>
        </ul>

        <div className="ml-auto">
          {user && (
            <aside className="flex items-center gap-3 ml-auto">
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
              <span className="h-[38px] w-[38px] bg-main-700 border-main-600 border rounded-full flex items-center justify-center">
                <BsBell className="text-xl shrink-0 opacity-70" />
              </span>
            </aside>
          )}
        </div>
      </div>
    </>
  );
};
