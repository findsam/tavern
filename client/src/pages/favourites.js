import { useContext } from "react";
import { Context } from "../store/context";
import Feed from "../components/feed";
import Topbar from "../components/topbar";
import Navbar from "../components/navbar";
import Image from "next/image";

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
        <div className="flex flex-col gap-4 w-[calc(100%-62px)] ml-auto px-2.5 md:px-5 pb-12 mt-[62px] pt-6 md:pt-12 relative items-center justify-center text-center">
          <Image
            quality={100}
            loading="eager"
            priority={true}
            height={50}
            width={200}
            className="object-cover "
            alt={"displaying duck"}
            src={`/1.png`}
          />
          <p className="max-w-sm text-sm leading-5 text-white/70">
            We couldn't find any liked threads... Don't let good threads slip away!
            Favourite threads to find them easily in the future. By favouriting
            threads you are directly supporting the creator and contributors to
            continue creating the greatest stories on Tavern.gg
          </p>
        </div>
      )}
    </>
  );
};
