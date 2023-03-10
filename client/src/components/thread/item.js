import Image from "next/image";
import Dropdown from "./dropdown";
import { useContext, useEffect } from "react";
import { Context } from "../../store/context";
import { useRouter } from "next/router";
import { useState } from "react";
import AudioPlayer from "../audio/audioPlayer";
import { fetchIndividualThread } from "../../static/api";
import Contribution from "./contribution";
import Heart from "../heart";
import { Dropdown as Navdrop } from "../dropdown";
import { AiOutlineShareAlt, AiOutlineInstagram } from "react-icons/ai";
import { RxTwitterLogo } from "react-icons/rx";
import { TbCopy } from "react-icons/tb";

export default () => {
  const router = useRouter();
  const [post, setPost] = useState(null);
  const { state } = useContext(Context);

  useEffect(() => {
    (async () => await fetchIndividualThread(setPost, +router.query.slug, router))();
  }, []);
  const liked = state.favourites.find((_) => _.id == post.id);
  return (
    post && (
      <>
        <div className="fixed top-0 bottom-0 left-0 right-0 w-screen h-screen bg-image blur opacity-5 after:absolute after:content-[''] after:left-0 after:right-0 after:bottom-0 after:top-0 after:bg-main-900/30">
          <Image
            src={`/${post?.image}`}
            className="object-cover !w-full !relative !h-['unset'] block  max-w-full object-top border rounded-xl  bg-main-800 border-main-border"
            fill
            quality={50}
          />
        </div>
        <div className="relative flex flex-col items-start gap-5 md:flex-row">
          <div className="flex flex-col max-w-xl gap-5">
            <Image
              src={`/${post?.image}`}
              className="object-contain !w-full !relative !h-['unset'] block  max-w-full align-middle border rounded-lg  bg-main-800 border-main-border"
              fill
              quality={100}
            />

            <Dropdown
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
            <div className="flex gap-2 items-star ">
              <Heart />
              {/* {liked ? (
                <button
                  onClick={(e) => {
                    dispatch({
                      type: "SET_FAVOURITES",
                      payload: state.favourites.filter((_) => _.id !== post?.id),
                    });
                  }}
                  className={`border-transparent text-main-text/70 flex relative border rounded-md hover:cursor-pointer group z-50`}
                >
                  <span className="relative text-xl">
                    <RiHeartFill className="text-red-500" />
                    <span className="absolute z-50 px-2 py-1 text-xs duration-150 -translate-x-1/2 rounded-md opacity-0 pointer-events-none select-none text-main-text -bottom-5 left-1/2 whitespace-nowrap bg-main-800 group-hover:opacity-100 group-hover:-bottom-9">
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
                  className={`border-transparent text-main-text/70 flex relative border rounded-md hover:cursor-pointer group duration-500 `}
                >
                  <span className="relative text-xl">
                    <RiHeartLine />
                    <span className="absolute z-50 px-2 py-1 text-xs duration-150 -translate-x-1/2 rounded-md opacity-0 pointer-events-none select-none text-main-text -bottom-5 left-1/2 whitespace-nowrap bg-main-800 group-hover:opacity-100 group-hover:-bottom-9">
                      Like
                    </span>
                  </span>
                </button>
              )} */}

              {/* <Copy /> */}

              <Share />
            </div>

            <h1 className="text-2xl font-medium leading-none text-wide">Illidan Stormrage</h1>

            <p className="max-w-md text-sm font-normal leading-5 text-main-text/70">
              A great Demon Gate defended the Skull as Illidan and his forces had to fight mightily to gain
              access to the artifact. Driven by necessity and influenced by the belief that with the increased
              power.
            </p>

            <div className="mt-1 rounded-md max-w-max">
              <ul className="relative flex flex-col w-full gap-5">
                <Contribution type="creator" />
                <Contribution type="image" />
                <Contribution type="sound" />
                <Contribution type="text" />
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  );
};

const Share = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="relative flex">
        <button onClick={() => setOpen((p) => !p)} className="text-xl text-main-text/70">
          <AiOutlineShareAlt />
        </button>
        <Navdrop show={open} setShow={setOpen}>
          <>
            <ul className="text-sm  text-main-text/70   p-1.5 gap-1.5 flex justify-between">
              <li className="leading-5 duration-150 hover:cursor-pointer hover:text-main-text px-0.5 list-none flex text-main-text/70 text-sm items-center gap-1.5">
                <RxTwitterLogo className="text-xl" />
              </li>
              <li className="leading-5 duration-150 hover:cursor-pointer hover:text-main-text px-0.5 list-none flex text-main-text/70 text-sm items-center gap-1.5">
                <AiOutlineInstagram className="text-xl" />{" "}
              </li>

              <li className="leading-5 duration-150 hover:cursor-pointer hover:text-main-text px-0.5 list-none flex text-main-text/70 text-sm items-center gap-1.5">
                <TbCopy className="text-xl" />{" "}
              </li>
            </ul>
          </>
        </Navdrop>
      </div>
    </>
  );
};

// const Copy = () => {
//   const [clicked, setClicked] = useState(false);
//   const [show, setShow] = useState(false);
//   const clickable = useRef(null);

//   const onClickHandler = async () => {
//     setClicked(true);
//     await navigator.clipboard.writeText(location.href);
//     await sleep(2950);
//     setShow(false);
//     await sleep(150);
//     setClicked(false);
//   };

//   const handleMouse = async ({ type }) =>
//     type === "mouseenter" ? setShow(true) : !clicked && setShow(false);

//   return (
//     <li
//       onMouseEnter={handleMouse}
//       onMouseLeave={handleMouse}
//       ref={clickable}
//       onClick={!clicked ? onClickHandler : null}
//       className={`border-transparent text-main-text/70 flex relative border rounded-md hover:cursor-pointer`}
//     >
//       <span className="relative text-xl">
//         <TbCopy />
//         <span
//           className={`absolute z-50 px-2 py-1 text-xs  text-main-text duration-150 -translate-x-1/2 rounded-md opacity-0 pointer-events-none left-1/2 whitespace-nowrap
//           ${show ? "-bottom-9 opacity-100" : "-bottom-5 opacity-0"}
//          bg-main-800 overflow-hidden
//          `}
//         >
//           <span
//             className={`
//             ${
//               clicked
//                 ? "-left-full visible duration-[3s]"
//                 : "left-0 invisible duration-0"
//             }
//             absolute content-[''] top-0 h-0.5 bg-green-400 transition-all w-full`}
//           />

//           {!clicked ? "Copy URL" : "Copied"}
//         </span>
//       </span>
//     </li>
//   );
// };
