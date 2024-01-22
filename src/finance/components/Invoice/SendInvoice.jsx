import React, { useState } from "react";
import { Link } from "react-router-dom";
import placeholder from "../../assets/placeholder.jpg";
import logo from "../../assets/logo.png";
import Attendance from "../../../student/components/attendance history/Attendance";
import Invoice from "./Invoice";
import "./invoice.scss";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/actions/user";

const SendInvoice = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");

  const [status, setStatus] = useState("");
  const [visible, setVisible] = useState("");
  const dispatch = useDispatch();
  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  const invoices = useSelector((state) => state.finance.invoices.invoices);

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
              <Link to="/f/companyassets">Company Assets</Link>
            </li>

            <li>
              <Link to="/f/inovices" className="active">
                Invoices
              </Link>
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

            <div className="income-record">
              <h2>Invoices</h2>
              <div className="create-invoice-row">
                <Link to="/f/createinvoice">Create Invoice</Link>
              </div>
              <div className="invoice-row">
                {invoices.map((i) => (
                  <Invoice
                    image={i.avatar}
                    name={i.name}
                    amount={"$" + i.amount}
                    status={i.status}
                    item={i.items[0].title}
                  ></Invoice>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SendInvoice;
