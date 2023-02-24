import Navbar from "../components/navbar";
import Topbar from "../components/topbar";
import Feed from "../components/feed";
import useAuth from "../hooks/useAuth";
import { fetchTest } from "../static/api";
import { useRouter } from "next/router";
import { sleep } from "../static/util";
import { useRef, useLayoutEffect, useState, useEffect } from "react";

export default function Home() {
  const firstRender = useRef(true);
  const [posts, setPosts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const {
    query: { activity },
  } = useRouter();

  useEffect(() => {
    (async () => {
      setIsLoaded(false);
      if (activity == "feed") {
        await sleep(150);
        await fetchTest(setPosts, 0);
      } else if (activity == "following") {
        await sleep(150);
        await fetchTest(setPosts, 1);
      } else if (activity == "favourites") {
        await sleep(150);
        await fetchTest(setPosts, 2);
      } else {
        await fetchTest(setPosts, 0);
      }
    })();
  }, [activity]);

  if (!useAuth()) return null;

  return (
    <>
      <Topbar />
      <Navbar />
      <div
        className={`flex w-[calc(100%-62px)] ml-auto px-2.5 md:px-5 pb-12 mt-[62px] pt-2.5 md:pt-5`}
      >
        <Feed
          passedPosts={posts}
          setIsLoaded={setIsLoaded}
          isLoaded={isLoaded}
          firstRender={firstRender}
        />
      </div>
    </>
  );
}
