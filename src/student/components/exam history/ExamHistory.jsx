import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../profile/profile.scss";
import logo from "../../../assets/logo.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Attendance from "../attendance history/Attendance";
import { useDispatch, useSelector } from "react-redux";
import { getAllExams } from "../../../redux/actions/exam";

const ClassSchedule = ({ user, isAuthenticated }) => {
  const [date, setDate] = useState(new Date());

  const exams = useSelector((state) => state.exam?.exams);

  console.log(exams);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllExams());
  }, []);

  const filteredExams =
    exams && exams.length > 0
      ? exams.filter((exam) => {
          if (Array.isArray(exam.studentsAttempted)) {
            const studentExists = exam.studentsAttempted.some(
              (attempt) => attempt.studentId === user._id
            );

            return studentExists;
          }

          return false;
        })
      : [];

  const data = filteredExams.map((x) =>
    x.studentsAttempted.find((e) => e.studentId === user._id)
  );

  let obtainedMarks = 0;
  let totalMarks = 0;
  data.forEach((element) => {
    obtainedMarks += Number(element.obtainedMarks);
  });

  filteredExams.forEach((element) => {
    totalMarks += Number(element.totalMarks);
  });

  const percentage = ((obtainedMarks / totalMarks) * 100).toFixed(1) + "%";

  return (
    <section className="profile schedule-section">
      <div className="row">
        <div className="col1">
          <h2>Current Month</h2>
          <div className="col1-row" id="attendance-row">
            <Attendance text="Total Quizes" number={filteredExams.length} />
            <Attendance text="Total Marks" number={totalMarks} />
            <Attendance text="Obtained Marks" number={obtainedMarks} />
            <Attendance text="Percentage" number={percentage} />
          </div>

          <h2>Exam History</h2>
          <div className="col1-row" id="absence-row">
            <table>
              <tr>
                <th>Title</th>
                <th>Due Date</th>
                <th>Questions</th>
                <th>Total Marks</th>
                <th>Obtained Marks</th>
                <th>Grade</th>
              </tr>

              {filteredExams && filteredExams.length > 0
                ? filteredExams.map((f) => (
                    <tr>
                      <td>{f.title}</td>
                      <td>{f.duedate}</td>
                      <td>{f.questions.length}</td>
                      <td>{f.totalMarks}</td>
                      <td>
                        {
                          f.studentsAttempted.find(
                            (s) => s.studentId === user._id
                          ).obtainedMarks
                        }
                      </td>
                      <td>Soon</td>
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
