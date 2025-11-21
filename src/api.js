// src/api.js
import axios from "axios";

// Use Vite's environment variable
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://backenddeplytest.onrender.com"
});

// Log to make sure the URL is correct
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


