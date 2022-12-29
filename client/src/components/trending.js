import Wrap from "./wrap";
export default () => {
  return (
    <Wrap>
      <li className="flex text-sm bg-transparent border border-transparent rounded-md">
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
          <a>C'Thun</a>
          <p className="text-xs tracking-wide opacity-70">102 comments</p>
        </li>
      </ul>
    </Wrap>
  );
};
