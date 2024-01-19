import React, { useState } from "react";
import { Link } from "react-router-dom";
import placeholder from "../../assets/placeholder.jpg";
import logo from "../../assets/logo.png";
import Fee from "./Fee";
import "./financefee.scss";

const FinanceFeeRecord = () => {
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
              <Link to="/finance">Salary Generation</Link>
            </li>

            <li>
              <Link to="/f/feerecord" className="active">
                Fee Record
              </Link>
            </li>

            <li>
              <Link to="/f/incomerecord">Income Record</Link>
            </li>

            <li>
              <Link to="/f/expenserecord">Expense Record</Link>
            </li>
            <li>
              <Link to="/f/companyassets">Company Assets</Link>
            </li>
            <li>
              <Link to="/f/invoices">Invoices</Link>
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

            <div className="fee-r-row">
              <h2>Fee Record</h2>
              <Fee></Fee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinanceFeeRecord;
