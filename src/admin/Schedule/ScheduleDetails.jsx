import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getSchedule } from "../../redux/actions/admin";
import Schedule from "../../student/components/class schedule/Schedule";

const ScheduleDetails = ({ user }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const schedule = useSelector((state) => state.admin?.schedule);

  useEffect(() => {
    dispatch(getSchedule(id));
  }, []);
  return (
    <section id="schedule-details">
      <div className="row hide">
        <h2>Classes</h2>
        <div className="btn-row">
          <Link to={`/admin/schedule/${id}/createclass`}>Add New</Link>
        </div>

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

          {schedule && schedule.classes.length > 0
            ? schedule.classes.map((c) => (
                <tr>
                  <td>{c.date}</td>
                  <td>{c.day}</td>
                  <td>{c.title}</td>
                  <td>{c.student.studentName}</td>
                  <td>{c.teacher.teacherName}</td>
                  <td>{c.startTime}</td>
                  <td>{c.endTime}</td>
                  <td>{c.duration} Minutes</td>
                  <td>{c.status}</td>
                  <td id="links-row">
                    <Link to={`/admin/schedule/${id}/c/${c._id}`}>Update</Link>
                    <Link to={`/admin/s/${id}/c/${c._id}`}>Details</Link>
                  </td>
                </tr>
              ))
            : ""}
        </table>
      </div>
    </section>
  );
};

export default ScheduleDetails;
