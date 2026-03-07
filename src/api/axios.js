import axios from "axios";

const api = axios.create({
  baseURL: "https://pasoje9635.pythonanywhere.com/",
});

export default api;
