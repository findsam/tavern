import React, { useState } from "react";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";
import { sleep } from "../static/util";

const Heart = () => {
  const [click, setClick] = useState(false);
  const [count, setCount] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleClick = async () => {
    setClick(true);
    await sleep(125);
    setLiked(true);
  };

  return (
    <>
      <div
        onClick={() => handleClick()}
        className={`rounded-full relative hover:cursor-pointer ${
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
          {/*right middle */}
          <span
            className={`scale-0 -right-1 my-auto top-0 bottom-0 absolute ${
              click && "animate-[spot_0.5s] ease-[cubic-bezier(.17,.67,.83,.67)]"
            }  rounded-full h-1 w-1 block bg-[#DE8F4F]`}
          />
          {/*left middle */}
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
          {/*bottom middle */}
          <span
            className={`scale-0 mx-auto mt-auto top-0 -bottom-1 left-0 right-0 absolute ${
              click && "animate-[spot_0.5s] ease-[cubic-bezier(.17,.67,.83,.67)]"
            }  rounded-full h-1 w-1 block bg-[#D53EF3]`}
          />
          {/*top middle */}
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
