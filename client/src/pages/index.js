import { fetchUserDetails } from "../static/api";
import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../components/navbar";
import { useRouter } from "next/router";
import { AiOutlineSearch, AiOutlineFileAdd } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import Topbar from "../components/topbar";
import Feed from "../components/feed";
import Trending from "../components/trending";
import Notifications from "../components/notifications";
import Community from "../components/community";

export default function Home() {
  const [render, setRender] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (!user)
      (async () => {
        (await fetchUserDetails(setUser, router)) && setRender(true);
      })();
  }, [user]);

  if (!render) return null;
  return (
    <>
      <Topbar user={user} />
      <Navbar user={user} setUser={setUser} />
      <div className="flex w-[calc(100%-62px)] ml-auto px-5 gap-5 pb-12 mt-[62px] pt-5">
        <div className="fixed top-0 left-[62px] mt-[62px] pt-5 ml-5 grid gap-5 max-w-[325px] min-w-[325px] w-full">
          <Community />
          <Notifications />
          {/* <Trending /> */}
        </div>
        <div className="pl-5 ml-[325px] -z-10">
          <Feed />
        </div>
      </div>
    </>
  );
}
