import Image from "next/image";
import { BsBell } from "react-icons/bs";
import ThreadContribution from "./threadContribution";
import { MdOutlineReplay, MdOutlineLoop } from "react-icons/md";
import { IoPlayOutline } from "react-icons/io5";
import ThreadDropdown from "./threadDropdown";
import { useContext } from "react";
import { Context } from "../../store/context";
import { useRouter } from "next/router";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";
import { dummyData } from "../../static/util";
import { useState, useRef } from "react";
import { TbCopy } from "react-icons/tb";
import { sleep } from "../../static/util";

export default () => {
  const { state, dispatch } = useContext(Context);
  const router = useRouter();
  const post = dummyData.find((_) => _.id === +router.query.slug);
  !post && router.push("/");

  const liked = state.favourites.find((_) => _.id == post.id);

  return (
    post && (
      <>
        <div className="fixed top-0 bottom-0 left-0 right-0 w-screen h-screen bg-image blur opacity-5 after:absolute after:content-[''] after:left-0 after:right-0 after:bottom-0 after:top-0 after:bg-main-900/30">
          <img
            src={`/${post?.image}`}
            className="object-cover object-top w-full h-full"
          />
        </div>
        <div className="relative flex items-start gap-5 ">
          <div className="max-w-[544px] flex flex-col gap-5">
            <img
              src={`/${post?.image}`}
              className="block h-auto max-w-full align-middle border rounded-xl drop-shadow-md bg-main-800 border-main-border "
            />

            <ThreadDropdown
              text="When the world of the Orcs of Draenor is being destroyed by the evil fel
          magic that uses life-force, the powerful warlock Gul'dan creates a portal
          to the world of Azeroth and forms the Horde with members of the Orc clans.
          He also captures many prisoners to keep the portal open. The king of
          Azeroth, Llane Wrynn and his brother-in-law, Anduin Lothar are informed by
          the apprentice of magician Khadgar that he has found fel magic in dead
          bodies and the king decides to summon the Guardian of Tirisfal, Medivh, to
          protect his kingdom. Lothar and Khadgar head to Kharazhan to meet Medivh
          and an ominous shadow points a book out to Khadgar, who takes it and hides.
          Anduin, Khadgar and Medivh and a group of soldiers are attacked by Orcs and
          they capture the slave Garona, who is released by King Llane, and she grows
          them the location of the portal. Garona is contacted by the Orc chief of a
          clan Durotan that wants to meet King Llane to stop the fel magic. Meanwhile
          Khadgar learns that the gate was opened with the help of someone in
          Azeroth. Shall King Llane trust Garona and Durotan, who might be the
          traitor..."
            />
            <div className="flex flex-col gap-1">
              <span className="flex items-center justify-center gap-3 ">
                <span className="block text-xs tracking-wide text-left text-white/70">
                  0:10
                </span>
                <span
                  className="relative flex w-full h-1 rounded-full bg-main-border 
                before:absolute before:content-[''] before:my-auto before:left-0 before:right-0 before:bottom-0 before:top-0 before:w-1/4 before:h-full before:bg-white/70 before:rounded-full
              after:absolute after:content-[''] after:my-auto after:left-1/4 after:right-0 after:bottom-0 after:top-0 after:w-3.5 after:h-3.5 after:bg-white/70 after:rounded-full z-10"
                />
                <span className="block text-xs tracking-wide text-left text-white/70">
                  1:10
                </span>
              </span>
              <div className="flex items-center justify-center gap-2">
                <span
                  className={`border-transparent text-white/70 flex relative border rounded-md hover:cursor-pointer group`}
                >
                  <span className="relative flex items-center justify-center rounded-full text-white/70">
                    <MdOutlineReplay className="text-lg text-white/70" />
                    <span className="absolute z-50 px-2 py-1 text-xs tracking-wide text-white duration-150 -translate-x-1/2 rounded-md opacity-0 pointer-events-none -bottom-5 left-1/2 whitespace-nowrap bg-main-800 group-hover:opacity-100 group-hover:-bottom-9">
                      Replay
                    </span>
                  </span>
                </span>

                <span
                  className={`border-transparent text-white/70 flex relative border rounded-md hover:cursor-pointer group`}
                >
                  <span className="rounded-full border border-main-border text-white/70 bg-main-800 h-[38px] w-[38px] text-xl flex items-center justify-center relative">
                    <IoPlayOutline className="ml-0.5" />
                    <span className="absolute z-50 px-2 py-1 text-xs tracking-wide text-white duration-150 -translate-x-1/2 rounded-md opacity-0 pointer-events-none -bottom-5 left-1/2 whitespace-nowrap bg-main-800 group-hover:opacity-100 group-hover:-bottom-9">
                      Play
                    </span>
                  </span>
                </span>

                <span
                  className={`border-transparent text-white/70 flex relative border rounded-md hover:cursor-pointer group`}
                >
                  <span className="relative flex items-center justify-center rounded-full text-white/70">
                    <MdOutlineLoop className="text-lg text-white/70" />
                    <span className="absolute z-50 px-2 py-1 text-xs tracking-wide text-white duration-150 -translate-x-1/2 rounded-md opacity-0 pointer-events-none -bottom-5 left-1/2 whitespace-nowrap bg-main-800 group-hover:opacity-100 group-hover:-bottom-9">
                      Loop
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="max-w-[550px] w-full flex flex-col gap-4 sticky max-h-max top-[84px] z-30">
            <div className="flex gap-2 text-2xl">
              {liked ? (
                <li
                  onClick={() =>
                    dispatch({
                      type: "SET_FAVOURITES",
                      payload: state.favourites.filter((_) => _.id !== post?.id),
                    })
                  }
                  className={`border-transparent text-white/70 flex relative border rounded-md hover:cursor-pointer group z-50`}
                >
                  <span className="text-[1.3rem] relative">
                    <RiHeartFill className="text-red-500" />
                    <span className="absolute z-50 px-2 py-1 text-xs tracking-wide text-white duration-150 -translate-x-1/2 rounded-md opacity-0 pointer-events-none -bottom-5 left-1/2 whitespace-nowrap bg-main-800 group-hover:opacity-100 group-hover:-bottom-9">
                      Unlike
                    </span>
                  </span>
                </li>
              ) : (
                <li
                  onClick={() =>
                    dispatch({
                      type: "SET_FAVOURITES",
                      payload: [...state.favourites, post],
                    })
                  }
                  className={`border-transparent text-white/70 flex relative border rounded-md hover:cursor-pointer group`}
                >
                  <span className="text-[1.3rem] relative">
                    <RiHeartLine />
                    <span className="absolute z-50 px-2 py-1 text-xs tracking-wide text-white duration-150 -translate-x-1/2 rounded-md opacity-0 pointer-events-none -bottom-5 left-1/2 whitespace-nowrap bg-main-800 group-hover:opacity-100 group-hover:-bottom-9">
                      Like
                    </span>
                  </span>
                </li>
              )}

              <Copy />
            </div>

            <h1 className="text-2xl font-medium leading-none text-wide">
              Warcraft S6 Rogue
            </h1>

            <p className="max-w-sm text-sm leading-5 text-white/70">
              Female blood-elf rogue wearing Naxx 10 man gear from the Wrath of the
              Lich King: World of Warcraft by
            </p>

            <ul className="flex gap-3 font-normal leading-none tracking-wide">
              <li className="px-2 py-1 text-xs tracking-wide duration-150 rounded-full text-white/70 bg-main-800">
                #photoshop
              </li>
              <li className="px-2 py-1 text-xs tracking-wide duration-150 rounded-full text-white/70 bg-main-800">
                #warcraft
              </li>
              <li className="px-2 py-1 text-xs tracking-wide duration-150 rounded-full text-white/70 bg-main-800">
                #offline
              </li>
            </ul>
            <div className="flex items-start w-full gap-3 shrink-0">
              <Image
                className="rounded-full ring-1 ring-main-border p-0.5 strink-0"
                height="38"
                width="38"
                src={`https://cdn.discordapp.com/avatars/1012899721477619862/0ea94e9083dea503c92e8f562060d81d.webp`}
                alt="discord user profile picture generated by api"
              />
              <span className="flex flex-col text-sm gap-0.5  strink-0">
                <a className="mt-auto">Finnigan Sham</a>
                <p className="block mb-0.5 text-xs tracking-wide text-left text-white/70">
                  1k Followers
                </p>
              </span>
            </div>

            <p className="text-sm leading-5 text-white/70">Contribution Timeline</p>
            <div className="px-4  rounded-md max-w-max mt-0.5 ">
              <ul className="flex flex-col gap-5 pl-8 border-l border-main-border">
                <li className="relative">
                  <span className="absolute -left-[2.9rem]  rounded-full border border-main-border text-white/70 bg-main-800 h-[28px] w-[28px] text-sm flex items-center justify-center">
                    <BsBell />
                  </span>

                  <span className="flex items-center gap-3 shink-0">
                    <Image
                      className="border rounded-full border-main-border bg-main-800 shrink-0"
                      height="28"
                      width="28"
                      src={`https://cdn.discordapp.com/avatars/1012899721477619862/0ea94e9083dea503c92e8f562060d81d.webp`}
                      alt="discord user profile picture generated by api"
                    />
                    <p className="text-xs leading-4 tracking-wide align-middle text-white/70">
                      <span className="text-white/100">John Finnigan</span> created
                      this thread titled{" "}
                      <span className="text-white/100">LoTR Theory</span>{" "}
                    </p>
                  </span>
                </li>
                <ThreadContribution type="image" />
                <ThreadContribution type="sound" />
                <ThreadContribution type="text" />
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  );
};

const Copy = () => {
  const [clicked, setClicked] = useState(false);
  const [show, setShow] = useState(false);
  const clickable = useRef(null);

  const onClickHandler = async () => {
    setClicked(true);
    await navigator.clipboard.writeText(location.href);
    await sleep(2950);
    setShow(false);
    await sleep(150);
    setClicked(false);
  };

  const handleMouse = async ({ type }) =>
    type === "mouseenter" ? setShow(true) : !clicked && setShow(false);

  return (
    <li
      onMouseEnter={(e) => handleMouse(e)}
      onMouseLeave={(e) => handleMouse(e)}
      ref={clickable}
      onClick={!clicked ? onClickHandler : null}
      className={`border-transparent text-white/70 flex relative border rounded-md hover:cursor-pointer`}
    >
      <span className="text-[1.3rem] relative">
        <TbCopy />
        <span
          className={`absolute z-50 px-2 py-1 text-xs tracking-wide text-white duration-150 -translate-x-1/2 rounded-md opacity-0 pointer-events-none left-1/2 whitespace-nowrap 
          ${show ? "-bottom-9 opacity-100" : "-bottom-5 opacity-0"}
         bg-main-800
         
         overflow-hidden
         `}
        >
          <span
            className={`
            ${
              clicked
                ? "-left-full visible duration-[3s]"
                : "left-0 invisible duration-0"
            }
            absolute content-[''] top-0 h-0.5 bg-white/70  transition-all w-full`}
          />

          {!clicked ? "Copy" : "Copied"}
        </span>
      </span>
    </li>
  );
};
