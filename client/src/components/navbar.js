import {
  AiOutlineFire,
  AiOutlineQuestionCircle,
  AiOutlineFileText,
  AiOutlineMessage,
  AiOutlineLogout,
  AiOutlineLogin,
  AiOutlineLock,
} from "react-icons/ai";
import { getDiscordURL } from "../static/util";
import { IoPeopleOutline, IoBookmarkOutline } from "react-icons/io5";
import { handleLogout } from "../static/api";
import { useRouter } from "next/router";
import { useState } from "react";

const APP_ROUTES = [
  { name: "Feed", url: "/", icon: <AiOutlineFire />, tooltip: "Homepage" },
  {
    name: "Bookmarks",
    url: "/bookmarks",
    icon: <IoBookmarkOutline />,
    tooltip: "Your bookmarks",
  },
  {
    name: "Community",
    url: "/community",
    icon: <IoPeopleOutline />,
    tooltip: "Your community",
  },
  {
    name: "Help",
    url: "/help",
    icon: <AiOutlineMessage />,
    tooltip: "Ask for Help",
  },
  {
    name: "faq",
    url: "/faq",
    icon: <AiOutlineQuestionCircle />,
    tooltip: "Our FAQ",
  },
];

export default function Navbar(props) {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  return (
    <div className="fixed top-0 left-0 min-h-screen border-r bg-main-800 border-main-700 max-w-[65px] min-w-[65px]">
      <nav className="flex flex-col items-center h-full min-h-screen gap-5 p-2">
        <div className="flex items-center py-0.5 mb-auto max-h-max">
          <div className="flex items-center justify-center -space-x-3">
            <span
              className="block w-6 h-6 border-2 rounded-full bg-main-300 border-main-800"
              src="/p.jpeg"
            />
            <span
              className="block w-8 h-8 border-4 rounded-full bg-main-500 border-main-800"
              src="/p.jpeg"
            />
          </div>
        </div>
        <ul className="flex flex-col items-center justify-center flex-1 flex-grow-0 gap-3 text-sm">
          {APP_ROUTES.map((r, i) => (
            <li
              key={i}
              className={`${
                r.url === router.route
                  ? "border-transparent"
                  : "border-transparent bg-transparent text-white/70 "
              } flex px-2 py-2 border rounded-md`}
            >
              <span className="text-[1.3rem]">{r.icon}</span>
            </li>
          ))}
        </ul>

        <ul className="flex flex-col flex-1 flex-grow-0 gap-3 mt-auto text-sm">
          <li className="flex px-2 py-2 mt-auto duration-200 rounded-md opacity-70">
            <AiOutlineFileText className="text-[1.3rem]" />
          </li>
          <li className="flex px-2 py-2 duration-200 rounded-md opacity-70">
            <AiOutlineLock className="text-[1.3rem]" />
          </li>
          <li className="flex px-2 py-2 duration-200 rounded-md opacity-70">
            {!props.user ? (
              <a className="flex text-sm" href={getDiscordURL()}>
                <AiOutlineLogin className="text-[1.3rem]" />
              </a>
            ) : (
              <button
                onClick={() => handleLogout(props.setUser)}
                className="flex text-sm"
              >
                <AiOutlineLogout className="text-[1.3rem]" />
              </button>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
