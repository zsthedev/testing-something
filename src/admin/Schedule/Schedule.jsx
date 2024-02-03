import React, { useEffect } from "react";
import "./schedule.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllSchedules } from "../../redux/actions/admin";
import S from "./S";

const Schedule = () => {
  const dispatch = useDispatch();

  const schedule = useSelector((state) => state.admin?.schedules);
  useEffect(() => {
    dispatch(getAllSchedules());
  }, []);
  return (
    <section id="schedule">
      <h2>Schedules</h2>
      <div className="btn-row">
        <Link to={"/admin/createschedule"}>Create New</Link>
      </div>
      <div className="row">
        {schedule && schedule.length > 0 ? (
          schedule.map((s) => (
            <S
              title={s.title}
              name={s.name}
              month={s.month}
              link={`/admin/schedule/${s._id}`}
            ></S>
          ))
        ) : (
          <p>No Schedule</p>
        )}
      </div>
    </section>
  );
};

export default Schedule;
