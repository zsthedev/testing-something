import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import S from "../Schedule/S";
import { useEffect } from "react";
import toast from "react-hot-toast";
import Loader from "../../Loader";
import { declareResult } from "../../redux/actions/exam";

const ExamDetails = () => {
  const params = useParams();
  const { id } = params;
  const exams = useSelector((state) => state.exam?.exams);

  const exam = exams.find((e) => e._id === id);
  const stundentsData = exam.studentsAttempted;
  console.log(stundentsData);
  const dispatch = useDispatch();

  const { message, error, loading } = useSelector((state) => state.exam);

  const clickHandler = (e) => {
    e.preventDefault();

    const studentId = e.target.id;
    const examId = id;
    dispatch(declareResult(studentId, examId));
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }

    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
  }, [message, error]);
  return loading ? (
    <Loader />
  ) : (
    <div id="exam-details">
      <h2>Students Attempted</h2>
      <table>
        <thead>
          <tr>
            <th>Student Id</th>
            <th>Student Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stundentsData && stundentsData.length > 0
            ? stundentsData.map((s, index) => (
                <tr>
                  <td>{s.studentId}</td>
                  <td>Student Name</td>
                  <td>
                    <button id={s.studentId} onClick={clickHandler}>
                      Declare Result
                    </button>
                  </td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
};

export default ExamDetails;
