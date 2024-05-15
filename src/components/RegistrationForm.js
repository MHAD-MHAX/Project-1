import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://todo-nodejs-gwvg.onrender.com/auth/register", {
        email,
        name,
        password,
      });
      setMessage(response.data.message);
      navigate("/")
    } catch (error) {
      console.error("Registration failed:", error.response.data.error);
      setMessage(error.response.data.error);
    }
  };

  return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
    <main className="pa4 black-80">
      <div className="measure">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="f1 fw6 ph0 mh0">Register</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
            <input
              className="pa2 input-reset ba  hover-bg-black hover-white w-100"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              required
            />
          </div>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
            <input
              className="pa2 input-reset ba  hover-bg-black hover-white w-100"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              required
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
              required
            />
          </div>
        </fieldset>
        <div className="">
          <input
            onClick={handleSubmit}
            className="b ph3 pv2 input-reset ba b--black  grow pointer f6 dib"
            type="submit"
            value="Register"
          />
        </div>
      </div>
    </main>
    {message && <p>{message}</p>}
  </article>
 
  );
};

export default Registration;