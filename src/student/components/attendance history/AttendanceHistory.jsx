import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../profile/profile.scss";
import logo from "../../../assets/logo.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./attendence.scss";
import Attendance from "./Attendance";
import Absent from "./Absent";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../../redux/actions/user";

const ClassSchedule = ({ user, isAuthenticated }) => {
  const role = user.role;
  const [date, setDate] = useState(new Date());
  const schedule = useSelector((state) => state.schedule?.schedule);
  const toatlClasses =
    user.role === "student"
      ? schedule && schedule[0]?.classes.length
      : schedule && schedule.length;

  const attendance = user.attendanceHistory;

  const attendanceClasses = user.attendanceHistory.filter(
    (h) => h.status === "present"
  ).length;
  const percentage =
    ((attendanceClasses / toatlClasses) * 100).toFixed(1) + "%";

  const absent = user.attendanceHistory.filter(
    (h) => h.status === "absent"
  ).length;

  return (
    <section className="profile schedule-section">
      <div className="row">
        <div className="col1">
          <h2>Current Month</h2>
          <div className="col1-row" id="attendance-row">
            <Attendance text="Total Classes" number={toatlClasses} />
            <Attendance
              text="Current Attendence"
              number={
                user.attendanceHistory.filter((h) => h.status === "present")
                  .length
              }
            />
            <Attendance
              text="Absenties"
              number={
                user.attendanceHistory.filter((h) => h.status === "absent")
                  .length
              }
            />

            <Attendance
              text="Percentage"
              number={percentage === "NaN" ? "0" : percentage}
            />
          </div>

          <h2>Report</h2>
          <div className="col1-row" id="absence-row">
            <table>
              <tr>
                <th>Date</th>
                <th>Class Timing</th>
                <th>Joining Time</th>
                <th>Status</th>
                <th>Review</th>
              </tr>

              {attendance && attendance.length > 0
                ? attendance.map((a) => (
                    <tr>
                      <td>{new Date(Number(a.date)).toLocaleDateString()}</td>
                      <td>
                        {a.classTime.split(":")[0] > 12
                          ? a.classTime + " P.M"
                          : a.classTime + " A.M" || "Nill"}{" "}
                      </td>
                      <td>{a.status === "absent" ? "Nill" : a.joiningTime}</td>
                      <td>{a.status}</td>
                      <td>
                        {a.status === "absent" && user.role === "student"
                          ? "Student Was Absent"
                          : a.status === "absent" && user.role === "teacher"
                          ? "Teacher Was Absent"
                          : a.joiningTime}
                      </td>
                    </tr>
                  ))
                : ""}
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
