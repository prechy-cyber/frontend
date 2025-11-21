// src/api.js
import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL ||"https://backenddeplytest.onrender.com"
});

// Log the base URL to make sure it’s correct
console.log("🌐 API base URL:", API.defaults.baseURL);

// Attach JWT to every request automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;

