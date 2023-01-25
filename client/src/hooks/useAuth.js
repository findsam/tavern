import { useRouter } from "next/router";
import { Context } from "../store/context";
import { useContext, useEffect, useState } from "react";
import { fetchUserDetails } from "../static/api";

export default () => {
  const [isAuth, setIsAuth] = useState(false);
  const { state, dispatch } = useContext(Context);
  const router = useRouter();

  useEffect(() => {
    if (!state.user)
      (async () => {
        (await fetchUserDetails(dispatch, router)) && setIsAuth(true);
      })();
  }, []);

  return isAuth;
};
