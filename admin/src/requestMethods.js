import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "";
console.log(localStorage.getItem("persist:root").currentUser);
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
