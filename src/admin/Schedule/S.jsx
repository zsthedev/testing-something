import React from "react";
import { Link } from "react-router-dom";

const S = ({ title, month, link, name }) => {
  return (
    <div id="s">
      <p>{title}</p>
      <p>{name}</p>
      <p>{month}</p>
      <Link to={link}>Visit</Link>
    </div>
  );
};

export default S;
