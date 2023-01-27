import Image from "next/image";
import { AiOutlineSound, AiOutlineMessage, AiOutlinePicture } from "react-icons/ai";
export default (props) => {
  switch (props.type) {
    case "sound":
      return (
        <li className="flex gap-3.5 relative items-center">
          <span className="absolute -left-[2.9rem] rounded-full border border-yellow-900 h-[28px] w-[28px] text-md flex items-center justify-center text-yellow-300 bg-yellow-900">
            <AiOutlineSound />
          </span>
          <div className="shrink-0">
            <Image
              className="border rounded-full border-main-border bg-main-800 shrink-0"
              height="28"
              width="28"
              src={`https://cdn.discordapp.com/avatars/1012899721477619862/0ea94e9083dea503c92e8f562060d81d.webp`}
              alt="discord user profile picture generated by api"
            />
          </div>

          <p className="inline text-xs tracking-wide text-left text-white/70">
            <span className="text-white">Jay Pacheco</span> contributed sound to this
            thread <a className="inline text-white text-ellipsis"> soundclip.wav</a>
          </p>
        </li>
      );
    case "text":
      return (
        <li className="flex gap-3.5 relative items-center">
          <span className="absolute -left-[2.9rem] rounded-full border border-sky-900 h-[28px] w-[28px] text-md flex items-center justify-center text-sky-300 bg-sky-900">
            <AiOutlineMessage />
          </span>
          <div className="shrink-0">
            <Image
              className="border rounded-full border-main-border bg-main-800 shrink-0"
              height="28"
              width="28"
              src={`https://cdn.discordapp.com/avatars/1012899721477619862/0ea94e9083dea503c92e8f562060d81d.webp`}
              alt="discord user profile picture generated by api"
            />
          </div>
          <p className="inline text-xs tracking-wide text-left text-white/70">
            <span className="text-white">Jay Pacheco</span> contributed lore to this
            thread.
          </p>
        </li>
      );
    case "image":
      return (
        <li className="flex gap-3.5 relative items-center">
          <span className="absolute -left-[2.9rem] rounded-full border border-lime-900 h-[28px] w-[28px] text-md flex items-center justify-center text-lime-300 bg-lime-900">
            <AiOutlinePicture />
          </span>
          <div className="shrink-0">
            <Image
              className="border rounded-full border-main-border bg-main-800 shrink-0"
              height="28"
              width="28"
              src={`https://cdn.discordapp.com/avatars/1012899721477619862/0ea94e9083dea503c92e8f562060d81d.webp`}
              alt="discord user profile picture generated by api"
            />
          </div>
          <p className="inline text-xs tracking-wide text-left text-white/70">
            <span className="text-white">Jay Pacheco</span> contributed visuals to
            this thread
            <a className="inline text-white text-ellipsis"> image.png</a>
          </p>
        </li>
      );
    default:
      return null;
  }
};
