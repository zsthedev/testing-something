import React, { useState } from "react";
import { Link } from "react-router-dom";
import placeholder from "../../assets/placeholder.jpg";
import logo from "../../assets/logo.png";

const IssueCertificate = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");

  const [status, setStatus] = useState("");

  return (
    <section className="profile">
      <div className="row">
        <div className="col">
          <img src={logo} alt="" />
          <ul>
            <li>
              <Link to="/qc">Students</Link>
            </li>

            <li>
              <Link to="/qc/teachers">Teachers</Link>
            </li>

            <li>
              <Link to="/qc/issuecertificates" className="active">
                Issue Certificate
              </Link>
            </li>
          </ul>
        </div>
        <div className="col1">
          <div className="col1-content">
            <div className="pr-image-row">
              <div>
                Hi, {name}
                <img src={image == "" ? placeholder : image} alt="" />
              </div>
            </div>

            <div className="q-students">
              <h2>Issue Certificates</h2>
              <div className="q-students-row"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IssueCertificate;
