import Image from "next/image";
import { getDiscordURL } from "../static/util";
import { SiDiscord } from "react-icons/si";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { useWindowScroll } from "../hooks/useWinScroll";

export default () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center max-w-2xl gap-5 mx-auto text-center mt-44">
        <h1 className="text-4xl font-semibold leading-snug tracking-normal ">
          All-In-One collaberation and discovery tool for digital creatives.
        </h1>

        <p className="max-w-md text-sm font-normal leading-5 text-main-text/70">
          Tavern is a discovery and collaberation tool for digital storytelling. Our community turns art into a
          meaningful stories. Join these and our growing community of 500+ other members and embark on your
          creative storytelling journey.
        </p>

        <div className="flex items-center -space-x-3">
          {[...Array(10)].map((_, i) => (
            <Image
              key={i}
              className={`rounded-full border-[3px] border-main-900`}
              height="36"
              width="36"
              quality={100}
              src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50)}`}
              alt="discord user profile picture generated by api"
            />
          ))}
        </div>

        <p className="text-xs text-left text-main-text/40">
          By continuing you agree to our{" "}
          <a className="underline duration-150 decoration-white/40 underline-offset-2 hover:cursor-pointer hover:text-main-text hover:decoration-white">
            Terms of Service
          </a>{" "}
          and{" "}
          <a className="underline duration-150 decoration-white/40 underline-offset-2 hover:cursor-pointer hover:text-main-text hover:decoration-white">
            Privacy Policy
          </a>{" "}
        </p>

        <a
          href={getDiscordURL()}
          className="max-w-max flex-1 px-6 min-h-[38px] gap-2 text-sm text-main-text/70 border rounded-md bg-main-800 border-main-border  hover:border-white/70  duration-150 flex items-center justify-center"
        >
          Continue with Discord
          <SiDiscord size={18} />
        </a>
      </main>
      <section className="relative mt-24 pb-28 -z-10">
        <div className="max-w-4xl mx-auto blur-[0.01rem]">
          <Image
            src={`/landing.png`}
            className="object-contain !w-full !relative -z-10 !h-['unset'] block  max-w-full align-middle border rounded-xl drop-shadow-md bg-main-800 border-main-border"
            fill
            quality={100}
          />
        </div>
      </section>
      <section className="flex flex-col items-center gap-5 mx-auto text-center mb-28">
        <h1 className="max-w-2xl text-4xl font-semibold leading-snug tracking-normal ">How it works...</h1>

        <p className="max-w-md text-sm font-normal leading-5 text-main-text/70">
          to build a community-driven cultivating and creative environment accessible to the digital
          storyteller. We're trying something new, and why don't you? Endlessly embark in the storytelling
          adventure and bring your tale together with the help of Tavern.
        </p>
        <div className="max-w-4xl mx-auto blur-[0.01rem] mt-4 relative -z-10">
          <Image
            src={`/hidden/page2.png`}
            className="object-contain !w-full !relative -z-10 !h-['unset'] block  max-w-full align-middle border rounded-xl drop-shadow-md bg-main-800 border-main-border"
            fill
            quality={100}
          />
        </div>
      </section>

      <section className="flex flex-col items-center gap-5 mx-auto mb-12 text-center">
        <h1 className="max-w-2xl text-4xl font-semibold leading-snug tracking-normal ">
          Flexible pricing as you scale
        </h1>

        <p className="max-w-md text-sm font-normal leading-5 text-main-text/70">
          Industry standard social medias do not value the digital creative. Art is storytelling and we have a
          mission to your tale by rewarding creators and collaberatiors.
        </p>

        <div className="grid w-full max-w-4xl grid-cols-3 gap-5 mt-1.5">
          <div className="border border-main-border rounded-lg py-3.5 flex flex-col">
            <div className="grid gap-0.5">
              <h1 className="font-medium ">Free</h1>
              <p className="max-w-md px-5 text-sm font-normal leading-5 text-main-text/70">Hobbyist</p>
              <h2 className="max-w-2xl text-4xl font-semibold leading-snug tracking-normal ">$0</h2>

              <span className="relative flex items-center w-full gap-2 text-xs text-center">
                <span className="h-[1px] block flex-1 bg-main-border" />
                <span className="text-sm text-main-text/70">Forever</span>
                <span className="h-[1px] block flex-1 bg-main-border" />
              </span>
            </div>

            <ul className="px-3.5 grid gap-2 mb-5 mt-5">
              <li className="inline-block text-sm font-normal leading-5 text-left text-main-text/70">
                <IoCheckmarkCircleOutline className="inline text-lg mr-1.5" />
                <span className="inline">Access to all basic features.</span>
              </li>
              <li className="inline-block text-sm font-normal leading-5 text-left text-main-text/70">
                <IoCheckmarkCircleOutline className="inline text-lg mr-1.5" />
                <span className="inline">2 Threads weekly.</span>
              </li>
              <li className="inline-block text-sm font-normal leading-5 text-left text-main-text/70">
                <IoCheckmarkCircleOutline className="inline text-lg mr-1.5" />
                <span className="inline">Basic Help Center.</span>
              </li>

              <li className="inline-block text-sm font-normal leading-5 text-left text-main-text/70">
                <IoCheckmarkCircleOutline className="inline text-lg mr-1.5" />
                <span className="inline">Unlimited Interactions.</span>
              </li>
              <li className="inline-block text-sm font-normal leading-5 text-left text-main-text/70">
                <IoCheckmarkCircleOutline className="inline text-lg mr-1.5" />
                <span className="inline">Secure Data Storage.</span>
              </li>
              <li className="inline-block text-sm font-normal leading-5 text-left text-main-text/70">
                <IoCheckmarkCircleOutline className="inline text-lg mr-1.5" />
                <span className="inline">File size cap.</span>
              </li>
            </ul>

            <div className="flex flex-col mt-auto">
              <span className="relative flex items-center w-full gap-2 mt-auto text-xs text-center">
                <span className="h-[1px] block flex-1 bg-main-border" />
                <span className="text-sm text-main-text/70">It's always free!</span>
                <span className="h-[1px] block flex-1 bg-main-border" />
              </span>
              <span className="block px-2.5">
                <a
                  href={getDiscordURL()}
                  className="mt-2 flex-1 px-6 min-h-[38px] gap-2 text-sm text-main-text/70 border rounded-md bg-main-800 border-main-border  hover:border-white/70  duration-150 flex items-center justify-center"
                >
                  Continue with Discord
                  <SiDiscord size={18} />
                </a>
              </span>
            </div>
          </div>
          <div className="border-2 border-green-900/40 rounded-lg py-3.5 relative flex flex-col">
            <span className="absolute block mx-auto text-green-400 bg-green-900 border-green-400 rounded-md left-3 max-w-max -top-3">
              <p className="px-3 py-0.5 text-sm leading-5 font-normal text-green-400">Best Value</p>
            </span>
            <div className="grid gap-0.5">
              <h1 className="font-medium ">Lite</h1>
              <p className="max-w-md px-5 text-sm font-normal leading-5 text-main-text/70">Supporter</p>
              <h2 className="max-w-2xl text-4xl font-semibold leading-snug tracking-normal ">$4.99</h2>
              <span className="relative flex items-center w-full gap-2 text-xs text-center">
                <span className="h-[1px] block flex-1 bg-main-border" />
                <span className="text-sm text-main-text/70">Billed Monthly</span>
                <span className="h-[1px] block flex-1 bg-main-border" />
              </span>
            </div>

            <ul className="px-3.5 grid gap-2 mb-5 mt-5">
              <li className="inline-block text-sm font-normal leading-5 text-left text-main-text/70">
                <IoCheckmarkCircleOutline className="inline text-lg mr-1.5" />
                <span className="inline">All hobbyist features.</span>
              </li>
              <li className="inline-block text-sm font-normal leading-5 text-left text-main-text/70">
                <IoCheckmarkCircleOutline className="inline text-lg mr-1.5" />
                <span className="inline">15 Threads weekly.</span>
              </li>
              <li className="inline-block text-sm font-normal leading-5 text-left text-main-text/70">
                <IoCheckmarkCircleOutline className="inline text-lg mr-1.5" />
                <span className="inline">24/7 Help Center.</span>
              </li>
              <li className="inline-block text-sm font-normal leading-5 text-left text-main-text/70">
                <IoCheckmarkCircleOutline className="inline text-lg mr-1.5" />
                <span className="inline">Secure Data Storage.</span>
              </li>
              <li className="inline-block text-sm font-normal leading-5 text-left text-main-text/70">
                <IoCheckmarkCircleOutline className="inline text-lg mr-1.5" />
                <span className="inline">50mb Files.</span>
              </li>
              <li className="inline-block text-sm font-normal leading-5 text-left text-main-text/70">
                <IoCheckmarkCircleOutline className="inline text-lg mr-1.5" />
                <span className="inline">Directly support creators.</span>
              </li>
              <li className="inline-block text-sm font-normal leading-5 text-left text-main-text/70">
                <IoCheckmarkCircleOutline className="inline text-lg mr-1.5" />
                <span className="inline">Support on-going development.</span>
              </li>
              <li className="inline-block text-sm font-normal leading-5 text-left text-main-text/70">
                <IoCheckmarkCircleOutline className="inline text-lg mr-1.5" />
                <span className="inline">Private Discord access.</span>
              </li>
              <li className="inline-block text-sm font-normal leading-5 text-left text-main-text/70">
                <IoCheckmarkCircleOutline className="inline text-lg mr-1.5" />
                <span className="inline">Influence on new features.</span>
              </li>
            </ul>

            <div className="flex flex-col mt-auto">
              <span className="relative flex items-center w-full gap-2 mt-auto text-xs text-center">
                <span className="h-[1px] block flex-1 bg-main-border" />
                <span className="text-sm text-main-text/70">Like what you see?</span>
                <span className="h-[1px] block flex-1 bg-main-border" />
              </span>
              <span className="block px-2.5">
                <button className="px-6 min-h-[38px] mt-2.5 w-full text-sm border border-green-900 rounded-md text-green-400 bg-green-900/40 duration-150 hover:border-green-400">
                  Subscribe Now
                </button>
              </span>
            </div>
          </div>
          <div className="border border-main-border rounded-lg min-h-[400px] py-3.5 flex flex-col">
            <div className="grid gap-0.5">
              <h1 className="font-medium ">Pro</h1>
              <p className="max-w-md px-5 text-sm font-normal leading-5 text-main-text/70">Super-Supporter</p>
              <h2 className="max-w-2xl text-4xl font-semibold leading-snug tracking-normal ">$9.99</h2>
              <span className="relative flex items-center w-full gap-2 text-xs text-center">
                <span className="h-[1px] block flex-1 bg-main-border" />
                <span className="text-sm text-main-text/70">Billed Monthly</span>
                <span className="h-[1px] block flex-1 bg-main-border" />
              </span>
            </div>

            <ul className="px-3.5 grid gap-2 mb-5 mt-5">
              <li className="inline-block text-sm font-normal leading-5 text-left text-main-text/70">
                <IoCheckmarkCircleOutline className="inline text-lg mr-1.5" />
                <span className="inline">All hobbyist and lite features.</span>
              </li>
              <li className="inline-block text-sm font-normal leading-5 text-left text-main-text/70">
                <IoCheckmarkCircleOutline className="inline text-lg mr-1.5" />
                <span className="inline">Unlimited Threads weekly.</span>
              </li>
              <li className="inline-block text-sm font-normal leading-5 text-left text-main-text/70">
                <IoCheckmarkCircleOutline className="inline text-lg mr-1.5" />
                <span className="inline">Unlimited file size.</span>
              </li>

              <li className="inline-block text-sm font-normal leading-5 text-left text-main-text/70">
                <IoCheckmarkCircleOutline className="inline text-lg mr-1.5" />
                <span className="inline">Vote on new features.</span>
              </li>
              <li className="inline-block text-sm font-normal leading-5 text-left text-main-text/70">
                <IoCheckmarkCircleOutline className="inline text-lg mr-1.5" />
                <span className="inline">Create suggestions for development team.</span>
              </li>
            </ul>

            <div className="flex flex-col mt-auto">
              <span className="relative flex items-center w-full gap-2 mt-auto text-xs text-center">
                <span className="h-[1px] block flex-1 bg-main-border" />
                <span className="text-sm text-main-text/70">Like what you see?</span>
                <span className="h-[1px] block flex-1 bg-main-border" />
              </span>
              <span className="block px-2.5">
                <button className="w-full  mx-auto flex-1 px-6 min-h-[38px] gap-2 text-sm text-main-text/70 border rounded-md bg-main-800 border-main-border  hover:border-white/70  duration-150 flex items-center justify-center mt-2">
                  Subscribe Now
                </button>
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

const Navbar = () => {
  const isAtTop = useWindowScroll();
  return (
    <nav
      className={`flex items-center justify-center  mx-auto z-100
      fixed left-0 right-0  duration-200  rounded-full py-1 px-3 mt-5
     ${isAtTop ? "bg-transparent top-8  max-w-4xl" : "backdrop-blur  top-[0rem] bg-main-border  max-w-xl"}
    `}
    >
      <div className="flex items-center gap-1">
        <div className="flex items-center justify-center -space-x-3">
          <span className="block w-6 h-6 border-2 rounded-full border-main-900 bg-main-300" />
          <span className="block w-8 h-8 border-4 rounded-full border-main-900 bg-main-500" />
        </div>
        <h1 className="font-medium ">Tavern</h1>
      </div>
      <ul className="flex items-center gap-5 ml-auto text-main-text/70">
        <li className="text-sm font-normal leading-5 duration-150 hover:cursor-pointer hover:text-main-text text-main-text/70">
          What is Tavern?
        </li>
        <li className="text-sm font-normal leading-5 duration-150 hover:cursor-pointer hover:text-main-text text-main-text/70">
          Features
        </li>
        <li className="text-sm font-normal leading-5 duration-150 hover:cursor-pointer hover:text-main-text text-main-text/70">
          Pricing
        </li>
      </ul>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="flex items-start max-w-4xl pt-10 mx-auto mb-10 border-t border-dashed border-main-border ">
      <ul className="grid gap-1 max-w-max">
        <div className="flex items-center gap-1 mb-1.5">
          <div className="flex items-center justify-center -space-x-3">
            <span className="block w-6 h-6 border-2 rounded-full border-main-900 bg-main-300" />
            <span className="block w-8 h-8 border-4 rounded-full border-main-900 bg-main-500" />
          </div>
        </div>
        <li className="text-sm font-normal leading-5 text-main-text/70">Built with love from,</li>
        <li className="text-sm font-normal leading-5 text-main-text/70">Italia and United</li>
        <li className="text-sm font-normal leading-5 text-main-text/70">Kingdom.</li>
      </ul>

      <div className="flex items-start justify-between w-full max-w-xs ml-auto">
        <ul className="grid flex-1 gap-1 max-w-max">
          <h1 className="font-medium   mb-1.5">Legal</h1>
          <li className="text-sm font-normal leading-5 duration-150 hover:cursor-pointer hover:text-main-text text-main-text/70">
            Cookie Policy
          </li>
          <li className="text-sm font-normal leading-5 duration-150 hover:cursor-pointer hover:text-main-text text-main-text/70">
            Privacy Policy
          </li>
          <li className="text-sm font-normal leading-5 duration-150 hover:cursor-pointer hover:text-main-text text-main-text/70">
            Terms of Service
          </li>
        </ul>

        <ul className="grid flex-1 gap-1 max-w-max">
          <h1 className="font-medium   mb-1.5">Our Socials</h1>
          <li className="text-sm font-normal leading-5 duration-150 hover:cursor-pointer hover:text-main-text text-main-text/70">
            Twitter
          </li>
          <li className="text-sm font-normal leading-5 duration-150 hover:cursor-pointer hover:text-main-text text-main-text/70">
            Discord
          </li>
          <li className="text-sm font-normal leading-5 duration-150 hover:cursor-pointer hover:text-main-text text-main-text/70">
            Instagram
          </li>
        </ul>
      </div>
    </footer>
  );
};
