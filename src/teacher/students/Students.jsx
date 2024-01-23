import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/logo.png";
import placeholder from "./../assets/placeholder.jpg";
import Salary from "../Salary Record/Salary";
import Student from "./Student";
import "./students.scss";

const Students = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");

  const role = "teacher";

  return (
    <section className="profile">
      <div className="row">
        <div className="col1">
          <div className="col1-content">
            <div className="profile-details salary-section">
              <h2>Students</h2>
              <div className="students-row">
                <Student></Student>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Students;
