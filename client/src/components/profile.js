import { useContext } from "react";
import { useRouter } from "next/router";
import { Context } from "../store/context";
export default function Profile() {
  const { state, dispatch } = useContext(Context);

  const { asPath } = useRouter();
  const username = asPath.split("/").slice(-1);

  //   const post = dummyData.find((_) => _.id === +slug);
  //   const liked = state.favourites.find((_) => _.id == post.id);
  return <div>{username}s profile</div>;
}
