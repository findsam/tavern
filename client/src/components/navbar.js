import {
  AiOutlineFire,
  AiOutlineQuestionCircle,
  AiOutlineFileText,
  AiOutlineMessage,
  AiOutlineHome,
  AiOutlineLogout,
  AiOutlineLogin,
} from "react-icons/ai";
import { getDiscordURL } from "../static/util";
import { IoPeopleOutline, IoBookmarkOutline } from "react-icons/io5";
import { handleLogout } from "../static/api";
export default function Navbar(props) {
  return (
    <div className="min-w-[245px] bg-neutral-800 max-w-[245px] min-h-screen fixed left-0 top-0">
      <nav className="flex flex-col p-6 h-full min-h-screen">
        <div className="font-medium text-lg tracking-wide flex gap-3">
          <span
            className="h-[30px] w-[30px] min-h-[30px] max-h-[30px] min-w-[30px] max-w-[30px] block
          rounded-md text-center h-full bg-indigo-500"
          >
            C
          </span>
          <span>Current.ly</span>
        </div>
        <ul className="flex flex-col gap-2.5 my-6 mb-auto text-sm tracking-wide flex-1">
          <li className="flex rounded-md bg-stone-500/20 px-2.5 py-2.5">
            <AiOutlineFire className="text-xl mr-3" />
            <span>Feed</span>
          </li>
          <li className="flex opacity-70  px-2.5 py-2.5">
            <IoBookmarkOutline className="text-xl mr-3" />
            Bookmarks
          </li>
          <li className="flex opacity-70  px-2.5 py-2.5">
            <IoPeopleOutline className="text-xl mr-3" />
            Community
          </li>
          <li className="flex opacity-70  px-2.5 py-2.5">
            <AiOutlineMessage className="text-xl mr-3" />
            Help
          </li>
          <li className="flex opacity-70  px-2.5 py-2.5">
            <AiOutlineQuestionCircle className="text-xl mr-3" />
            FAQ
          </li>

          <li className="flex opacity-70  px-2.5 py-2.5 mt-auto">
            <AiOutlineFileText className="text-xl mr-3" />
            Terms and Privacy
          </li>
          <li className="flex opacity-70  px-2.5 py-2.5">
            {!props.user ? (
              <a className="flex text-sm tracking-wide" href={getDiscordURL()}>
                <AiOutlineLogin className="text-xl mr-3" />
                Log in
              </a>
            ) : (
              <button
                onClick={() => handleLogout(props.setUser)}
                className="flex  text-sm tracking-wide"
              >
                <AiOutlineLogout className="text-xl mr-3" />
                Log out
              </button>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
