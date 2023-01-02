import React from "react";
import Wrap from "../components/wrap";
import { SiDiscord } from "react-icons/si";
import { useRef, useEffect } from "react";
import { getDiscordURL } from "../static/util";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default () => {
  const container = useRef(null);

  useEffect(() => {
    (async () => {
      await sleep(1);
      container?.current?.childNodes[0]?.classList?.remove("opacity-0");
      container?.current?.childNodes[0]?.classList?.remove("translate-y-8");
    })();
  }, [container]);

  return (
    <div
      className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full transition-all duration-150 bg-main-900/90"
      ref={container}
    >
      <div className="duration-300 translate-y-8 border rounded-lg opacity-0 border-main-border bg-main-800 main">
        <div className="min-w-[400px] p-5 max-w-[400px]">
          <p className="">Welcome to Tavern 👋</p>
          <p className="text-xs tracking-wide opacity-70">
            Tavern is an independant non-algorithm art discovery and collaberation
            tool. We are a community based storytelling and creative platform for all
            art forms. We aim to turn art into a meaningful stories with the help of
            fans, friend and other creators.
          </p>
          <p className="mt-3 text-xs tracking-wide text-white/70">
            By loging-in you agree to our{" "}
            <a className="underline duration-150 decoration-white/40 underline-offset-2 hover:cursor-pointer hover:text-white hover:decoration-white">
              Terms of Service
            </a>{" "}
            and{" "}
            <a className="underline duration-150 decoration-white/40 underline-offset-2 hover:cursor-pointer hover:text-white hover:decoration-white">
              Privacy Policy
            </a>{" "}
            including{" "}
            <a className="underline duration-150 decoration-white/40 underline-offset-2 hover:cursor-pointer hover:text-white hover:decoration-white">
              Cookie Use
            </a>
            . If you'd like to continue the login process please login using{" "}
            <a className="underline duration-150 decoration-white/40 underline-offset-2 hover:cursor-pointer hover:text-white hover:decoration-white">
              Discord
            </a>
          </p>
        </div>

        <div className="flex gap-5 px-5 pb-5">
          <a
            href={getDiscordURL()}
            className="flex-1 px-4 min-h-[38px] gap-2 text-sm text-white/70 border rounded-md bg-main-700 border-main-border  hover:bg-main-900 hover:text-white duration-150 flex items-center justify-center"
          >
            <SiDiscord size={18} />
            Login with Discord
          </a>
        </div>
      </div>
    </div>
  );
};
