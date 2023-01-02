import * as api from "./axios.js";

const fetchUserDetails = async (next, router) => {
  try {
    const { data } = await api.getUserDetails();
    next(data);
    return true;
  } catch (error) {
    return router.push("/auth");
  }
};

const handleLogout = async (next) => {
  try {
    await api.logout();
    next(null);
  } catch (error) {}
};

export { fetchUserDetails, handleLogout };
