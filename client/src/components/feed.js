import { useState, useEffect, useRef, useCallback, useContext } from "react";
import Link from "next/link";
import { Context } from "../store/context";
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

export default ({ passedPosts }) => {
  const [posts, setPosts] = useState(passedPosts);
  const container = useRef();
  const [columnWrappers, setColumnWrappers] = useState({});
  const size = useWindowSize();
  const [cols, setCols] = useState(5);
  const [loaded, setLoaded] = useState(false);

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
    generateMasonryGrid(cols, posts);
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
      Object.keys(prev).forEach((_) => {
        if (
          !prev[_] ||
          prev[_] === undefined ||
          (Array.isArray(prev[_]) && prev[_].length === 0)
        ) {
          temp[_] = [{ id: Math.random(), title: Math.random() }];
        }
      });
      return temp;
    });
  }, [posts, passedPosts, cols]);

  useEffect(() => {
    const x =
      container?.current?.childNodes[container?.current?.childNodes.length - 1];
    console.log(x);
  }, [container.current]);

  return (
    <>
      {!loaded && (
        <p className="text-xs tracking-wide text-left opacity-70">
          Loading content...
        </p>
      )}
      <div
        className={`relative flex gap-2.5 md:gap-5 ${
          loaded ? "visible" : "invisible"
        }`}
        ref={container}
      >
        {Object.keys(columnWrappers)
          .slice(0, Object.keys(columnWrappers).length - 1)
          .map((key, index) => (
            <div className="flex flex-col flex-1 gap-2.5 md:gap-5" key={index}>
              {columnWrappers[key].map((item, index) => (
                <Post post={item} key={index} />
              ))}
            </div>
          ))}
        {Object.keys(columnWrappers)
          .slice(-1)
          .map((key, index) => (
            <div className="flex flex-col flex-1  gap-2.5 md:gap-5" key={index}>
              {columnWrappers[key].map((item, index) => {
                if (columnWrappers[key].length === index + 1) {
                  return (
                    <span key={index} ref={lastPost} onLoad={() => setLoaded(true)}>
                      <Post post={item} />
                    </span>
                  );
                }
                return <Post post={item} key={index} />;
              })}
            </div>
          ))}
      </div>
    </>
  );
};

const Post = ({ post }) => {
  const { state, dispatch } = useContext(Context);
  function addToFavourites(data) {
    dispatch({
      type: "SET_FAVOURITES",
      payload: [...state.favourites, data],
    });
  }

  return (
    <>
      <div className="relative w-full overflow-hidden">
        <div className="w-full">
          {post.image && (
            <>
              <Link href={`thread/${post.id}`}>
                <div className="relative h-full max-w-full mx-auto my-0 overflow-hidden border rounded-lg drop-shadow-md bg-main-800 border-main-border">
                  <img src={"/" + post.image} className="object-fill w-full" />
                </div>
              </Link>

              <div className="flex flex-col items-start w-full text-white ml-0.5 gap-1 mt-1">
                <p className="text-xs tracking-wide text-left opacity-70">
                  @swkn#dev
                </p>
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
                </ul>
              </div>
              <span onClick={() => addToFavourites(post)}>favorite</span>
            </>
          )}
          {!post.image && (
            <>
              <div className="relative hidden h-full max-w-full mx-auto my-0 overflow-hidden border rounded-lg pointer-events-none drop-shadow-md bg-main-800 border-main-border">
                <img src={"/1.jpg"} className="object-fill w-full" />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

const getWindow = () => (typeof window !== "undefined" ? window : null);
const debounce = (func, timeout) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

function useWindowSize() {
  const window = getWindow();
  const getSize = () => ({ width: window?.innerWidth, height: window?.innerHeight });
  const [windowSize, setWindowSize] = useState(getSize);
  useEffect(() => {
    const handleResizeDebounced = debounce(() => {
      setWindowSize(getSize());
    }, 500);
    window.addEventListener("resize", handleResizeDebounced);
    return () => window.removeEventListener("resize", handleResizeDebounced);
  }, []);
  return windowSize;
}
