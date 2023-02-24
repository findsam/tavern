import Image from "next/image";
import { BsBell } from "react-icons/bs";
import ThreadContribution from "./threadContribution";
import ThreadDropdown from "./threadDropdown";
import { useContext } from "react";
import { Context } from "../../store/context";
import { useRouter } from "next/router";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";
import { useState, useRef } from "react";
import { TbCopy } from "react-icons/tb";
import { sleep } from "../../static/util";
import AudioPlayer from "../audio/audioPlayer";

export default () => {
  const { state, dispatch } = useContext(Context);
  const router = useRouter();
  // const post = dummyData.find((_) => _.id === +router.query.slug);
  !post && router.push("/");
  const liked = state.favourites.find((_) => _.id == post.id);

  return (
    post && (
      <>
        <div className="fixed top-0 bottom-0 left-0 right-0 w-screen h-screen bg-image blur opacity-5 after:absolute after:content-[''] after:left-0 after:right-0 after:bottom-0 after:top-0 after:bg-main-900/30">
          <img
            src={`/${post?.image}`}
            className="object-cover object-top w-full h-full "
          />
        </div>
        <div className="relative flex flex-col items-start gap-5 md:flex-row">
          <div className="max-w-[544px] flex flex-col gap-5">
            <Image
              src={`/${post?.image}`}
              className="object-contain !w-full !relative !h-['unset'] block  max-w-full align-middle border rounded-xl drop-shadow-md bg-main-800 border-main-border"
              fill
              quality={100}
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
            <AudioPlayer />
          </div>
          <div className="max-w-[550px] w-full flex flex-col gap-4 sticky max-h-max top-[84px] z-30">
            <div className="flex gap-2 text-2xl">
              {liked ? (
                <button
                  onClick={(e) => {
                    dispatch({
                      type: "SET_FAVOURITES",
                      payload: state.favourites.filter((_) => _.id !== post?.id),
                    });
                  }}
                  className={`border-transparent text-white/70 flex relative border rounded-md hover:cursor-pointer group z-50`}
                >
                  <span className="text-[1.3rem] relative">
                    <RiHeartFill className="text-red-500" />
                    <span className="absolute z-50 px-2 py-1 text-xs tracking-wide text-white duration-150 -translate-x-1/2 rounded-md opacity-0 pointer-events-none select-none -bottom-5 left-1/2 whitespace-nowrap bg-main-800 group-hover:opacity-100 group-hover:-bottom-9">
                      Unlike
                    </span>
                  </span>
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    dispatch({
                      type: "SET_FAVOURITES",
                      payload: [...state.favourites, post],
                    });
                  }}
                  className={`border-transparent text-white/70 flex relative border rounded-md hover:cursor-pointer group duration-500 `}
                >
                  <span className="text-[1.3rem] relative">
                    <RiHeartLine />
                    <span className="absolute z-50 px-2 py-1 text-xs tracking-wide text-white duration-150 -translate-x-1/2 rounded-md opacity-0 pointer-events-none select-none -bottom-5 left-1/2 whitespace-nowrap bg-main-800 group-hover:opacity-100 group-hover:-bottom-9">
                      Like
                    </span>
                  </span>
                </button>
              )}

              <Copy />
            </div>

            <h1 className="text-2xl font-medium leading-none text-wide">
              The Longeye
            </h1>

            <p className="max-w-sm text-sm font-normal leading-5 text-white/70">
              Troll Hunter wearing the prestigious Rank 10 PvP gear with his raptor
              comapnion in the unforgiven snowland.
            </p>

            <ul className="flex gap-3 font-normal leading-none tracking-wide">
              <li className="px-2 py-1 text-xs tracking-wide duration-150 rounded-full text-white/70 bg-main-800">
                #photoshop
              </li>
              <li className="px-2 py-1 text-xs tracking-wide duration-150 rounded-full text-white/70 bg-main-800">
                #warcraft
              </li>
              <li className="px-2 py-1 text-xs tracking-wide duration-150 rounded-full text-white/70 bg-main-800">
                #snow
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
                <a className="mt-auto">hayes#dev</a>
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
                      <span className="text-white/100">hayes#dev</span> created this
                      thread titled{" "}
                      <span className="text-white/100">The Longeye</span>{" "}
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
         bg-main-800 overflow-hidden
         `}
        >
          <span
            className={`
            ${
              clicked
                ? "-left-full visible duration-[3s]"
                : "left-0 invisible duration-0"
            }
            absolute content-[''] top-0 h-0.5 bg-green-400 transition-all w-full`}
          />

          {!clicked ? "Copy URL" : "Copied"}
        </span>
      </span>
    </li>
  );
};
