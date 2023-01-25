import { fetchUserDetails } from "../static/api";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { useRouter } from "next/router";
import Topbar from "../components/topbar";
import Feed from "../components/feed";
import { useContext } from "react";
import { Context } from "../store/context";

export default function Home() {
  const { state, dispatch } = useContext(Context);
  const [render, setRender] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!state.user)
      (async () => {
        (await fetchUserDetails(dispatch, router)) && setRender(true);
      })();
  }, [state.user]);

  if (!render) return null;

  return (
    <>
      <Topbar />
      <Navbar />
      <div className="flex w-[calc(100%-62px)] ml-auto px-2.5 md:px-5  pb-12 mt-[62px] pt-2.5 md:pt-5 ">
        <div className="-z-10">
          <Feed />
        </div>
      </div>
    </>
  );
}
