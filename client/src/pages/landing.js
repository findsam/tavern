export default () => {
  return (
    <>
      <nav className="flex items-center justify-center max-w-xl mx-auto mt-20">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center -space-x-3">
            <span className="block w-6 h-6 border-2 rounded-full border-main-900 bg-main-300" />
            <span className="block w-8 h-8 border-4 rounded-full border-main-900 bg-main-500" />
          </div>
          <h1 className="font-medium tracking-wide">Tavern</h1>
        </div>
        <ul className="flex items-center gap-5 ml-auto text-white/70">
          <li className="text-sm font-normal leading-5 text-white/70">
            What is Tavern?
          </li>
          <li className="text-sm font-normal leading-5 text-white/70">Features</li>
          <li className="text-sm font-normal leading-5 text-white/70">Pricing</li>
          <li className="text-sm font-normal leading-5 text-white/70">Login</li>
        </ul>
      </nav>

      <main className="flex items-center justify-center max-w-xl mx-auto mt-20"></main>
    </>
  );
};
