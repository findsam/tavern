import { useState } from "react";

export default ({ text }) => {
  const [grow, setGrow] = useState(false);

  return (
    <div className="w-full duration-300 border rounded-lg border-main-border bg-main-800">
      <div className="relative p-5">
        <p className="text-xs tracking-wide text-white/70">
          {grow ? text : text.slice(0, 500)}
        </p>
        {text.length > 800 && (
          <span className="relative flex items-center w-full gap-2 pt-5 text-xs tracking-wide text-center">
            <span className="h-[1px] block flex-1 bg-main-border" />
            <button
              className="duration-150 hover:cursor-pointer opacity-70 hover:opacity-100"
              onClick={() => setGrow((prev) => !prev)}
            >
              {!grow ? "Read more..." : "Read less..."}
            </button>
            <span className="h-[1px] block flex-1 bg-main-border" />
          </span>
        )}
      </div>
    </div>
  );
};
