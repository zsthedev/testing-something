import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import { users } from "../../../data";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/actions/user";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(login(email, password));

    console.log("working");
  };

  return (
    <section className="login about">
      <div className="row">
        <form action="" onSubmit={submitHandler}>
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type={visible ? "text" : "password"}
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {visible ? (
            <FaEyeSlash
              className="pass-icon"
              onClick={() => setVisible(!visible)}
            />
          ) : (
            <FaEye className="pass-icon" onClick={() => setVisible(!visible)} />
          )}
          <Link to={"/forgotpassword"}>Forgot Password?</Link>
          <button className="accentBtn">Login</button>
          <p>
            New Here? <Link to={"/signup"}>Create Account</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
