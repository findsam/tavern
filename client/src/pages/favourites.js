import { useContext } from "react";
import { Context } from "../store/context";
import Feed from "../components/feed";
import Topbar from "../components/topbar";
import Navbar from "../components/navbar";

export default () => {
  const { state, dispatch } = useContext(Context);

  return (
    <>
      <Topbar />
      <Navbar />
      <div className="flex w-[calc(100%-62px)] ml-auto px-2.5 md:px-5  pb-12 mt-[62px] pt-2.5 md:pt-5  ">
        <Feed passedPosts={state.favourites} />
      </div>
    </>
  );
};
