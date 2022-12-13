import * as api from "./axios.js";

const fetchSelf = async (next) => {
  try {
    const { data } = await api.getUser();
    next(data);
  } catch (error) {
    console.log(error);
  }
};

const fetchTestUser = async (next) => {
  try {
    const { data } = await api.getTestUser();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export { fetchSelf, fetchTestUser };
