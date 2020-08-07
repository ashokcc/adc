import axios from "axios";
import { BASE_URL } from "../constants/config";
export default function Login(details) {
  console.log(BASE_URL, details);
  return axios.post(`${BASE_URL}/users/login`, details);
}
