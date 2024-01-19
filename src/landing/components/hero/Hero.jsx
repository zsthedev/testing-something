import React from "react";
import { Link } from "react-router-dom";
import "./hero.scss";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="img-box">
          <div className="overlay">
            <div className="content">
              <h1>
                The best of you are those who learn the Qur’an and teach it
              </h1>
              <div className="btn-row">
                <Link to={"/login"}>Login</Link>
                <Link to={"/signup"}>Create Account</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
