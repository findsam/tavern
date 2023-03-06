import React, { useState } from "react";

const Heart = () => {
  const [click, setClick] = useState(false);

  const handleClick = async () => {
    console.log("hi");
    setClick(true);
  };

  return (
    <div
      onClick={() => handleClick()}
      className={`block w-5 h-5 bg-white rounded-full ${click && "animate-[heart]"}`}
    ></div>
  );
};

export default Heart;
