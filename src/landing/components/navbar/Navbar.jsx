import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./navbar.scss";
import placeholder from "../../../assets/placeholder.jpg";
import { logout } from "../../../redux/actions/user";
import { useDispatch } from "react-redux";

const Navbar = ({ isAuthenticated, user }) => {
  const [visible, setVisible] = useState(false);
  const [fVisible, setfVisible] = useState(false);
  const [tVisible, settVisible] = useState(false);

  const image = user && user.avatar.url;

  const dispatch = useDispatch();
  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <>
      {/* General Navigation */}
      <nav className={isAuthenticated === false ? "show" : "hide"}>
        <img src={logo} className={isAuthenticated ? "hide" : "logo"} alt="" />
        <ul className="">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>

      {/* Student Navigation */}
      <nav
        className={
          isAuthenticated === true && user.role === "student" ? "show" : "hide"
        }
      >
        <div className="logo-row">
          <img src={logo} className="logo" alt="" />
          <p>Student Management</p>
        </div>
        <ul className="">
          <li>
            <Link to="/profile">Profile</Link>
          </li>

          <li>
            <Link to="/classchedule">Class Schedule</Link>
          </li>

          <li>
            <Link to="/attendancehistory">Attendance History</Link>
          </li>

          <li>
            <Link to="student/examhistory">Exam History</Link>
          </li>

          <li>
            <Link to="student/performancereport">Performance Report</Link>
          </li>
          <li>
            <Link to="student/feerecord">Fee Record</Link>
          </li>

          <li>
            <Link to="/contactmenu">Contact Menu</Link>
          </li>

          <li>
            <div className="dropdown">
              <img
                id="pr-image"
                src={image == "" ? placeholder : image}
                alt=""
                onClick={() => setVisible(!visible)}
              />
              <ul className={visible ? "show" : "hide"}>
                <li onClick={clickHandler}>Logout</li>
                <hr />
                <li>Settings</li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
      {/* Finance Navigation */}
      <nav
        className={
          isAuthenticated === true && user.role === "finance" ? "show" : "hide"
        }
      >
        <div className="logo-row">
          <img src={logo} className="logo" alt="" />
          <p>Finance Management</p>
        </div>
        <ul className="">
          <li>
            <Link to="/profile">Salary Genration</Link>
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

          <li>
            <div className="dropdown">
              <img
                id="pr-image"
                src={image == "" ? placeholder : image}
                alt=""
                onClick={() => setfVisible(!fVisible)}
              />
              <ul className={fVisible ? "show" : "hide"}>
                <li onClick={clickHandler}>Logout</li>
                <hr />
                <li>Settings</li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>

      {/* Teacher Navigation */}
      <nav
        className={
          isAuthenticated === true && user.role === "teacher" ? "show" : "hide"
        }
      >
        <div className="logo-row">
          <img src={logo} className="logo" alt="" />
          <p>Teacher Management</p>
        </div>
        <ul className="">
          <li>
            <Link to="/profile">Profile</Link>
          </li>

          <li>
            <Link to="/classchedule">Class Scehdule</Link>
          </li>

          <li>
            <Link to="/attendancehistory">Attendance History</Link>
          </li>

          <li>
            <Link to="/t/salaryrecords">Salary Record</Link>
          </li>

          <li>
            <Link to="/t/students">Students</Link>
          </li>
          <li>
            <Link to="/contactmenu">Complaint Records</Link>
          </li>

          <li>
            <Link to="/t/performance">Teacher Performance</Link>
          </li>

          <li>
            <div className="dropdown">
              <img
                id="pr-image"
                src={image == "" ? placeholder : image}
                alt=""
                onClick={() => settVisible(!tVisible)}
              />
              <ul className={tVisible ? "show" : "hide"}>
                <li onClick={clickHandler}>Logout</li>
                <hr />
                <li>Settings</li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>

      {/* HR Navigation */}
      <nav
        className={
          isAuthenticated === true && user.role === "hr" ? "show" : "hide"
        }
      >
        <div className="logo-row">
          <img src={logo} className="logo" alt="" />
          <p>Human Resources</p>
        </div>
        <ul className="">
          <li>
            <Link to="/hr">Teachers</Link>
          </li>

          <li>
            <Link to="/hr/issueletters">Issue Letters</Link>
          </li>

          <li>
            <Link to="/hr/teachertraining">Teacher Training</Link>
          </li>

          <li>
            <div className="dropdown">
              <img
                id="pr-image"
                src={image == "" ? placeholder : image}
                alt=""
                onClick={() => settVisible(!tVisible)}
              />
              <ul className={tVisible ? "show" : "hide"}>
                <li onClick={clickHandler}>Logout</li>
                <hr />
                <li>Settings</li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>

      {/* QC Navigation */}
      <nav
        className={
          isAuthenticated === true && user.role === "qc" ? "show" : "hide"
        }
      >
        <div className="logo-row">
          <img src={logo} className="logo" alt="" />
          <p>Quality Control</p>
        </div>
        <ul className="">
          <li>
            <Link to="/qc">Students</Link>
          </li>

          <li>
            <Link to="/qc/teachers">Teachers</Link>
          </li>

          <li>
            <Link to="/qc/issuecertificates">Issue Certificate</Link>
          </li>

          <li>
            <div className="dropdown">
              <img
                id="pr-image"
                src={image == "" ? placeholder : image}
                alt=""
                onClick={() => settVisible(!tVisible)}
              />
              <ul className={tVisible ? "show" : "hide"}>
                <li onClick={clickHandler}>Logout</li>
                <hr />
                <li>Settings</li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
