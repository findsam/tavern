import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { useCols } from "../hooks/useCols";
import Image from "next/image";

export default ({ passedPosts, setIsLoaded, isLoaded, firstRender }) => {
  const container = useRef();
  const [columnWrappers, setColumnWrappers] = useState({});
  const cols = useCols();

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

  useEffect(() => {
    if (cols !== null) {
      document.body.style.overflow = "hidden";
      generateMasonryGrid(cols, passedPosts);
    }
  }, [passedPosts, cols]);

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
  }

  const observer = useRef();
  const lastPost = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) console.log("hi");
    });
    if (node) observer.current.observe(node);
  }, []);

  return (
    <>
      <div className="grid w-full">
        <div className={`relative flex gap-2.5 md:gap-5`} ref={container}>
          {Object.keys(columnWrappers).map((key, index) => {
            return (
              <div className="flex flex-col flex-1 gap-2.5 md:gap-5" key={index}>
                {columnWrappers[key].map((item, index) => {
                  if (item.isLast) {
                    return (
                      <span ref={lastPost}>
                        <Post
                          key={index}
                          post={item}
                          setIsLoaded={setIsLoaded}
                          firstRender={firstRender}
                        />
                      </span>
                    );
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

const Post = ({ post, setIsLoaded = null, firstRender }) => {
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
                          firstRender.current = false;
                          setIsLoaded(true);
                          document.body.style.overflow = "unset";
                        })
                      }
                      alt={`${post.id} image dscribing`}
                      src={"/" + post.image}
                      className="object-contain !w-full !relative !h-['unset']"
                      fill
                      loading="eager"
                      quality={70}
                    />
                  </>
                </div>
              </Link>

              <div className="flex flex-col text-sm  gap-1.5 mt-1.5">
                <p className="inline-flex items-center text-xs text-left text-white/40 ">
                  <Link
                    href={`profile/@swkn#dev`}
                    className="duration-150 hover:cursor-pointer hover:text-white"
                  >
                    @swkn#dev
                  </Link>
                  <span className="block w-1 h-1 mx-2 rounded-full bg-white/40" />
                  <span>photoshop</span>
                  <span className="block w-1 h-1 mx-2 rounded-full bg-white/40" />
                  <span>warcraft</span>
                </p>

                {/* <ul className="flex gap-1 font-normal leading-none">
                  <li className="px-2 py-1 text-xs duration-150 rounded-full text-white/40 bg-main-800">
                    #photoshop
                  </li>
                  <li className="px-2 py-1 text-xs duration-150 rounded-full text-white/40 bg-main-800">
                    #warcraft
                  </li>
                  <li className="px-2 py-1 text-xs duration-150 rounded-full text-white/40 bg-main-800">
                    #offline
                  </li>
                  {post.isLast && (
                    <li className="px-2 py-1 text-xs duration-150 rounded-full text-white/40 bg-main-800">
                      Development Last
                    </li>
                  )}
                </ul> */}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
