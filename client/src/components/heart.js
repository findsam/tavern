import React, { useState } from "react";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";
import { sleep } from "../static/util";

const Heart = () => {
  const [click, setClick] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleClick = async () => {
    setClick(true);
    await sleep(125);
    liked ? setLiked(false) : setLiked(true);
    await sleep(300);
    setClick(false);
  };

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
      <span className="absolute z-50 px-2 py-1 text-xs text-white duration-150 -translate-x-1/2 rounded-md opacity-0 pointer-events-none select-none -bottom-5 left-1/2 whitespace-nowrap bg-main-800 group-hover:opacity-100 group-hover:-bottom-9">
        Unlike
      </span>
    </span>
  </button>;
  return (
    <>
      <div
        onClick={() => handleClick()}
        className={`rounded-full relative hover:cursor-pointer text-white/70 ${
          click && "animate-[heart_0.55s_cubic-bezier(.17,.67,.83,.67)]"
        } text-[1.3rem]`}
      >
        {!liked ? <RiHeartLine /> : <RiHeartFill className="text-red-600" />}

        <span
          className={`absolute my-auto top-0 bottom-1 h-full w-full  ${
            click && "rotate-45 scale-125"
          } scale-70 duration-300 `}
        >
          <span
            className={`scale-0 top-0 absolute ${
              click && "animate-[spot_0.5s] ease-[cubic-bezier(.17,.67,.83,.67)]"
            }  rounded-full h-1 w-1 block bg-[#7642F0]`}
          />
          <span
            className={`scale-0  right-0 absolute ${
              click && "animate-[spot_0.5s] ease-[cubic-bezier(.17,.67,.83,.67)]"
            }  rounded-full h-1 w-1 block bg-[#AFD27F]`}
          />
          <span
            className={`scale-0 -right-1 my-auto top-0 bottom-0 absolute ${
              click && "animate-[spot_0.5s] ease-[cubic-bezier(.17,.67,.83,.67)]"
            }  rounded-full h-1 w-1 block bg-[#DE8F4F]`}
          />
          <span
            className={`scale-0 -left-1 my-auto top-0 bottom-0 absolute ${
              click && "animate-[spot_0.5s] ease-[cubic-bezier(.17,.67,.83,.67)]"
            }  rounded-full h-1 w-1 block bg-[#D0516B]`}
          />
          <span
            className={`scale-0 bottom-0 right-0 absolute ${
              click && "animate-[spot_0.5s] ease-[cubic-bezier(.17,.67,.83,.67)]"
            }  rounded-full h-1 w-1 block bg-[#5686F2]`}
          />
          <span
            className={`scale-0 mx-auto mt-auto top-0 -bottom-1 left-0 right-0 absolute ${
              click && "animate-[spot_0.5s] ease-[cubic-bezier(.17,.67,.83,.67)]"
            }  rounded-full h-1 w-1 block bg-[#D53EF3]`}
          />
          <span
            className={`scale-0 mx-auto mb-auto -top-1 bottom-0 left-0 right-0 absolute ${
              click && "animate-[spot_0.5s] ease-[cubic-bezier(.17,.67,.83,.67)]"
            }  rounded-full h-1 w-1 block bg-[#D0516B]`}
          />
          <span
            className={`scale-0 bottom-0 absolute ${
              click && "animate-[spot_0.5s] ease-[cubic-bezier(.17,.67,.83,.67)]"
            }  rounded-full h-1 w-1 block bg-[#AFD27F]`}
          />
        </span>
      </div>
    </>
  );
};

export default Heart;
