import Wrap from "./wrap";
export default () => {
  return (
    <Wrap>
      <div className="text-sm">
        <a className="block mb-3">Subscribe to Tarvern.</a>
        <p className="text-xs tracking-wide opacity-70">
          Tavern is an independant non-algorithm art discovery and collaberation
          tool. We are a community based storytelling and creative platform for all
          art forms. We aim to turn art into a meaningful stories with the help of
          fans, friend and other creators.
        </p>
        <p className="mt-3 text-xs tracking-wide opacity-70">
          Subscribing to Tavern will support development and in return we will
          provide unique perks such as the following:
        </p>
        <ul className="mt-3 ml-3.5 text-xs tracking-wide list-disc opacity-70">
          <li>Verified Badge</li>
          <li>Advertising Perks</li>
          <li>Unlimited Uploads</li>
          <li>Suggest Features</li>
          <li>Private Community</li>
        </ul>

        <div className="mt-2 border-t border-main-border">
          <div className="flex flex-col gap-3 pt-3">
            <button className="px-4 min-h-[38px] max-h-[38px] whitespace-nowrap text-sm text-white/70 border rounded-md bg-main-700 border-main-border ">
              Subscribe to Tavern
            </button>
          </div>
        </div>
      </div>
    </Wrap>
  );
};
