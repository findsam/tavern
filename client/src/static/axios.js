import axios from "axios";
const API = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: true,
  credentials: "include",
});

export const getUser = () => API.get("/");
export const getTestUser = () => API.get("/getUser");
