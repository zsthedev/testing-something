import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <section className="error-section">
      <p>Error 404</p>
      <Link to={"/"}>Back to Home</Link>
    </section>
  );
};

export default Error404;
