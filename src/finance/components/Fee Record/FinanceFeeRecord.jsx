import React, { useState } from "react";
import { Link } from "react-router-dom";
import placeholder from "../../assets/placeholder.jpg";
import logo from "../../assets/logo.png";
import Fee from "./Fee";
import "./financefee.scss";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/actions/user";

const FinanceFeeRecord = () => {
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
