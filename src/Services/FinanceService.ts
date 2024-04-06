import axios from "axios";
import { URL_BACK } from "./StrudentService";

export const getAllStudentNoPayed = () => axios.get(URL_BACK + "/student/student-not-payed", {
  withCredentials: true // Enable sending cookies
});