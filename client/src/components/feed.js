import Wrap from "./wrap";
export default () => {
  return (
    <div className="w-[calc(100%-275px)] px-10 relative z-100 pt-24 ml-auto grid grid-cols-10 gap-10">
      <div className="col-span-8">
        <Wrap>123</Wrap>
      </div>
      <div className="col-span-2">
        <Wrap>
          <li className="flex text-sm bg-transparent border border-transparent rounded-md opacity-70">
            {/* <AiOutlineMessage className="mr-2 text-xl" /> */}
            Trending Now
          </li>
          <ul className="grid gap-2 mt-3">
            <li className="text-sm">
              <a>Mal'ganis</a>
              <p className="text-xs tracking-wide opacity-70">164 comments</p>
            </li>
            <li className="text-sm">
              <a>Kael'thas Sunstrider</a>
              <p className="text-xs tracking-wide opacity-70">14 comments</p>
            </li>
            <li className="text-sm">
              <a>Cypher</a>
              <p className="text-xs tracking-wide opacity-70">102 comments</p>
            </li>
            <li className="text-sm">
              <a>C'thun</a>
              <p className="text-xs tracking-wide opacity-70">2 comments</p>
            </li>
          </ul>
        </Wrap>
      </div>
    </div>
  );
};
