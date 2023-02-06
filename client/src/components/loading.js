import { memo } from "react";

export default memo(() => {
  const randomHeight = () => Math.floor(Math.random() * (535 - 300)) + 300;
  const randomNumber = () => Math.floor(Math.random() * 5);

  return (
    <div
      className="relative flex-1 w-full h-full max-w-full mx-auto my-0 overflow-hidden border rounded-lg drop-shadow-md bg-main-800 border-main-border animate-pulse min-h-[100px]"
      style={{
        height: randomHeight(),
        animationDelay: `${randomNumber() * 5}ms`,
        animationFillMode: "backwards",
      }}
    />
  );
});
