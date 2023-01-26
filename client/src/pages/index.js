import Navbar from "../components/navbar";
import Topbar from "../components/topbar";
import Feed from "../components/feed";
import useAuth from "../hooks/useAuth";
import { useContext } from "react";
import { Context } from "../store/context";

export default function Home() {
  const isLoggedIn = useAuth();
  if (!isLoggedIn) return null;
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="flex w-[calc(100%-62px)] ml-auto px-2.5 md:px-5  pb-12 mt-[62px] pt-2.5 md:pt-5 ">
        <div className="">
          <Feed />
        </div>
      </div>
    </>
  );
}
