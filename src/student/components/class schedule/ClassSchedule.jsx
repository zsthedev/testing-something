import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../profile/profile.scss";
import "./class.scss";
import logo from "../../../assets/logo.png";
import Schedule from "./Schedule";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { getMySchedule } from "../../../redux/actions/schedule";

const ClassSchedule = ({ user, isAuthenticated }) => {
  const role = user.role;
  const [date, setDate] = useState(new Date());

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMySchedule());
  }, []);
  const navigate = useNavigate();
  const clickHandler = (e) => {
    navigate(`/room/${e.target.id}`);
  };

  const isJoinable = (startTime, endTime) => {
    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return currentTime >= startTime && currentTime <= endTime;
  };

  const schedule = useSelector((state) => state.schedule?.schedule);

  const classes = schedule
    ? schedule[0]?.classes.filter((s) => s.status === "Not Taken")
    : [];

  console.log(classes);
  return (
    <section className="profile schedule-section">
      <div className="row">
        <div className="col1">
          <h2>{schedule ? schedule[0].month : ""} Schedule</h2>
          <div className="col1-row">
            <table>
              <tr>
                <th>Date</th>
                <th>Day</th>
                <th>Title</th>
                <th>Student</th>
                <th>Teacher</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Duration</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>

              {classes && classes.length > 0
                ? classes.map((c) => (
                    <tr id="table-details">
                      <td>{c.date}</td>
                      <td>{c.day}</td>
                      <td>{c.title}</td>
                      <td>{c.student.studentName}</td>
                      <td>{c.teacher.teacherName}</td>
                      <td>{c.startTime}</td>
                      <td>{c.endTime}</td>
                      <td>{c.duration} Minutes</td>
                      <td>{c.status}</td>
                      <td>
                        <button
                          className={`call-join ${
                            isJoinable(c.startTime, c.endTime) ? "" : "disabled"
                          }`}
                          id={c._id}
                          onClick={
                            isJoinable(c.startTime, c.endTime)
                              ? clickHandler
                              : null
                          }
                          disabled={!isJoinable(c.startTime, c.endTime)}
                        >
                          Join
                        </button>
                      </td>
                    </tr>
                  ))
                : ""}
            </table>
          </div>

          <h2>Upcoming Classes</h2>
          <div className="col1-row"></div>
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
