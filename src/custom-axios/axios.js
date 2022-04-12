import axios from "axios";

const instance = axios.create({
  baseURL: "https://emt-lab2-193238.herokuapp.com/api",
  headers: {
    "Access-Control-Allow-Origins": "*",
  },
});

export default instance;
