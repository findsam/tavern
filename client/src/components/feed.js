import {
  useState,
  useEffect,
  useRef,
  useCallback,
  useContext,
  useMemo,
} from "react";
import Link from "next/link";
import Loading from "./loading";
import { useWindowSize } from "../hooks/useWindowSize";
const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.webp",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.webp",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpeg",
  "16.jpeg",
  "17.jpeg",
  "18.jpg",
  "19.webp",
];
import Image from "next/image";

export default ({ passedPosts }) => {
  const [posts, setPosts] = useState(passedPosts);
  const container = useRef();
  const [columnWrappers, setColumnWrappers] = useState({});
  const size = useWindowSize();
  const [cols, setCols] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [lastCol, setLastCol] = useState(false);

  // useEffect(() => {
  //   testingInfiniteScroll();
  // }, []);

  // function testingInfiniteScroll() {
  //   let imageIndex = 0;
  //   for (let i = 0; i < 80; i++) {
  //     let item = {
  //       id: i,
  //       title: `Post ${i}`,
  //       image: images[imageIndex],
  //     };
  //     setPosts((prevPosts) => [...prevPosts, item]);
  //     imageIndex++;
  //     if (imageIndex > images.length - 1) imageIndex = 0;
  //   }
  // }

  function generateMasonryGrid(columns, posts) {
    setColumnWrappers([]);
    for (let i = 0; i < columns; i++)
      setColumnWrappers((prev) => ({ ...prev, [`column${i}`]: [] }));
    for (let i = 0; i < posts.length; i++) {
      const column = i % columns;
      setColumnWrappers((prev) => ({
        ...prev,
        [`column${column}`]: [...prev[`column${column}`], posts[i]],
      }));
    }
  }

  useEffect(() => {
    if (cols !== null) {
      document.body.style.overflow = "hidden";
      generateMasonryGrid(cols, posts);
    }
  }, [posts, cols]);

  const observer = useRef();
  const lastPost = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    // observer.current = new IntersectionObserver((entries) => {
    //   if (entries[0].isIntersecting) testingInfiniteScroll();
    // });
    // if (node) observer.current.observe(node);
  }, []);

  useEffect(() => {
    if (size.width > 1450) setCols(5);
    if (size.width < 1450) setCols(4);
    if (size.width < 1100) setCols(3);
    if (size.width < 850) setCols(2);
    if (size.width < 600) setCols(1);
  }, [size.width]);

  useEffect(() => {
    setColumnWrappers((prev) => {
      const temp = Object.assign({}, prev);

      const colsWithImages =
        Object.keys(prev)
          .map((_) => {
            return prev[_][prev[_].length - 1]?.image ? true : null;
          })
          .filter((_) => _ !== null).length - 1;

      Object.keys(prev).forEach((_, index) => {
        let hasImage = prev[_][prev[_].length - 1];
        if (
          !prev[_] ||
          prev[_] === undefined ||
          (Array.isArray(prev[_]) && prev[_].length === 0)
        ) {
          return (temp[_] = [{ id: Math.random() }]);
        } else if (hasImage && index === colsWithImages) {
          return (temp[_][temp[_].length - 1] = {
            ...temp[_][temp[_].length - 1],
            isLast: true,
          });
        }
        return temp[_];
      });
      return temp;
    });
  }, [posts, passedPosts, cols]);

  return (
    <>
      <div className="grid w-full">
        {!loaded && cols && (
          <div className="relative flex gap-2.5 md:gap-5 items-start">
            {[...Array(cols)].map((_, _i) => (
              <Loading key={_i} />
            ))}
          </div>
        )}
        <div
          className={`relative flex gap-2.5 md:gap-5 ${
            loaded ? "visible" : "invisible"
          }`}
          ref={container}
        >
          {Object.keys(columnWrappers).map((key, index) => {
            return (
              <div className="flex flex-col flex-1 gap-2.5 md:gap-5" key={index}>
                {columnWrappers[key].map((item, index) => {
                  if (item.isLast) {
                    return <Post post={item} key={index} setLoaded={setLoaded} />;
                  }
                  return <Post post={item} key={index} />;
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const Post = ({ post, setLoaded = null }) => {
  return (
    <>
      <div className={`${post.isLast && "IM THE LAST"} relative w-full`}>
        <div className="w-full">
          {post.image && (
            <>
              <Link href={`thread/${post.id}`} className="bg-main-800">
                <div className="relative h-full max-w-full mx-auto my-0 overflow-hidden border rounded-lg drop-shadow-md bg-main-800 border-main-border ">
                  <>
                    <Image
                      onLoadingComplete={
                        post.isLast &&
                        (() => {
                          setLoaded(true);
                          document.body.style.overflow = "unset";
                        })
                      }
                      alt={`${post.id} image dscribing`}
                      src={"/" + post.image}
                      className="object-contain !w-full !relative !h-['unset']"
                      fill
                      quality={85}
                    />
                  </>
                </div>
              </Link>
              <div className="flex flex-col items-start w-full text-white ml-0.5 gap-1 mt-1">
                <div className="inline-flex w-full">
                  <Link href={`profile/@swkn#dev`}>
                    <p className="mr-auto text-xs tracking-wide text-left opacity-70">
                      @swkn#dev
                    </p>
                  </Link>
                </div>
                <ul className="flex gap-1 font-normal leading-none tracking-wide">
                  <li className="px-2 py-1 text-[10px] tracking-wide text-white/70 duration-150 rounded-full bg-main-800">
                    #photoshop
                  </li>
                  <li className="px-2 py-1 text-[10px] tracking-wide text-white/70 duration-150 rounded-full bg-main-800">
                    #warcraft
                  </li>
                  <li className="px-2 py-1 text-[10px] tracking-wide text-white/70 duration-150 rounded-full bg-main-800">
                    #offline
                  </li>
                  {post.isLast && (
                    <li className="px-2 py-1 text-[10px] tracking-wide text-white/70 duration-150 rounded-full bg-main-800">
                      LAST ITEM W/ IMAGE
                    </li>
                  )}
                </ul>
              </div>
            </>
          )}
          {/* {!post.image && (
            <>
              {last ? (
                <span
                  onLoadStart={() => {
                    setLoaded(true);
                    document.body.style.overflow = "unset";
                  }}
                  className="object-contain !w-full !relative !h-['unset'] hidden none"
                />
              ) : (
                <span />
              )}
            </>
          )} */}
        </div>
      </div>
    </>
  );
};
