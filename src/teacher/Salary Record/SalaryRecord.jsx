import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/logo.png";
import placeholder from "./../assets/placeholder.jpg";
import "./salary.scss";
import Salary from "./Salary";

const SalaryRecord = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");

  const role = "teacher";

  return (
    <section className="profile">
      <div className="row">
        <div className="col1">
          <div className="col1-content">
            <div className="profile-details salary-section">
              <h2>Salary Record</h2>

              <div className="salary-row">
                <Salary
                  month="December"
                  date="01-2023"
                  amount="20000"
                  status="Paid"
                ></Salary>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalaryRecord;
