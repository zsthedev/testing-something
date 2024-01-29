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
        <div className="col1">
          <h2>Today Class</h2>
          <div className="col1-row">
            <Schedule
              image=""
              teacher="Abbas Khan"
              designation="Developer"
              course_name="Test Course"
              link="/room/locus"
            ></Schedule>
          </div>

          <h2>Upcoming Classes</h2>
          <div className="col1-row">
            <Schedule
              image=""
              teacher="Shahzaib Khan"
              designation="Developer"
              course_name="Test Course"
              link="/room/locus"
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
