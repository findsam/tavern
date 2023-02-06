import { memo, useEffect } from "react";

export default memo(() => {
  const randomHeight = () => Math.floor(Math.random() * (485 - 220)) + 220;
  const randomNumber = () => Math.floor(Math.random() * 1000);

  const divclass = `relative flex-1 w-full h-full max-w-full mx-auto my-0 overflow-hidden border rounded-lg drop-shadow-md bg-main-800 border-main-border  min-h-[100px]`;
  const liclass = `relative  overflow-hidden px-2 py-2.5 text-[10px] tracking-wide text-white/70 duration-150 rounded-full bg-main-800 flex-1 w-full`;

  return (
    <div className="grid w-full gap-5">
      {[...Array(3)].map((_) => (
        <div className="grid" key={Math.random()}>
          <div
            className={divclass}
            style={{
              height: randomHeight(),
            }}
          >
            <span
              className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite_0.5s] bg-gradient-to-r from-main-800 via-main-500/5 to-main-800"
              style={{ animationDelay: `${randomNumber()}ms` }}
            />
          </div>
          <ul className="flex gap-1 mt-1.5 font-normal leading-none tracking-wide w-1/2">
            <li className={liclass}>
              <span
                className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite_0.5s] bg-gradient-to-r from-main-800 via-main-500/5 to-main-800"
                style={{ animationDelay: `${randomNumber()}ms` }}
              />
            </li>
            <li className={liclass}>
              <span
                className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite_0.5s] bg-gradient-to-r from-main-800 via-main-500/5 to-main-800"
                style={{ animationDelay: `${randomNumber()}ms` }}
              />
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
});
