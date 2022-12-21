import Wrap from "./wrap";
import Trending from "./trending";
import Post from "./post";
import { useState, useEffect, useRef } from "react";
import Image from "next/legacy/image";
import { AiOutlineArrowDown } from "react-icons/ai";
const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.webp",
  "6.webp",
  "7.jpg",
  "8.jpg",
  "9.webp",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
];

export default () => {
  const [posts, setPosts] = useState([]);
  const container = useRef();
  const [columnWrappers, setColumnWrappers] = useState({});

  useEffect(() => {
    let imageIndex = 0;
    for (let i = 0; i < 80; i++) {
      let item = {
        id: i,
        title: `Post ${i}`,
        image: images[imageIndex],
      };
      setPosts((prevPosts) => [...prevPosts, item]);
      imageIndex++;
      if (imageIndex > images.length - 1) imageIndex = 0;
    }
  }, []);

  function generateMasonryGrid(columns, posts) {
    container.innerHTML = "";
    for (let i = 0; i < columns; i++) {
      setColumnWrappers((prev) => ({ ...prev, [`column${i}`]: [] }));
    }
    for (let i = 0; i < posts.length; i++) {
      const column = i % columns;
      setColumnWrappers((prev) => ({
        ...prev,
        [`column${column}`]: [...prev[`column${column}`], posts[i]],
      }));
    }
  }

  useEffect(() => {
    generateMasonryGrid(4, posts);
  }, [posts]);

  // console.log(columnWrappers);

  return (
    <div
      className="w-[calc(100%-275px)] ml-auto flex relative gap-5 pt-24 px-12 pb-12"
      ref={container}
    >
      {Object.keys(columnWrappers).map((key, index) => {
        return (
          <div className="flex flex-col flex-1 gap-5" key={index}>
            {columnWrappers[key].map((item, index) => (
              <div
                className="relative w-full overflow-hidden border rounded-lg bg-main-800 border-main-700"
                key={index}
              >
                <div className="w-full bg-main-800">
                  <div className="flex gap-3 p-1.5 text-white">
                    <Image
                      className="rounded-full ring-1 ring-main-600 p-0.5 shrink-0"
                      height="38"
                      width="38"
                      src={`https://cdn.discordapp.com/avatars/1012899721477619862/0ea94e9083dea503c92e8f562060d81d.webp`}
                      alt="discord user profile picture generated by api"
                    />
                    <span className="grid text-sm">
                      <a>swkn#dev</a>
                      <p className="text-xs tracking-wide">
                        <span className="opacity-70">12 minutes ago on</span>{" "}
                        Photoshop
                      </p>
                    </span>
                  </div>
                  <div className="relative h-full max-w-full mx-auto my-0">
                    <img src={"/" + item.image} className="object-fill w-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      })}

      {/* <div className="flex flex-col flex-1 gap-5">
        <div className="h-[300px] w-full bg-red-500 overflow-hidden relative" />
        <div className="h-[300px] w-full bg-red-500 overflow-hidden relative" />
      </div>
      <div className="flex flex-col flex-1 gap-5">
        <div className="h-[300px] w-full bg-red-500 overflow-hidden relative" />
        <div className="h-[300px] w-full bg-red-500 overflow-hidden relative" />
      </div>
      <div className="flex flex-col flex-1 gap-5">
        <div className="h-[300px] w-full bg-red-500 overflow-hidden relative" />
        <div className="h-[300px] w-full bg-red-500 overflow-hidden relative" />
      </div>
      <div className="flex flex-col flex-1 gap-5">
        <div className="h-[300px] w-full bg-red-500 overflow-hidden relative" />
        <div className="h-[300px] w-full bg-red-500 overflow-hidden relative" />
      </div>
      <div className="flex flex-col flex-1 gap-5">
        <div className="h-[300px] w-full bg-red-500 overflow-hidden relative" />
        <div className="h-[300px] w-full bg-red-500 overflow-hidden relative" />
      </div> */}
    </div>
  );
};
