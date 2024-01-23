import React, { useState } from "react";
import { Link } from "react-router-dom";
import placeholder from "../../assets/placeholder.jpg";
import logo from "../../assets/logo.png";
import Attendance from "../../../student/components/attendance history/Attendance";
import "./assets.scss";
import { logout } from "../../../redux/actions/user";
import { useDispatch } from "react-redux";

const CompanyAssets = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");

  const [status, setStatus] = useState("");
  const [visible, setVisible] = useState("");

  const dispatch = useDispatch();

  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <section className="profile">
      <div className="row">
        <div className="col1">
          <div className="col1-content">
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
