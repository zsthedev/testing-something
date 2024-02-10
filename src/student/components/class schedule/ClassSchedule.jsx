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
import {
  changeClassStatus,
  getMySchedule,
  markAttendance,
} from "../../../redux/actions/schedule";
import { getAllExams } from "../../../redux/actions/exam";

const ClassSchedule = ({ user, isAuthenticated }) => {
  const role = user.role;
  const [date, setDate] = useState(new Date());

  const dispatch = useDispatch();
  const schedule = useSelector((state) => state.schedule?.schedule);
  console.log(schedule);

  let classes;
  if (user.role === "student") {
    classes =
      schedule && schedule.length > 0
        ? schedule[0]?.classes.filter((s) => s.status === "Not Taken")
        : [];
  }

  if (user.role === "teacher") {
    classes =
      schedule && schedule.length > 0
        ? schedule.filter((s) => s.status === "Not Taken")
        : [];
  }

  console.log(classes);

  useEffect(() => {
    dispatch(getMySchedule());
  }, []);

  useEffect(() => {
    const markAttendanceForEndedClasses = () => {
      if (classes && classes.length > 0) {
        const currentDate = new Date();

        classes.forEach((c) => {
          const classDateTime = new Date(`${c.date}T${c.endTime}`);

          if (currentDate >= classDateTime && c.status === "Not Taken") {
            dispatch(
              markAttendance(
                c._id,
                user._id,
                "absent",
                currentDate.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                }),

                c.startTime,
                Date.now()
              )
            );
          }
        });
      }
    };

    markAttendanceForEndedClasses();
  }, [classes, dispatch]);

  useEffect(() => {
    dispatch(getAllExams());
  }, []);

  const navigate = useNavigate();
  const clickHandler = (e) => {
    navigate(`/room/${e.target.id}`);
  };

  const allExams = useSelector((state) => state.exam?.exams);

  const exams =
    allExams &&
    allExams.filter((exam) => {
      if (Array.isArray(exam.studentsAttempted)) {
        const studentExists = exam.studentsAttempted.some(
          (attempt) => attempt.studentId === user._id
        );

        return !studentExists;
      }

      return true;
    });

  const isJoinable = (startTime, endTime) => {
    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return currentTime >= startTime && currentTime <= endTime;
  };

  return (
    <section className="profile schedule-section">
      <div className="row">
        <div className="col1">
          <h2>{schedule ? schedule[0]?.month : ""} Schedule</h2>
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
                <th>Class Type</th>
                <th>Class Level</th>
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
                      <td>Regular</td>
                      <td>Beginner</td>
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

          <div className={role === "teacher" ? "hide" : "col1-row"}>
            <h2>Exams</h2>
            <table>
              <thead>
                <tr>
                  <th>Title</th>

                  <th>Due Date</th>
                  <th>Questions</th>
                  <th>Total Marks</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {exams && exams.length > 0
                  ? exams.map((e, index) => (
                      <tr key={index}>
                        <td>{e.title}</td>
                        <td>{e.duedate}</td>
                        <td>{e.questions.length}</td>
                        <td>{e.totalMarks}</td>
                        <td>{e.status}</td>
                        <td>
                          <Link to={`/student/exam/${e._id}`}>Attemp</Link>
                        </td>
                      </tr>
                    ))
                  : ""}
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
