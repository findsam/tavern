import React, { useState } from "react";
import { RiHeartLine, RiHeartFill } from "react-icons/ri";

const Heart = () => {
  const [click, setClick] = useState(false);

  const handleClick = async () => {
    setClick(true);
  };

  return (
    <div
      onClick={() => handleClick()}
      className={`rounded-full ${click && "animate-[heart_5s_linear]"}`}
    >
      <RiHeartLine />
      {/* <RiHeartFill /> */}
    </div>
  );
};

export default Heart;
