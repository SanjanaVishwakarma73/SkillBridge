import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // MUST include /api
});

export default API;