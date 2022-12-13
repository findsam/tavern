import { getDiscordURL } from "../static/util";
import { testAPI } from "../static/axios";
export default function Home() {
  return (
    <div className="w-full max-w-5xl mx-auto mt-20">
      <a href={getDiscordURL()}>Login with Google</a>
      <br /> <br />
      <button onClick={testAPI}>TestAPI</button>
    </div>
  );
}
