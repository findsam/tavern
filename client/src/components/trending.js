// import Wrap from "./wrap";
// export default () => {
//   return (
//     <Wrap>
//       <li className="flex text-sm bg-transparent border border-transparent rounded-md">
//         {/* <AiOutlineMessage className="mr-2 text-xl" /> */}
//         Trending Now
//       </li>
//       <ul className="grid gap-2 mt-3">
//         <li className="text-sm">
//           <a>Mal'ganis</a>
//           <p className="text-xs tracking-wide opacity-70">164 comments</p>
//         </li>
//         <li className="text-sm">
//           <a>Kael'thas Sunstrider</a>
//           <p className="text-xs tracking-wide opacity-70">14 comments</p>
//         </li>
//         <li className="text-sm">
//           <a>Cypher</a>
//           <p className="text-xs tracking-wide opacity-70">102 comments</p>
//         </li>
//         <li className="text-sm">
//           <a>C'Thun</a>
//           <p className="text-xs tracking-wide opacity-70">61 comments</p>
//         </li>
//         <li className="text-sm">
//           <a>Ragnaros</a>
//           <p className="text-xs tracking-wide opacity-70">5 comments</p>
//         </li>
//         <li className="text-sm">
//           <a>Lich King</a>
//           <p className="text-xs tracking-wide opacity-70">2 comments</p>
//         </li>
//       </ul>
//     </Wrap>
//   );
// };

import Image from "next/image";
import Wrap from "../components/wrap";
export default () => {
  return (
    <div className="overflow-hidden border rounded-lg bg-main-800 border-main-border">
      {/* <div className="w-full border-b border-main-border">
      <ul className="flex gap-3 px-5 py-3 text-sm rounded-md">
        <li className="flex gap-1.5 text-white relative">Your Notifications</li>
      </ul>
    </div> */}
      <li className="flex px-5 py-3 text-sm bg-transparent border-b border-main-border ">
        Trending
      </li>
      <ul className="grid gap-1 pt-2">
        <li className="flex items-center w-full gap-3 px-5 pb-2 ml-auto border-b border-main-border">
          <span className="flex flex-col w-full text-sm text-left">
            <span className="flex">
              <a>admin#2222</a>
              <p className="ml-auto text-xs tracking-wide text-left opacity-70">
                5 min ago
              </p>
            </span>
            <p className="text-xs tracking-wide text-left opacity-70">
              Liked your post <a className="text-cyan-300">Mal'ganis RPG Art</a>
            </p>
          </span>
        </li>
        <li className="flex items-center w-full gap-3 px-5 pb-2 ml-auto border-b border-main-border">
          <span className="flex flex-col w-full text-sm text-left">
            <span className="flex">
              <a>admin#2222</a>
              <p className="ml-auto text-xs tracking-wide text-left opacity-70">
                5 min ago
              </p>
            </span>
            <p className="text-xs tracking-wide text-left opacity-70">
              Liked your post <a className="text-cyan-300">Mal'ganis RPG Art</a>
            </p>
          </span>
        </li>
        <li className="flex items-center w-full gap-3 px-5 pb-2 ml-auto border-b border-main-border">
          <span className="flex flex-col w-full text-sm text-left">
            <span className="flex">
              <a>admin#2222</a>
              <p className="ml-auto text-xs tracking-wide text-left opacity-70">
                5 min ago
              </p>
            </span>
            <p className="text-xs tracking-wide text-left opacity-70">
              Liked your post <a className="text-cyan-300">Mal'ganis RPG Art</a>
            </p>
          </span>
        </li>
      </ul>
      <div className="px-5 py-3 border-t border-main-border">
        <span className="relative flex items-center justify-center w-full gap-2 text-xs tracking-wide text-center opacity-70">
          <span>See more...</span>
        </span>
      </div>
    </div>
  );
};
