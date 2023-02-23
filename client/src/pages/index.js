import Navbar from "../components/navbar";
import Topbar from "../components/topbar";
import Feed from "../components/feed";
import useAuth from "../hooks/useAuth";
import { dummyData } from "../static/util";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [tab, setTab] = useState(0);
  const [posts, setPosts] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (tab === 0) setPosts(dummyData);
    if (tab === 1) setPosts(dummyData.slice(0, 5));
  }, [tab]);
  if (!useAuth()) return null;

  return (
    <>
      <Topbar setTab={setTab} />
      <Navbar />
      <div
        className={`flex w-[calc(100%-62px)] ml-auto px-2.5 md:px-5  pb-12 mt-[62px] pt-2.5 md:pt-5`}
      >
        <Feed
          posts={posts}
          tab={tab}
          isLoaded={isLoaded}
          setIsLoaded={setIsLoaded}
        />
      </div>
    </>
  );
}
