import { getDiscordURL } from "../static/util";
import { fetchSelf, fetchTestUser } from "../static/api";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   fetchSelf(setUser);
  // }, []);

  console.log("rendered");
  console.log(user);

  return (
    <div className="w-full max-w-5xl mx-auto mt-20">
      {!user && <a href={getDiscordURL()}>Login with Discord</a>}
      <br /> <br />
      <h1>{user?.data?.username}</h1>
      <button onClick={() => fetchTestUser()}>get user</button>
      <br />
      <button onClick={() => fetchSelf(setUser)}>set user</button>
    </div>
  );
}
