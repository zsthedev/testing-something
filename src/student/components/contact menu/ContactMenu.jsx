import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../profile/profile.scss";
import logo from "../../../assets/logo.png";
import Select from "react-select";
import "./contact.scss";
const ContactMenu = ({ isAuthenticated, user }) => {
  const contactOptions = [
    { value: "teacher", label: "Teacher" },
    { value: "finance", label: "Finance" },
  ];

  const role = user.role;

  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");
  return (
    <section className="profile">
      <div className="row">
        <div className="col">
          <img src={logo} alt="" />
          <ul>
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
              <Link
                to={
                  role == "teacher"
                    ? "/teacher/salaryrecord"
                    : "/student/examhistory"
                }
              >
                {role == "teacher" ? "Salary Record" : "Exam Histor"}
              </Link>
            </li>

            <li>
              <Link
                to={
                  role === "teacher"
                    ? "/teacher/students"
                    : "/student/performancereport"
                }
              >
                {role === "teacher" ? "Students" : "Exam History"}
              </Link>
            </li>

            <li>
              <Link
                className="active"
                to={role === "teacher" ? "/contactmenu" : "/student/feerecord"}
              >
                {role === "teacher" ? "Complaint Records" : "Fee Record"}
              </Link>
            </li>

            <li>
              <Link
                to={
                  role === "teacher" ? "/teacher/performance" : "/contactmenu"
                }
              >
                {role === "teacher" ? "Teacher Performance" : "Contact Menu"}
              </Link>
            </li>
          </ul>
        </div>
        <div className="col1 contact">
          <h2>Contact Menu</h2>

          <form action="">
            <Select
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor: "#fff",
                  padding: "5px",
                  border: "none",
                  fontSize: "14px",
                }),
              }}
              placeholder="Send To"
              value={to}
              onChange={setTo}
              options={contactOptions}
            ></Select>
            <textarea
              cols="30"
              rows="10"
              placeholder="Enter Your Message"
            ></textarea>

            <button>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMenu;
