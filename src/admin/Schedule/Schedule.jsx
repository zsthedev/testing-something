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
        <table>
          <tr>
            <th>Title</th>
            <th>Month</th>
            <th>Student</th>
            <th>Action</th>
          </tr>

          {schedule && schedule.length > 0 ? (
            schedule.map((s) => (
              <tr>
                <td>{s.title}</td>
                <td>{s.month}</td>
                <td>{s.studentName}</td>
                <td id="link">
                  <Link to={`/admin/schedule/${s._id}`}>Visit</Link>
                </td>
              </tr>
            ))
          ) : (
            <p>No Schedule</p>
          )}
        </table>
      </div>
    </section>
  );
};

export default Schedule;
