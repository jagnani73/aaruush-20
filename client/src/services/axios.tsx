import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:6600",
});

export default instance;
