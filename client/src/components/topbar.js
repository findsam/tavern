import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import Modal from "./modal";
import { useState } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import NotificationsContainer from "./notifications/notificationsContainer";
import { useContext } from "react";
import { Context } from "../store/context";
import Slider from "./slider";
import { useRouter } from "next/router";
import Dropdown from "./dropdown";
import { AiOutlineStar, AiOutlineSetting, AiOutlineLogout } from "react-icons/ai";
import { handleLogout } from "../static/api";
export default () => {
  const [show, setShow] = useState(false);
  const [upload, setUpload] = useState(false);
  const { state, dispatch } = useContext(Context);
  const { pathname } = useRouter();
  const [profile, setProfile] = useState(false);
  const [notiications, setNotifications] = useState(false);
  const router = useRouter();

  return (
    <>
      <Modal show={upload} setShow={setUpload}>
        <div className="block w-full min-w-full p-5">
          <p className="">Title:</p>
          <p className="text-xs tracking-wide opacity-70">
            Provide a title for your artwork.
          </p>
          <form className="mb-3.5 mt-1.5 flex items-center justify-center w-full px-2 py-2 border rounded-md bg-main-700 border-main-border max-h-[38px] min-h-[38px]">
            <input className="w-full col-span-2 text-xs font-medium bg-transparent focus:outline-none text-white/70 placeholder:text-white/70 placeholder:text-sm"></input>
          </form>

          <p className="">Upload and attach files.</p>
          <p className="text-xs tracking-wide opacity-70">
            Provide a file to create this thread.
          </p>
          <div className="mb-2  mt-1.5 border-2 border-dashed border-main-600 min-h-[180px] rounded-lg flex items-center justify-center flex-col hover:border-main-700 hover:cursor-pointer duration-150">
            <AiOutlineFileAdd size={42} />
            <p className="mt-1.5">Click to Upload</p>
            <p className="text-xs leading-none tracking-wide opacity-70">
              Maximum file size of 10MB.
            </p>
          </div>
        </div>
        <span className="relative flex items-center w-full gap-2 text-xs tracking-wide text-center">
          <span className="h-[1px] block flex-1 bg-main-border" />
          <span className="duration-150 hover:cursor-pointer opacity-70 hover:opacity-100">
            Need a larger file size?
          </span>
          <span className="h-[1px] block flex-1 bg-main-border" />
        </span>

        <div className="">
          <div className="flex gap-5 p-5">
            <button className="flex-1 px-4 min-h-[38px] text-sm  border border-green-900 rounded-md text-green-400 bg-green-900/40 duration-150 hover:border-green-400">
              Create Thread
            </button>
          </div>
        </div>
      </Modal>
      <Dropdown show={profile} setShow={setProfile}>
        {state.user && (
          <>
            <div className="p-3.5 flex items-center gap-1.5 overflow-hidden">
              <Image
                className="rounded-full ring-1 ring-main-border p-0.5 hover:ring-white/70 duration-150 hover:cursor-pointer"
                height="38"
                width="38"
                src={`https://cdn.discordapp.com/avatars/${state?.user?.me?.id}/${state.user.me.avatar}.png`}
                alt="discord user profile picture generated by api"
              />
              <span className="block text-sm text-left">
                <a>
                  {state.user.me.username}#{state.user.me.discriminator}
                </a>
                <p className="text-xs tracking-wide text-left opacity-70">
                  {state.user.me.email}
                </p>
              </span>
              <span className="block px-2.5 py-0.5 ml-auto text-sm text-green-400 rounded-full bg-green-900/40">
                Pro
              </span>
            </div>
            <ul className="text-sm border-t text-white/70 border-main-border  py-2.5 gap-2.5 grid">
              <li className="leading-5 duration-150 hover:cursor-pointer hover:text-white px-3.5 list-none flex text-white/70 text-sm items-center gap-1.5">
                <AiOutlineSetting className="text-[1.3rem]" />{" "}
                <span>Account Settings</span>
              </li>
              <li className="leading-5 duration-150 hover:cursor-pointer hover:text-white px-3.5 list-none flex text-white/70 text-sm items-center gap-1.5">
                <AiOutlineStar className="text-[1.3rem]" />{" "}
                <span>Upgrade Settings</span>
              </li>
            </ul>

            <button
              className="leading-5 duration-150 hover:cursor-pointer hover:text-white px-3.5 list-none flex text-white/70 text-sm items-center gap-1.5 py-2.5 border-t border-main-border w-full"
              onClick={() => handleLogout(dispatch, router)}
            >
              <AiOutlineLogout className="text-[1.25rem]" /> <span>Log out</span>
            </button>
          </>
        )}
      </Dropdown>

      <div className="fixed flex items-center border-b border-main-border bg-main-800 w-[calc(100%-62px)] right-0 z-10 top-0 min-h-[62px] max-h-[62px] px-2.5 md:px-5 py-5 gap-2.5 md:gap-5">
        <div className=" flex-1 flex w-full gap-2.5 md:gap-5">
          {/* <button
            className="px-6 min-h-[38px] max-h-[38px] whitespace-nowrap text-sm text-white/70 border rounded-md bg-main-700 border-main-border  hover:border-white/70 duration-150"
            onClick={() => setUpload(true)}
          >
            Create Thread
          </button> */}
          <form className="flex items-center justify-center w-[200px] md:w-[350px] pl-4 pr-3 py-2 border rounded-md bg-main-700 border-main-border max-h-[38px] min-h-[38px]">
            <input
              className="w-full text-sm bg-transparent focus:outline-none text-white/70 placeholder:text-white/70 placeholder:text-sm placeholder:font-normal"
              placeholder="Looking to explore..."
            />
            <button className="pl-2 shrink-0">
              <AiOutlineSearch className="text-xl opacity-70" />
            </button>
          </form>
          {pathname.split("").length <= 1 && <Slider />}
        </div>

        <div className="ml-0 flex-0 md:ml-auto">
          {state.user !== null && (
            <aside className="flex flex-row-reverse items-center gap-2.5 ml-auto md:gap-2.5">
              <button onClick={() => setProfile((_) => !_)}>
                <Image
                  className="rounded-full ring-1 ring-main-border p-0.5 hover:ring-white/70 duration-150 hover:cursor-pointer"
                  height="38"
                  width="38"
                  src={`https://cdn.discordapp.com/avatars/${state.user.me.id}/${state.user.me.avatar}.png`}
                  alt="discord user profile picture generated by api"
                />
              </button>
              <button
                onClick={() => setShow(true)}
                className="h-[38px] w-[38px] bg-main-700 border-main-600 hover:border-white/70 duration-150 border rounded-full flex items-center justify-center relative shrink-0"
              >
                <span className="absolute top-0 right-0 z-10 block w-3 h-3 bg-green-400 border-2 rounded-full border-main-800" />
                <BsBell className="text-xl shrink-0 opacity-70" />
              </button>
              {/* <span className="hidden text-sm text-right md:block ">
                <a>
                  {state.user.me.username}#{state.user.me.discriminator}
                </a>
                <p className="text-xs tracking-wide text-left opacity-70">
                  {state.user.me.email}
                </p>
              </span> */}
            </aside>
          )}
        </div>
      </div>
    </>
  );
};
