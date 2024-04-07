import axios from "axios";
import { URL_BACK } from "./StrudentService";
import ServiceType from "../Models/ServiceType";
import ServiceStateType from "../Models/ServiceStateType";

// Enable sending cookies for cross-origin requests
axios.defaults.withCredentials = true;

export const createServiceState = (serviceState:ServiceStateType) => axios.post(URL_BACK + "/etat-service/add", serviceState);

export const getAllServices = () => axios.get(URL_BACK + "/service/all");

