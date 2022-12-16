import {
  IoMdNotificationsOutline,
  IoMdSearch,
  IoIosArrowDown,
  IoMdPerson,
} from "react-icons/io";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
import { getDiscordURL } from "../static/util.js";
import { handleLogout } from "../static/api";

export default function Navbar(props) {
  return (
    <nav className="flex justify-between p-5 border-b border-white/20">
      <div className="flex items-center">
        <span className="mr-2 w-[24px] h-[24px] min-w-[24px] min-h-[24px] bg-orange-500 rounded-md flex items-center justify-center font-bold">
          T
        </span>
        <h1 className="font-medium">Tavern</h1>
      </div>
      <ul className="flex items-center gap-10 text-base font-normal text-white/70">
        <li>Top</li>
        <li>Ask</li>
        <li>Show</li>
        <li>Best</li>
        <li>New</li>
        <li>Active</li>
        <li className="text-xl">
          <IoIosArrowDown />
        </li>
      </ul>
      <ul className="flex items-center gap-10 text-white/70">
        <li className="text-xl">
          <IoMdNotificationsOutline />
        </li>
        <li className="text-xl">
          <MdOutlineFavoriteBorder />
        </li>
        <li className="text-xl">
          <IoMdSearch />
        </li>
        <li className="flex items-center text-xl">
          {!props.user ? (
            <button className="flex items-center px-3 py-1 text-base bg-gray-700 rounded-md">
              <FaDiscord className="mr-2 text-xl" />
              Login with Discord
            </button>
          ) : (
            <button onClick={() => handleLogout(props.setUser)} className="text-xl">
              <IoMdPerson />
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
}
