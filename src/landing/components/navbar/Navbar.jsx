import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = ({ isAuthenticated, user }) => {
  return (
    <nav className={!isAuthenticated ? "hide" : ""}>
      <img src={logo} className={isAuthenticated ? "hide" : "logo"} alt="" />
      <ul className="">
        <li>
          <Link to="">Home</Link>
        </li>

        <li>
          <Link to="">About</Link>
        </li>

        <li>
          <Link to="">Contact</Link>
        </li>

        <li>
          <Link to="">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
