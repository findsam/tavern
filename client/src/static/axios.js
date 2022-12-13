import axios from "axios";
const API = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: true,
});

export const getUser = () => API.get("/");
