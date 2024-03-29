import axios from "axios";
import comman from "resources/comman.json";

axios.defaults.baseURL = comman.BASE_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Referrer-Policy"] = "https://react-query-issue-tracker.ui.dev/";

axios.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
