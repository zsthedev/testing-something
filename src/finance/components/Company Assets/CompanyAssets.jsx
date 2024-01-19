import React, { useState } from "react";
import { Link } from "react-router-dom";
import placeholder from "../../assets/placeholder.jpg";
import logo from "../../assets/logo.png";
import Attendance from "../../../student/components/attendance history/Attendance";
import "./assets.scss";

const CompanyAssets = () => {
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
              <Link to="/f/feerecord">Fee Record</Link>
            </li>

            <li>
              <Link to="/f/incomerecord">Income Record</Link>
            </li>

            <li>
              <Link to="/f/expenserecord">Expense Record</Link>
            </li>
            <li>
              <Link to="/f/companyassets" className="active">
                Company Assets
              </Link>
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

            <div className="company-assets">
              <h2>Current Month</h2>
              <div className="company-assets-row">
                <Attendance text="Income"></Attendance>
                <Attendance text="Expense"></Attendance>
                <Attendance text="Assets"></Attendance>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyAssets;
