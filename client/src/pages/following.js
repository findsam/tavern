import Navbar from "../components/navbar";
import Topbar from "../components/topbar";
import Feed from "../components/feed";
import useAuth from "../hooks/useAuth";
import { fetchTest } from "../static/api";
import { useCols } from "../hooks/useCols";
import { useRef, useState, useEffect } from "react";
import Loading from "../components/loading";
import Layout from "../components/layout/navigation";

export default function Following() {
  const cols = useCols();
  const firstRender = useRef(true);
  const [posts, setPosts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoaded(false);
      await fetchTest(setPosts, 1);
    })();
  }, []);

  if (!useAuth()) return null;

  return (
    <>
      <div
        className={`flex w-[calc(100%-62px)] ml-auto px-2.5 md:px-5 pb-12 mt-[62px] pt-2.5 md:pt-5 flex-col`}
      >
        {firstRender.current && cols && (
          <div className="relative flex gap-2.5 md:gap-5 items-start w-full">
            {[...Array(cols)].map((_, _i) => (
              <Loading key={_i} />
            ))}
          </div>
        )}
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

Following.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
