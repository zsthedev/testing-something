import React, { useState } from "react";
import { Link } from "react-router-dom";
import placeholder from "../../assets/placeholder.jpg";
import logo from "../../assets/logo.png";
import Expense from "./Expense";
import "./expense.scss";
import { logout } from "../../../redux/actions/user";
import { useDispatch } from "react-redux";

const ExpenseRecord = () => {
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
              <Link to="/f/expenserecord" className="active">
                Expense Record
              </Link>
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
              <div className="dropdown">
                <img
                  id="pr-image"
                  src={image == "" ? placeholder : image}
                  alt=""
                  onClick={() => setVisible(!visible)}
                />
                <ul className={visible ? "show" : "hide"}>
                  <li onClick={clickHandler}>Logout</li>
                </ul>
              </div>
            </div>

            <div className="expense">
              <h2>Current Month</h2>
              <div className="expense-row">
                <Expense></Expense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpenseRecord;
