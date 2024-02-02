import axios from "axios";
import { API_URL } from "../config/config";
const AxiosService = () => {
  //create instance
  const instance = axios.create({
    baseURL: API_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return instance;
};

export default AxiosService;
