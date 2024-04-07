import axios from "axios";
import { URL_BACK } from "./StrudentService";
import ParentType from "../Models/parentType";
// Enable sending cookies for cross-origin requests
axios.defaults.withCredentials = true;
console.log("here's the sent ",parent, "as a body");


export const getParent = (id:number) => axios.get(URL_BACK + "/parent/" + id);
export const createParent = (parent:ParentType) => axios.post(URL_BACK + "/parent/add", parent);
export const getAllParent = () => axios.get(URL_BACK + "/parent/all");