import { getDiscordURL } from "../static/util";
import { fetchTokens, fetchUserDetails } from "../static/api";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (user === null) {
      (async () => await fetchUserDetails(setUser))();
    }
  }, [user]);

  return (
    <div className="w-full max-w-5xl mx-auto mt-20">
      <a href={getDiscordURL()}>Login with Discord</a>
      <br /> <br />
      <h1>{user?.data?.username}</h1>
    </div>
  );
}
