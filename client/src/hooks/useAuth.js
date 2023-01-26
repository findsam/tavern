import { useRouter } from "next/router";
import { Context } from "../store/context";
import { useContext, useEffect, useState } from "react";
import { fetchUserDetails } from "../static/api";

export default () => {
  const { state, dispatch } = useContext(Context);
  const [isUser, setIsUser] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (state.user !== null) setIsUser(true);

    if (!state.user)
      (async () => {
        (await fetchUserDetails(dispatch, router)) && setIsUser(true);
      })();
  }, []);

  return isUser;
};
