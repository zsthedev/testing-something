import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import placeholder from "../assets/placeholder.jpg";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllInvoices, getAllStudents } from "../../redux/actions/finance";
import { getAllCourses } from "../../redux/actions/course";
import Loader from "../../Loader";
import { logout } from "../../redux/actions/user";

const SalaryGeneration = () => {
  const dispatch = useDispatch();

  const [image, setImage] = useState("");
  const [name, setName] = useState("");

  const [status, setStatus] = useState("");

  const role = "teacher";

  const { loading, message, error } = useSelector((state) => state.finance);
  const [visible, setVisible] = useState(false);

  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  useEffect(() => {
    dispatch(getAllStudents());
    dispatch(getAllCourses());
    dispatch(getAllInvoices());
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <section className="profile">
      <div className="row">
        <div className="col">
          <img src={logo} alt="" />
          <ul>
            <li>
              <Link className="active" to="/finance">
                Salary Generation
              </Link>
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
              <Link to="/f/invoices">Invoices</Link>
            </li>
          </ul>
        </div>
        <div className="col1">
          <div className="col1-content">
            <div className="pr-image-row">
              <div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalaryGeneration;
