import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../profile/profile.scss";
import logo from "../../../assets/logo.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./attendence.scss";
import Attendance from "./Attendance";
import Absent from "./Absent";

const ClassSchedule = ({ user, isAuthenticated }) => {
  const role = user.role;
  const [date, setDate] = useState(new Date());
  return (
    <section className="profile schedule-section">
      <div className="row">
        <div className="col1">
          <h2>Current Month</h2>
          <div className="col1-row" id="attendance-row">
            <Attendance text="Total Classes" />
            <Attendance text="Current Attendence" />
            <Attendance text="Percentage" />
          </div>

          <h2>Absency Report</h2>
          <div className="col1-row" id="absence-row">
            <Absent
              day="Saturday"
              date="6-December-2023"
              marked="Shahzaib Khan"
            ></Absent>
            <Absent></Absent>
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
