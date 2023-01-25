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
    console.log(state.user);
    if (!state.user)
      (async () => {
        (await fetchUserDetails(dispatch, router)) && setRender(true);
      })();
  }, [state.user]);

  if (!render) return null;

  console.log(state);

  return (
    <>
      <Topbar user={state.user} />
      <Navbar user={state.user} setUser={() => null} />
      <button
        className="absolute text-white z-[5400]"
        onClick={() => {
          console.log(state);
          dispatch({
            type: "SET_TEST",
            payload: "?XD",
          });
        }}
      >
        Click me
      </button>
      <div className="flex w-[calc(100%-62px)] ml-auto px-2.5 md:px-5  pb-12 mt-[62px] pt-2.5 md:pt-5 ">
        <div className="-z-10">
          <Feed />
        </div>
      </div>
    </>
  );
}
