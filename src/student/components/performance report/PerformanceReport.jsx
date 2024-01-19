import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../profile/profile.scss";
import logo from "../../../assets/logo.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Attendance from "../attendance history/Attendance";
import "./performance.scss";

const ClassSchedule = ({ isAuthenticated, user }) => {
  const role = user.role;
  const [date, setDate] = useState(new Date());
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
                className="active"
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
          <h2>Current Year</h2>
          <div className="col1-row" id="performance-row">
            <table>
              <thead>
                <tr id="performance">
                  <th>Sr.No</th>
                  <th>Subject</th>
                  <th>Total Marks</th>
                  <th>Obtained Marks</th>
                  <th>Percentage</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>
                  <td>English</td>
                  <td>10</td>
                  <td>8</td>
                  <td>80%</td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>English</td>
                  <td>10</td>
                  <td>8</td>
                  <td>80%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col2">
          <div>
            <Calendar onChange={setDate} value={date} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassSchedule;
