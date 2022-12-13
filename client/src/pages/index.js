import { getDiscordURL } from "../static/util";
import { fetchSelf } from "../static/api";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchSelf(setUser);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto mt-20">
      {!user && <a href={getDiscordURL()}>Login with Google</a>}
      <br /> <br />
      {user && <h1>{user?.data?.username}</h1>}
      {/* <button onClick={testAPI}>TestAPI</button> */}
    </div>
  );
}
