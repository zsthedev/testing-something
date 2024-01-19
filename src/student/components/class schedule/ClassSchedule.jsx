import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../profile/profile.scss";
import "./class.scss";
import logo from "../../../assets/logo.png";
import Schedule from "./Schedule";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const ClassSchedule = ({ user, isAuthenticated }) => {
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
              <Link to="/classchedule" className="active">
                Class Schedule
              </Link>
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
          <h2>Today Class</h2>
          <div className="col1-row">
            <Schedule
              image=""
              teacher="Shahzaib Khan"
              designation="Developer"
              course_name="Test Course"
            ></Schedule>
          </div>

          <h2>Upcoming Classes</h2>
          <div className="col1-row">
            <Schedule
              image=""
              teacher="Shahzaib Khan"
              designation="Developer"
              course_name="Test Course"
            ></Schedule>
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
