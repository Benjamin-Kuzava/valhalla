import axios from "axios";

// Create new promise
const getToken = () => {
  return new Promise((resolve) => {
    resolve(`Bearer ${localStorage.getItem("token") || null}`);
  });
};

// Determine which API to use
const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://valhalla-api-ruby.herokuapp.com/api"
      : "http://localhost:3000/api",
});

api.interceptors.request.use(
  async function (options) {
    options.headers["Authorization"] = await getToken();
    return options;
  },
  function (error) {
    console.log("Request error: ", error);
    return Promise.reject(error);
  }
);

export default api;
