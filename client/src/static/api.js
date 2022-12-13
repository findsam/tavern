import * as api from "./axios.js";

const fetchSelf = async (next) => {
  try {
    const { data } = await api.getUser();
    // console.log(data);
    next(data);
  } catch (error) {
    console.log(error);
  }
};

export { fetchSelf };
