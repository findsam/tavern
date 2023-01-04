import Wrap from "./wrap";
export default () => {
  return (
    <Wrap>
      <div className="text-sm">
        <a className="block mb-3">Welcome to Tarvern</a>
        <p className="text-xs tracking-wide opacity-70">
          Tavern is an independant non-algorithm art discovery and collaberation
          tool. We are a community based storytelling and creative platform for all
          art forms turning creativity into meaningful stories.
        </p>
        <p className="mt-3 text-xs tracking-wide opacity-70">
          Support Tavern for as little as $5 per month and gain unique perks like:
        </p>
        <ul className="mt-3 ml-3.5 text-xs tracking-wide list-disc opacity-70">
          <li>Verified Badge</li>
          <li>Advertising Perks</li>
          <li>Unlimited Uploads</li>
          <li>Private Community</li>
          <li>Pay Creatives</li>
        </ul>

        <div className="mt-3">
          <div className="flex flex-col gap-3">
            <button className="px-4 min-h-[38px] max-h-[38px] whitespace-nowrap text-sm text-white/70 border rounded-md bg-main-700 border-main-border hover:bg-main-900 hover:text-white duration-150">
              Subscribe to Tavern
            </button>
          </div>
          {/* <span className="relative flex items-center w-full gap-2 mt-3 text-xs tracking-wide text-center opacity-70">
            <span className="h-[1px] block flex-1 bg-main-border"></span>
            <span>Or join the</span>
            <span className="h-[1px] block flex-1 bg-main-border"></span>
          </span>
          <button className="flex-1 px-4 min-h-[38px] text-sm  border border-main-border rounded-md text-white/70 mt-3 w-full">
            Community Discord
          </button> */}
        </div>
      </div>
    </Wrap>
  );
};
