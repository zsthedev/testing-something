import React, { useEffect, useState } from "react";
import "./exam.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { attemptExam } from "../../../redux/actions/exam";
import Loader from "../../../Loader";

const Exam = ({ user }) => {
  const params = useParams();

  const { id } = params;
  const exams = useSelector((state) => state.exam?.exams);

  const exam = exams.find((e) => e._id.toString() === id);

  const questions = exam.questions;

  const [answers, setAnswers] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { message, error, loading } = useSelector((state) => state.exam);
  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
      navigate("/classchedule");
    }

    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
  }, [error, message]);

  const handleOptionChange = (questionId, option) => {
    const existingAnswerIndex = answers.findIndex(
      (answer) => answer.id === questionId
    );

    if (existingAnswerIndex !== -1) {
      setAnswers((prevAnswers) => {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[existingAnswerIndex] = {
          id: questionId,
          answer: option,
        };
        return updatedAnswers;
      });
    } else {
      setAnswers((prevAnswers) => [
        ...prevAnswers,
        { id: questionId, answer: option },
      ]);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const studentId = user._id;
    const examId = id;

    dispatch(attemptExam(studentId, examId, answers));
  };

  return loading ? (
    <Loader />
  ) : (
    <div id="exam">
      <form onSubmit={submitHandler} action="">
        {questions.map((question) => (
          <div key={question._id} className="question">
            <p className="statement">{question.statement}</p>
            <div className="options">
              {question.options.map((option, index) => (
                <div key={index} className="option-row">
                  <input
                    type="radio"
                    id={`option-${question._id}-${index}`}
                    name={`question-${question._id}`}
                    value={option}
                    checked={answers.some(
                      (answer) =>
                        answer.id === question._id && answer.answer === option
                    )}
                    onChange={() => handleOptionChange(question._id, option)}
                  />
                  <label htmlFor={`option-${question._id}-${index}`}>
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Exam;
