import { useContext, useMemo } from "react";
import { Context } from "../store/context";
import Feed from "../components/feed";
import Topbar from "../components/topbar";
import Navbar from "../components/navbar";
import Loading from "../components/loading";

export default () => {
  const { state, dispatch } = useContext(Context);
  // const LOADER = useMemo(() => <Loading />, []);

  return (
    <>
      <Topbar />
      <Navbar />
      <div className="flex w-[calc(100%-62px)] ml-auto px-2.5 md:px-5  pb-12 mt-[62px] pt-2.5 md:pt-5">
        {state.favourites.length > 0 && <Feed passedPosts={state.favourites} />}
        {state.favourites.length === 0 && (
          <>
            {
              <div className="relative flex gap-2.5 md:gap-5 items-start w-full">
                {[...Array(5)].map((_, _i) => {
                  if (_i === 0) return <Loading isPlaceholder={true} key={_i} />;
                  else return <Loading key={_i} />;
                })}
              </div>
            }
          </>
        )}
      </div>
    </>
  );
};
