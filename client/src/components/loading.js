import { memo } from "react";

export default memo(() => {
  const randomHeight = () => Math.floor(Math.random() * (535 - 300)) + 300;
  return (
    <div
      className="relative flex-1 w-full h-full max-w-full mx-auto my-0 overflow-hidden border rounded-lg drop-shadow-md bg-main-800 border-main-border"
      style={{ height: randomHeight() }}
    />
  );
});
