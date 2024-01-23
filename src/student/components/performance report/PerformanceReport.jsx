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
