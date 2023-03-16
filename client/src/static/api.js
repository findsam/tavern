import * as api from "./axios.js";

const fetchUserDetails = async (next, router) => {
  try {
    const { data } = await api.getUserDetails();
    next({
      type: "SET_USER",
      payload: data,
    });
    return true;
  } catch (error) {
    return router.push("/landing");
  }
};

const handleLogout = async (next, router) => {
  try {
    await api.logout();
    next({
      type: "SET_USER",
      payload: null,
    });
    return router.push("/landing");
  } catch (error) {
    return router.push("/landing");
  }
};

const fetchTest = async (next, type) => {
  try {
    const { data } = await api.fetchTest(type);
    next(data);
  } catch (error) {
    console.log(error);
  }
};

const fetchIndividualThread = async (next, postId, router) => {
  try {
    const { data } = await api.fetchIndividualThread(postId);
    next(data);
  } catch (error) {
    return router.push("/feed");
  }
};

const fetchThreadsByName = async (next, postName, router) => {
  try {
    const { data } = await api.fetchThreadsByName(postName);
    next(data);
  } catch (error) {
    return router.push("/feed");
  }
};

export { fetchUserDetails, handleLogout, fetchTest, fetchIndividualThread, fetchThreadsByName };
