import {
  AiOutlineFire,
  AiOutlineQuestionCircle,
  AiOutlineFileText,
  AiOutlineMessage,
  AiOutlineHome,
  AiOutlineLogout,
  AiOutlineSearch,
  AiOutlineLogin,
  AiOutlineLock,
} from "react-icons/ai";
import { getDiscordURL } from "../static/util";
import { IoPeopleOutline, IoBookmarkOutline } from "react-icons/io5";
import { handleLogout } from "../static/api";
import { useRouter } from "next/router";

const APP_ROUTES = [
  { name: "Feed", url: "/", icon: <AiOutlineFire /> },
  { name: "Bookmarks", url: "/bookmarks", icon: <IoBookmarkOutline /> },
  { name: "Community", url: "/community", icon: <IoPeopleOutline /> },
  { name: "Help", url: "/help", icon: <AiOutlineMessage /> },
  { name: "faq", url: "/faq", icon: <AiOutlineQuestionCircle /> },
];

export default function Navbar(props) {
  const router = useRouter();
  return (
    <div className="min-w-[275px] bg-main-800 max-w-[275px] min-h-screen fixed left-0 top-0 border-r border-main-700">
      <nav className="flex flex-col h-full min-h-screen p-5">
        <div className="flex items-center pb-5">
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
          <span className="text-sm font-semibold">beta@tavern.gg</span>
        </div>
        <ul className="flex flex-col flex-1 gap-3 text-sm">
          <p className="pt-5 border-t border-main-600 opacity-70">Navigation</p>
          {APP_ROUTES.map((r, i) => (
            <li
              key={i}
              className={`${
                r.url === router.route
                  ? "bg-main-700 border-main-700 text-white"
                  : "border-transparent bg-transparent text-white/70 "
              } flex px-2 py-2  border  rounded-md hover:cursor-pointer hover:bg-main-700 hover:text-white duration-200`}
            >
              <span className="mr-2 text-xl">{r.icon}</span>
              {r.name}
            </li>
          ))}

          <li className="flex px-2 py-2 mt-auto duration-200 border rounded-md opacity-70 bg-main-700 border-main-700 hover:border-main-700 hover:bg-main-900 hover:text-white hover:opacity-100 hover:cursor-pointer">
            <AiOutlineFileText className="mr-2 text-xl" />
            Terms of Service
          </li>
          <li className="flex px-2 py-2 duration-200 border rounded-md opacity-70 bg-main-700 border-main-700 hover:border-main-700 hover:bg-main-900 hover:text-white hover:opacity-100 hover:cursor-pointer">
            <AiOutlineLock className="mr-2 text-xl" />
            Privacy Policy
          </li>
          <li className="flex px-2 py-2 duration-200 border rounded-md opacity-70 bg-main-700 border-main-700 hover:border-main-700 hover:bg-main-900 hover:text-white hover:opacity-100 hover:cursor-pointer">
            {!props.user ? (
              <a className="flex text-sm" href={getDiscordURL()}>
                <AiOutlineLogin className="mr-2 text-xl" />
                Log in
              </a>
            ) : (
              <button
                onClick={() => handleLogout(props.setUser)}
                className="flex text-sm"
              >
                <AiOutlineLogout className="mr-2 text-xl" />
                Log out
              </button>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
