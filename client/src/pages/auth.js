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
      container?.current?.childNodes[0]?.classList?.remove("-translate-y-8");
    })();
  }, [container]);

  return (
    <div className="flex items-center justify-center pt-20" ref={container}>
      <div className="flex flex-col justify-between p-5 duration-300 -translate-y-8 border rounded-lg shadow-md opacity-0 border-main-border bg-main-800">
        <div className="min-w-[400px] max-w-[400px]">
          <div className="flex items-center py-0.5 mb-auto max-h-max">
            <div className="flex items-center justify-center -space-x-3">
              <span
                className="block w-6 h-6 border-2 rounded-full border-main-800 bg-main-300"
                src="/p.jpeg"
              />
              <span
                className="block w-8 h-8 border-4 rounded-full border-main-800 bg-main-500"
                src="/p.jpeg"
              />
            </div>
          </div>
          <h1 className="">Welcome to Tavern!</h1>
          <p className="mt-2 text-xs tracking-wide text-white/70">
            Tavern is an independant non-algorithm art discovery and collaberation
            tool. We are a community based storytelling and creative platform for all
            art forms. We aim to turn art into a meaningful stories with the help of
            fans, friend and other creators.
          </p>
        </div>
        <div className="flex flex-col gap-5 min-w-[400px]  max-w-[400px]">
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
          <a
            href={getDiscordURL()}
            className="flex-1 px-4 min-h-[38px] gap-2 text-sm relative text-white/70 border rounded-md bg-main-700 border-main-border  hover:bg-main-900 hover:text-white duration-150 flex items-center justify-center"
          >
            Sign-in with Discord
            <SiDiscord size={18} />
          </a>
          <span className="relative flex items-center w-full gap-2 text-xs tracking-wide text-center opacity-70">
            <span className="h-[1px] block flex-1 bg-main-border"></span>
            <span>Why Discord?</span>
            <span className="h-[1px] block flex-1 bg-main-border"></span>
          </span>
          <button className="flex-1 px-4 min-h-[38px] text-sm  border border-main-border rounded-md text-white/70">
            See developer Q&A...
          </button>
        </div>
      </div>
    </div>
  );
};
