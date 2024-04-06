import { studentType } from 'Models';
import axios from "axios";

export const  URL_BACK = "http://localhost:8090";
axios.defaults.baseURL = "http://localhost:8090";
export const  URL_STUDENT = URL_BACK+"/student";

export const getStudents = () => axios.get('/student/all');
export const createStudent = (student:studentType) => axios.post(URL_STUDENT + "/add", student);
export const getStudentsByParentId = (id:number) => axios.get(URL_STUDENT + "/parentid/" + id);
export const deleteStudentById = (id:number) => axios.delete(URL_STUDENT + "/" + id);
export const getStudentById = (id:number) => axios.get(URL_STUDENT + "/" + id);
export const getUser = () => axios.get(URL_BACK + "/me" );