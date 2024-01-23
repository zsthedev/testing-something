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
