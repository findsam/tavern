import React from "react";
import Wrap from "../components/wrap";
import { SiDiscord } from "react-icons/si";
import { useRef, useEffect } from "react";
import { getDiscordURL } from "../static/util";

export default () => {
  return (
    <div className="flex flex-col items-center justify-center pt-20">
      <header className="flex items-center gap-0.5">
        <div className="flex items-center py-0.5 mb-auto max-h-max">
          <div className="flex items-center justify-center -space-x-3">
            <span className="block w-6 h-6 border-2 rounded-full border-main-900 bg-main-300" />
            <span className="block w-8 h-8 border-4 rounded-full border-main-900 bg-main-500" />
          </div>
        </div>
        <h1>Tavern</h1>
      </header>

      <section className="flex gap-5">
        <div className="flex-1">
          <h1>Tavern Authorization</h1>
        </div>

        <div className="flex-1">
          <h1>Tavern Authorization</h1>
        </div>
      </section>
    </div>
  );
};
