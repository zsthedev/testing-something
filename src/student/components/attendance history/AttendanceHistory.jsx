import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../profile/profile.scss";
import logo from "../../../assets/logo.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./attendence.scss";
import Attendance from "./Attendance";
import Absent from "./Absent";
import { useDispatch } from "react-redux";
import { loadUser } from "../../../redux/actions/user";

const ClassSchedule = ({ user, isAuthenticated }) => {
  const role = user.role;
  const [date, setDate] = useState(new Date());

  const toatlClasses = user.classHistory.length;
  const attendanceClasses = user.attendanceHistory.filter(
    (h) => h.status === "present"
  ).length;
  const percentage = (attendanceClasses / toatlClasses) * 100 + "%";

  const absent = user.attendanceHistory.filter(
    (h) => h.status === "absent"
  ).length;

  return (
    <section className="profile schedule-section">
      <div className="row">
        <div className="col1">
          <h2>Current Month</h2>
          <div className="col1-row" id="attendance-row">
            <Attendance
              text="Total Classes"
              number={user.classHistory.length}
            />
            <Attendance
              text="Current Attendence"
              number={
                user.attendanceHistory.filter((h) => h.status === "present")
                  .length
              }
            />
            <Attendance text="Percentage" number={percentage} />
          </div>

          <h2>Absency Report</h2>
          <div className="col1-row" id="absence-row">
            {absent && absent.length > 0 ? (
              absent.map((a) => {
                <Absent day="Saturday" date="6-December-2023"></Absent>;
              })
            ) : (
              <p>No Absent Till Today</p>
            )}
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
