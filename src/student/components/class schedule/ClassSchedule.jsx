import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../profile/profile.scss";
import "./class.scss";
import logo from "../../../assets/logo.png";
import Schedule from "./Schedule";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { useDispatch, useSelector } from "react-redux";
import { getMyClasses } from "../../../redux/actions/class";
import toast from "react-hot-toast";

const ClassSchedule = ({ user, isAuthenticated }) => {
  const role = user.role;
  const [date, setDate] = useState(new Date());

  const dispatch = useDispatch();
  const classes = useSelector(
    (state) => state.classes.classess?.myclasses || []
  );

  useEffect(() => {
    dispatch(getMyClasses());
  }, []);
  return (
    <section className="profile schedule-section">
      <div className="row">
        <div className="col1">
          <h2>Today Class</h2>
          <div className="col1-row">
            {classes && classes.length > 0 ? (
              classes.map((c) => (
                <Schedule
                  image=""
                  teacher={c.teacher}
                  student={c.student}
                  designation="Developer"
                  course_name={c.title}
                  start_time={c.startTime}
                  duration={c.duration}
                  link={c._id}
                  role={user.role}
                ></Schedule>
              ))
            ) : (
              <p>No Classes Yet</p>
            )}
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
