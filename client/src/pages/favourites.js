import { useContext } from "react";
import { Context } from "../store/context";
import Feed from "../components/feed";
import Topbar from "../components/topbar";
import Link from "next/link";
import Navbar from "../components/navbar";

export default () => {
  const { state, dispatch } = useContext(Context);

  return (
    <>
      <Topbar />
      <Navbar />
      {state.favourites.length > 0 && (
        <div className="flex w-[calc(100%-62px)] ml-auto px-2.5 md:px-5  pb-12 mt-[62px] pt-2.5 md:pt-5">
          <Feed passedPosts={state.favourites} />
        </div>
      )}
      {state.favourites.length === 0 && (
        <div className="flex flex-col gap-4 w-[calc(100%-62px)] ml-auto px-2.5 md:px-5 pb-12 mt-[62px] pt-6 md:pt-12 relative items-center justify-center">
          <h1 className="text-2xl font-medium leading-none text-wide">
            A story worth a thousand words...
          </h1>

          <p className="max-w-sm text-sm leading-5 text-white/70">
            Don't let good threads slip away! Favourite threads to find them easily
            in the future. By favouriting threads you are directly supporting the
            creator and contributors to continue creating the greatest stories on
            Tavern.gg
          </p>
        </div>
      )}
    </>
  );
};
