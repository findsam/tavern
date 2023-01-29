import Image from "next/image";
import { BsBell, BsPlus } from "react-icons/bs";
import ThreadContribution from "./threadContribution";
import { MdOutlineReplay, MdOutlineLoop } from "react-icons/md";
import { IoPlayOutline } from "react-icons/io5";

export default () => {
  return (
    <>
      <div className="fixed top-0 bottom-0 left-0 right-0 w-screen h-screen bg-image blur opacity-5 after:absolute after:content-[''] after:left-0 after:right-0 after:bottom-0 after:top-0 after:bg-main-900/30">
        <img src="/3.jpg" className="object-cover object-top w-full h-full" />
      </div>
      <div className="relative flex items-start gap-5">
        <div className="overflow-hidden max-w-[544px] flex flex-col gap-5">
          <img
            src={"/3.jpg"}
            className="block h-auto max-w-full align-middle border rounded-xl drop-shadow-md bg-main-800 border-main-border "
          />

          <div className="duration-300 border rounded-lg  border-main-border bg-main-800 max-w-[535px] w-full">
            <div className="relative p-5">
              <p className="text-xs tracking-wide text-white/70">
                When the world of the Orcs of Draenor is being destroyed by the evil
                fel magic that uses life-force, the powerful warlock Gul'dan creates
                a portal to the world of Azeroth and forms the Horde with members of
                the Orc clans. He also captures many prisoners to keep the portal
                open. The king of Azeroth, Llane Wrynn and his brother-in-law, Anduin
                Lothar are informed by the apprentice of magician Khadgar that he has
                found fel magic in dead bodies and the king decides to summon the
                Guardian of Tirisfal, Medivh, to protect his kingdom. Lothar and
                Khadgar head to Kharazhan to meet Medivh and an ominous shadow points
                a book out to Khadgar, who takes it and hides. Anduin, Khadgar and
                Medivh and a group of soldiers are attacked by Orcs and they capture
                the slave Garona, who is released by King Llane, and she shows them
                the location of the portal. Garona is contacted by the Orc chief of a
                clan Durotan that wants to meet King Llane to stop the fel magic.
                Meanwhile Khadgar learns that the gate was opened with the help of
                someone in Azeroth. Shall King Llane trust Garona and Durotan, who
                might be the traitor...
              </p>
              <span className="relative flex items-center w-full gap-2 pt-5 text-xs tracking-wide text-center">
                <span className="h-[1px] block flex-1 bg-main-border" />
                <span className="duration-150 hover:cursor-pointer opacity-70 hover:opacity-100">
                  Read more...
                </span>
                <span className="h-[1px] block flex-1 bg-main-border" />
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="flex items-center justify-center gap-3 ">
              <span className="block text-xs tracking-wide text-left text-white/70">
                0:10
              </span>
              <span
                className="relative flex w-full h-1 rounded-full bg-main-border 
                
                before:absolute before:content-[''] before:my-auto before:left-0 before:right-0 before:bottom-0 before:top-0 before:w-3/4 before:h-full before:bg-white/70 before:rounded-full
              
              
              after:absolute after:content-[''] after:my-auto after:left-3/4 after:right-0 after:bottom-0 after:top-0 after:w-4 after:h-4 after:bg-white/70 after:rounded-full z-10"
              />
              <span className="block text-xs tracking-wide text-left text-white/70">
                1:10
              </span>
            </span>
            <div className="flex items-center justify-center gap-3">
              <MdOutlineReplay className="text-xl text-white/70" />
              <span className="rounded-full border border-main-border text-white/70 bg-main-800 h-[38px] w-[38px] text-xl flex items-center justify-center">
                <IoPlayOutline className="ml-0.5" />
              </span>
              <MdOutlineLoop className="text-xl text-white/70" />
            </div>
          </div>
        </div>

        <div className="max-w-[550px] w-full flex flex-col gap-4 sticky max-h-max top-[84px]">
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
  );
};
