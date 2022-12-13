import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: true,
  credentials: "include",
});

export const getUserDetails = () => API.get("/getUserDetails");
