import { memo } from "react";
export default memo(() => {
  const randomHeight = () => Math.floor(Math.random() * (485 - 220)) + 220;

  const divclass = `relative flex-1 w-full h-full max-w-full mx-auto my-0 overflow-hidden border rounded-lg drop-shadow-md bg-main-800 border-main-border  min-h-[100px]`;
  const liclass = `relative  overflow-hidden px-2 py-2.5 text-[10px]  text-white/70 duration-150 rounded-full bg-main-800 flex-1 w-full`;

  return (
    <div className="grid w-full gap-5">
      {[...Array(3)].map((_, _i) => {
        return (
          <div className="grid" key={_i}>
            <div
              className={divclass}
              style={{
                height: randomHeight(),
              }}
            >
              <span className="absolute inset-0 -translate-x-full animate-[shimmer_1.55s_infinite] bg-gradient-to-r from-main-800 via-main-500/5 to-main-800" />
            </div>
            <span className="relative overflow-hidden px-2 py-1.5 mt-1.5 rounded-md text-[10px]  text-white/70 duration-150 bg-main-800 flex-1 w-full w-24">
              <span className="absolute inset-0 -translate-x-full animate-[shimmer_1.55s_infinite] bg-gradient-to-r from-main-800 via-main-500/5 to-main-800" />
            </span>
            <ul className="flex gap-1 mt-1.5 font-normal leading-none  w-3/4">
              <li className={liclass}>
                <span className="absolute inset-0 -translate-x-full animate-[shimmer_1.55s_infinite] bg-gradient-to-r from-main-800 via-main-500/5 to-main-800" />
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
});
