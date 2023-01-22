import {
  AiOutlineQuestionCircle,
  AiOutlineFileText,
  AiOutlineLogout,
  AiOutlineLogin,
  AiOutlineLock,
  AiOutlineHome,
} from "react-icons/ai";
import { getDiscordURL } from "../static/util";
import { IoBookmarkOutline } from "react-icons/io5";
import { handleLogout } from "../static/api";
import { useRouter } from "next/router";
import { useState } from "react";

const APP_ROUTES = [
  { name: "Home", url: "/", icon: <AiOutlineHome />, tooltip: "Homepage" },
  {
    name: "Bookmarks",
    url: "/bookmarks",
    icon: <IoBookmarkOutline />,
    tooltip: "Your bookmarks",
  },
  {
    name: "FAQ",
    url: "/faq",
    icon: <AiOutlineQuestionCircle />,
    tooltip: "Our FAQ",
  },
];

export default function Navbar(props) {
  const router = useRouter();
  return (
    <div className="fixed top-0 left-0 min-h-screen border-r bg-main-800 border-main-border max-w-[62px] min-w-[62px] z-10">
      <nav className="flex flex-col items-center h-full min-h-screen gap-5 p-2">
        <div className="flex items-center py-0.5 mb-auto max-h-max  mt-1.5">
          <div className="flex items-center justify-center -space-x-3">
            <span className="block w-6 h-6 border-2 rounded-full border-main-800 bg-main-300" />
            <span className="block w-8 h-8 border-4 rounded-full border-main-800 bg-main-500" />
          </div>
        </div>
        <ul className="flex flex-col items-center justify-center flex-1 flex-grow-0 gap-2.5 text-sm">
          {APP_ROUTES.map((r, i) => (
            <li
              key={i}
              className={`border-transparent text-white/70 flex px-2 py-2 relative border rounded-md hover:cursor-pointer group`}
            >
              <span className="text-[1.3rem] relative">
                {r.icon}

                <span className="absolute top-0 z-50 px-2 py-1 text-xs tracking-wide text-white duration-150 rounded-md opacity-0 left-5 bg-main-900 group-hover:opacity-100 group-hover:left-7">
                  {r.name}
                </span>
              </span>
            </li>
          ))}
        </ul>

        <ul className="flex flex-col flex-1 flex-grow-0 gap-2.5 mt-auto text-sm">
          <li
            className={`border-transparent text-white/70 flex px-2 py-2 relative border rounded-md hover:cursor-pointer group`}
          >
            <span className="text-[1.3rem] relative">
              <AiOutlineFileText />
              <span className="absolute top-0 z-50 px-2 py-1 text-xs tracking-wide text-white duration-150 rounded-md opacity-0 whitespace-nowrap left-5 bg-main-900 group-hover:opacity-100 group-hover:left-7">
                Terms of Service
              </span>
            </span>
          </li>

          <li
            className={`border-transparent text-white/70 flex px-2 py-2 relative border rounded-md hover:cursor-pointer group`}
          >
            <span className="text-[1.3rem] relative">
              <AiOutlineLock />
              <span className="absolute top-0 z-50 px-2 py-1 text-xs tracking-wide text-white duration-150 rounded-md opacity-0 left-5 bg-main-900 group-hover:opacity-100 group-hover:left-7">
                Privacy
              </span>
            </span>
          </li>

          <li
            className={`border-transparent text-white/70 flex px-2 py-2 relative border rounded-md hover:cursor-pointer group`}
          >
            {!props.user ? (
              <a className="text-[1.3rem] relative" href={getDiscordURL()}>
                <AiOutlineLogin />
                <span className="absolute top-0 z-50 px-2 py-1 text-xs tracking-wide text-white duration-150 rounded-md opacity-0 left-5 bg-main-900 group-hover:opacity-100 group-hover:left-7">
                  Login
                </span>
              </a>
            ) : (
              <button
                className="text-[1.3rem] relative"
                onClick={() => handleLogout(props.setUser, router)}
              >
                <AiOutlineLogout />
                <span className="absolute top-0 z-50 px-2 py-1 text-xs tracking-wide text-white duration-150 rounded-md opacity-0 left-5 bg-main-900 group-hover:opacity-100 group-hover:left-7">
                  Logout
                </span>
              </button>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
