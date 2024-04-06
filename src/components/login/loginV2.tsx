import { IonButton, IonCheckbox, IonIcon, IonInput } from "@ionic/react";
import "./loginV2.css";
import { lockClosedOutline, mailOutline } from "ionicons/icons";
import { useHistory } from "react-router";
import axios from "axios";
import { useState } from "react";
import { URL_BACK } from "../../Services/StrudentService";

function Login() {
  const history = useHistory();
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${URL_BACK}/login`, credentials, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true, // Enable sending cookies
      });

      console.log('Login successful:', response.data);
      history.push('/ERP_Project/dashBoard');
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred during login.');
      console.error('Error logging in:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login_container">
      <section className="login_section">
        <form onSubmit={handleLogin}>
          <h1 className="login_h1">Login</h1>
          <div className="inputbox">
            <IonIcon className="login_icon" slot="start" icon={mailOutline}></IonIcon>
            <input 
              type="email" 
              name="username" 
              value={credentials.username} 
              onChange={handleChange} 
              required 
            />
            <label htmlFor="">Id</label>
          </div>
          <div className="inputbox">
            <IonIcon className="login_icon" slot="start" icon={lockClosedOutline}></IonIcon>
            <input 
              type="password" 
              name="password" 
              value={credentials.password} 
              onChange={handleChange} 
              required 
            />
            <label htmlFor="">Password</label>
          </div>
          <div className="forget">
            <label htmlFor="">
              <input type="checkbox" />
              Remember Me
            </label>
            <a href="#">Forget Password</a>
          </div>
          <button className="login_button" type="submit">Log in</button>
          <div className="register">
            <p>
              Don't have a account <a href="/ERP_Project/signup">Register</a>
            </p>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Login;
