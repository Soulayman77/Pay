import axios from "axios";
import { URL_BACK } from "./StrudentService";
import ServiceType from "../Models/ServiceType";

// Enable sending cookies for cross-origin requests
axios.defaults.withCredentials = true;

export const createService = (service:ServiceType) => axios.post(URL_BACK + "/service/add", service);

export const getAllServices = () => axios.get(URL_BACK + "/service/all");