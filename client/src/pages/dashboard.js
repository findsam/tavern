import { useContext, useMemo } from "react";
import { Context } from "../store/context";
import Feed from "../components/feed";
import Topbar from "../components/topbar";
import Navbar from "../components/navbar";
import Loading from "../components/loading";
import useAuth from "../hooks/useAuth";

export default () => {
  if (!useAuth()) return null;
  const { state, dispatch } = useContext(Context);
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="flex w-[calc(100%-62px)] ml-auto px-2.5 md:px-5  pb-12 mt-[62px] pt-2.5 md:pt-5 items-center justify-center gap-5 h-full">
        <div className="flex-1 w-full p-5 rounded-lg text-white/70"></div>
        <div className="flex-1 w-full p-5 rounded-lg text-white/70"></div>
      </div>
    </>
  );
};
