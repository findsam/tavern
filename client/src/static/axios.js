import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: true,
  credentials: "include",
});

export const getUserDetails = () => API.get("/getUserDetails");
export const logout = () => API.get("/logout");

export const fetchTest = (type) => API.get(`/fetch/${type}`);
export const fetchIndividualThread = (postId) => API.get(`/fetchIndividualThread/${postId}`);
export const fetchThreadsByName = (postName) => API.get(`/fetchIndividualThread/${postName}`);
