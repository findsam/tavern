import * as api from "./axios.js";

const fetchUserDetails = async (next) => {
  try {
    const { data } = await api.getUserDetails();
    next(data);
  } catch (error) {
    console.log(error);
  }
};

const handleLogout = async (next) => {
  try {
    await api.logout();
    next(null);
  } catch (error) {}
};

export { fetchUserDetails, handleLogout };
