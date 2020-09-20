import axios from "axios";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:4200/api/v1"
      : "https://aaruush20.herokuapp.com",
});

export default instance;
