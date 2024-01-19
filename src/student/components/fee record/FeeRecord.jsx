import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../profile/profile.scss";
import logo from "../../../assets/logo.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./fee.scss";

const ClassSchedule = ({ isAuthenticated, user }) => {
  const [date, setDate] = useState(new Date());
  const role = user.role;
  return (
    <section className="profile schedule-section">
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
                {role == "teacher" ? "Salary Record" : "Exam History"}
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
                {role === "teacher" ? "Students" : "Performance Report"}
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

        <div className="col1" id="feesec">
          <h2>Current Year</h2>
          <div className="col1-row" id="performance-row">
            <table>
              <thead>
                <tr id="fee">
                  <th>Chalan No</th>
                  <th>Description</th>
                  <th>Due Date</th>
                  <th>Due Amount</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>123</td>
                  <td>Semester Fees</td>
                  <td>23-Dec-2023</td>
                  <td>10000</td>
                  <td>Not Paid</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassSchedule;
