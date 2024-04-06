import axios from "axios";
import { URL_BACK } from "./StrudentService";
import DiscoutType from "../Models/DiscountType";

// Enable sending cookies for cross-origin requests
axios.defaults.withCredentials = true;

export const getAllDiscount = () => axios.get(URL_BACK + "/remise/all");
export const addDiscount = (discount:DiscoutType) => axios.post(URL_BACK + "/remise/add", discount);
