import Wrap from "./wrap";
import Trending from "./trending";
import Post from "./post";
import { useState, useEffect, useRef } from "react";

const images = [
  "https://dr.savee-cdn.com/things/6/1/947fc7825d592e073f3906.jpg",
  "https://dr.savee-cdn.com/things/6/0/ddba20ea875e5eba5e8856.jpg",
  "https://dr.savee-cdn.com/things/5/e/68f35e1404e45961765299.gif",
  "https://dr.savee-cdn.com/things/6/1/83d88d67b030d9aef082f8.jpg",
  "https://dr.savee-cdn.com/things/6/1/80259167b030d9aef046f9.jpg",
  "https://dr.savee-cdn.com/things/5/f/de5cc54d5cb418bb2bcaea.png",
  "https://dr.savee-cdn.com/things/6/1/6c578f1ff504a6334769b4.jpg",
  "https://dr.savee-cdn.com/things/6/1/76ebbcfd9b0f8e00cf35d8.jpg",
  "https://dr.savee-cdn.com/things/6/1/64711b0e69492ef09b7fd0.jpg",
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

  return (
    // <div className="w-[calc(100%-275px)] px-10 relative z-100 pt-24 ml-auto grid grid-cols-10 gap-10">
    //   <div className="grid col-span-8 gap-5">
    //     <Wrap>
    //       <Post />
    //     </Wrap>
    //     <Wrap>123</Wrap>
    //     <Wrap>123</Wrap>
    //   </div>
    //   <div className="col-span-2">
    //     <Trending />
    //   </div>
    // </div>

    <div
      className="w-[calc(100%-275px)] ml-auto flex relative gap-5 pt-24 px-12"
      ref={container}
    >
      123
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
