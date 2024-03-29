import Image from "next/image";
import { memo } from "react";
import { AiOutlineSound, AiOutlineMessage, AiOutlinePicture } from "react-icons/ai";

const randomNames = ["saya#3893", "kianrws#rs4", "bellamonnet#9938", "tyasly#9929"];

function Contribution(props) {
  switch (props.type) {
    case "creator":
      return (
        <li className="flex items-start w-full gap-2.5 relative ">
          <Image
            className="rounded-full ring-1 ring-main-border p-0.5"
            height="38"
            width="38"
            src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50)}`}
            alt="discord user profile picture generated by api"
          />
          <div className="flex flex-col gap-1 text-sm text-main-text/70">
            <p className="inline-block">
              Thread was created titled
              <span className="inline-block ml-1 font-medium text-main-text">Illidan Stormrage</span>{" "}
            </p>
            <p className="inline-flex items-center text-xs text-left text-main-text/40 ">
              <a className="inline text-ellipsis">Synapois#1983</a>
              <span className="block w-1 h-1 mx-2 rounded-full bg-white/40" /> 2 hours ago{" "}
            </p>
          </div>
        </li>
      );
    case "sound":
      return (
        <li className="flex items-start w-full gap-2.5 relative ">
          <Image
            className="rounded-full ring-1 ring-main-border p-0.5"
            height="38"
            width="38"
            src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50)}`}
            alt="discord user profile picture generated by api"
          />
          <div className="flex flex-col gap-1 text-sm text-main-text/70">
            <p className="inline-block">
              Sound added to this thread
              <span className="inline-block ml-1 font-medium text-main-text">sound.wav</span>{" "}
            </p>
            <p className="inline-flex items-center text-xs text-left text-main-text/40 ">
              <a className="inline text-ellipsis">Synapois#1983</a>
              <span className="block w-1 h-1 mx-2 rounded-full bg-white/40" /> 2 hours ago{" "}
            </p>
          </div>
        </li>
      );
    case "text":
      return (
        <li className="flex items-start w-full gap-2.5 relative ">
          <Image
            className="rounded-full ring-1 ring-main-border p-0.5"
            height="38"
            width="38"
            src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50)}`}
            alt="discord user profile picture generated by api"
          />
          <div className="flex flex-col gap-1 text-sm text-main-text/70">
            <p className="inline-block">Lore was added to this thread</p>
            <p className="inline-flex items-center text-xs text-left text-main-text/40 ">
              <a className="inline text-ellipsis">Synapois#1983</a>
              <span className="block w-1 h-1 mx-2 rounded-full bg-white/40" /> 2 hours ago{" "}
            </p>
          </div>
        </li>
      );
    case "image":
      return (
        <li className="flex items-start w-full gap-2.5 relative ">
          <Image
            className="rounded-full ring-1 ring-main-border p-0.5"
            height="38"
            width="38"
            src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50)}`}
            alt="discord user profile picture generated by api"
          />
          <div className="flex flex-col gap-1 text-sm text-main-text/70">
            <p className="inline-block">
              Visuals was added to this thread
              <span className="inline-block ml-1 font-medium text-main-text">illidan.jpg</span>{" "}
            </p>
            <p className="inline-flex items-center text-xs text-left text-main-text/40 ">
              <a className="inline text-ellipsis">Synapois#1983</a>
              <span className="block w-1 h-1 mx-2 rounded-full bg-white/40" /> 2 hours ago{" "}
            </p>
          </div>
        </li>
      );
    default:
      return null;
  }
}

export default memo(Contribution);
