import { FaDiscord } from "react-icons/fa";
export default function Auth() {
  return (
    <div className="min-h-screen min-w-screen h-full w-full flex items-center justify-center">
      <div className="text-center flex flex-col items-center justify-center gap-5">
        <h1 className="text-4xl font-semibold tracking-wide">Log in</h1>
        <form className="flex flex-col">
          <button className="border rounded-sm border-white/20 flex items-center text-center justify-center min-w-[300px] py-1">
            <span className="mr-1">Continue with Discord</span>
            <FaDiscord />
          </button>
          <span>You can also continue as Guest.</span>
        </form>
      </div>
    </div>
  );
}
