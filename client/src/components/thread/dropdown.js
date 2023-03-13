import { useState } from "react";

export default function Dropdown({ text }) {
  const [grow, setGrow] = useState(false);

  <p className="inline-flex items-center text-xs text-left text-main-text/40 ">
    <a className="inline text-ellipsis">Synapois#1983</a>
    <span className="block w-1 h-1 mx-2 rounded-full bg-white/40" /> 2 hours ago{" "}
  </p>;
  return (
    <div className="w-full duration-300 border rounded-lg border-main-border bg-main-800">
      <div className="relative p-5">
        <p className="text-sm font-normal leading-5 text-main-text/70">{grow ? text : text.slice(0, 300)}</p>
        {text.length > 800 && (
          <span className="relative flex items-center w-full gap-2 pt-5 text-xs text-center">
            <span className="h-[1px] block flex-1 bg-main-border" />
            <button
              className="duration-150 hover:cursor-pointer text-main-text/40 hover:text-main-text"
              onClick={() => setGrow((prev) => !prev)}
            >
              {!grow ? "More" : "Less"}
            </button>
            <span className="h-[1px] block flex-1 bg-main-border" />
          </span>
        )}
      </div>
    </div>
  );
}
