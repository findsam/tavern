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

export default function Navbar(props) {
  return (
    <div className="min-w-[275px] bg-main-800 max-w-[275px] min-h-screen fixed left-0 top-0 border-r border-main-700">
      <nav className="flex flex-col h-full min-h-screen p-5">
        <div className="flex items-center pb-3">
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
          <span className="text-sm font-semibold tracking-wide">beta@tavern.gg</span>
        </div>
        <form className="flex items-center justify-center w-full px-2 py-2 border rounded-md bg-main-700 border-main-600 max-h-[38px] min-h-[38px]">
          <button>
            <AiOutlineSearch className="mr-2 text-xl opacity-70" />
          </button>
          <input
            className="w-full col-span-2 bg-transparent focus:outline-none text-white/70 placeholder:text-white/70 placeholder:text-sm "
            placeholder="Explore..."
          ></input>
        </form>
        <ul className="flex flex-col flex-1 gap-3 mt-6 text-sm tracking-wide">
          <p className="pt-3 border-t border-main-600 opacity-70">Navigation</p>
          <li className="flex px-2 py-2 border rounded-md bg-main-700 border-main-700">
            <AiOutlineFire className="mr-2 text-xl" />
            <span className="font-medium">Feed</span>
          </li>
          <li className="flex px-2 py-2 bg-transparent border border-transparent rounded-md opacity-70 ">
            <IoBookmarkOutline className="mr-2 text-xl" />
            Bookmarks
          </li>
          <li className="flex px-2 py-2 bg-transparent border border-transparent rounded-md opacity-70">
            <IoPeopleOutline className="mr-2 text-xl" />
            Community
          </li>
          <li className="flex px-2 py-2 bg-transparent border border-transparent rounded-md opacity-70">
            <AiOutlineMessage className="mr-2 text-xl" />
            Help
          </li>
          <li className="flex px-2 py-2 bg-transparent border border-transparent rounded-md opacity-70">
            <AiOutlineQuestionCircle className="mr-2 text-xl" />
            FAQ
          </li>

          <p className="pt-3 mt-auto border-t border-main-600 opacity-70">
            Terms & Authentication
          </p>
          <li className="flex px-2 py-2 border rounded-md opacity-70 bg-main-700 border-main-700">
            <AiOutlineFileText className="mr-2 text-xl" />
            Terms of Service
          </li>
          <li className="flex px-2 py-2 border rounded-md opacity-70 bg-main-700 border-main-700">
            <AiOutlineLock className="mr-2 text-xl" />
            Privacy Policy
          </li>
          <li className="flex px-2 py-2 border rounded-md opacity-70 bg-main-700 border-main-700">
            {!props.user ? (
              <a className="flex text-sm tracking-wide" href={getDiscordURL()}>
                <AiOutlineLogin className="mr-2 text-xl" />
                Log in
              </a>
            ) : (
              <button
                onClick={() => handleLogout(props.setUser)}
                className="flex text-sm tracking-wide"
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
