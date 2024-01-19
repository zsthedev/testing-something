import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/logo.png";
import placeholder from "./../assets/placeholder.jpg";
import Salary from "../Salary Record/Salary";
import Student from "./Student";
import "./students.scss";

const Students = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");

  const role = "teacher";

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
                className="active"
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
        <div className="col1">
          <div className="col1-content">
            <div className="pr-image-row">
              <div>
                Hi, {name}
                <img src={image == "" ? placeholder : image} alt="" />
              </div>
            </div>
            <div className="profile-details salary-section">
              <h2>Students</h2>
              <div className="students-row">
                <Student></Student>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Students;
