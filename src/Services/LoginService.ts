import axios from "axios";
import { URL_BACK } from "./StrudentService";

interface LoginCredentials {
    username: string;
    password: string;
  }
  
  export const login = async (credentials: LoginCredentials): Promise<any> => {
    try {
      const response = await axios.post(`${URL_BACK}/login`, credentials);
      return response.data; // Handle login response (e.g., token, user info)
    } catch (error) {
      console.error('Error logging in:', error);
      throw error; // Re-throw for proper error handling in consuming components
    }
  };