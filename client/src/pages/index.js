import { fetchUserDetails } from "../static/api";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { useRouter } from "next/router";
import Topbar from "../components/topbar";
import Feed from "../components/feed";
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
      <div className="flex w-[calc(100%-62px)] ml-auto px-2.5 md:px-5  pb-12 mt-[62px] pt-2.5 md:pt-5 ">
        <div className="-z-10">
          <Feed />
        </div>
      </div>
    </>
  );
}
