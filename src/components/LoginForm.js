import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null); // New state for handling error messages
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://todo-nodejs-gwvg.onrender.com/auth/login", {
        email,
        password,
      });
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      navigate("/todo");
    } catch (error) {
      console.error("Authentication failed:", error);
      setToken(null);
      localStorage.removeItem("token");
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data); // Set the error message if present in the error response
      } else {
        setErrorMessage("You dont have an account registered. Please try again.");
      }
    }
  };

  return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
    <main className="pa4 black-80">
      <div className="measure">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f1 fw6 ph0 mh0">Sign In</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
            <input
              className="pa2 input-reset ba hover-bg-black hover-white w-100"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            />
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
            <input
              className="b pa2 input-reset ba  hover-bg-black hover-white w-100"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
            />
          </div>
        </fieldset>
        <div className="">
          <input
            onClick={handleSubmit}
            className="b ph3 pv2 input-reset ba b--black  grow pointer f6 dib"
            type="submit"
            value="Sign in"
          />
        </div>
    
      </div>
      <div>
                <p ><Link  className="f6 dim black db pointer"  to="/register">Register</Link></p>
          </div>
                  {errorMessage && <div style ={{ color: "red"

        }}>{errorMessage}</div>}{" "}
    </main>

  </article>

    
  );
};

export default Login;