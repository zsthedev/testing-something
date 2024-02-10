import React, { useEffect, useState } from "react";
import "./exams.scss";
import { useDispatch, useSelector } from "react-redux";
import { createExam } from "../../redux/actions/exam";
import Loader from "../../Loader";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateExam = () => {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([]);
  const [marks, setMarks] = useState();
  const [duedate, setDueDate] = useState();

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { statement: "", options: ["", "", "", ""], correctOption: "" },
    ]);
  };

  const handleRemoveQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };

  const handleStatementChange = (index, event) => {
    const newQuestions = [...questions];
    newQuestions[index].statement = event.target.value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, event) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options[optionIndex] = event.target.value;
    setQuestions(newQuestions);
  };

  const handleCorrectOptionChange = (index, event) => {
    const newQuestions = [...questions];
    newQuestions[index].correctOption = event.target.value;
    setQuestions(newQuestions);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title, duedate, marks, questions);
    dispatch(createExam(title, duedate, marks, questions));
  };
  const { loading, error, message } = useSelector((state) => state.exam);
  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
      navigate("/admin/exams");
    }

    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
  }, [error, message]);

  return loading ? (
    <Loader />
  ) : (
    <div id="create-exam">
      <h2>Create Exam</h2>

      <form action="" onSubmit={submitHandler}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="date">Due Date</label>
        <input
          type="date"
          placeholder="Due Date"
          id="date"
          value={duedate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <label htmlFor="marks">Total Marks</label>
        <input
          type="text"
          placeholder="Total Marks"
          id="marks"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
        />

        {questions.map((question, index) => (
          <div key={index} className="question">
            <label htmlFor={`statement${index}`}>Statement</label>
            <input
              type="text"
              placeholder="Statement"
              id={`statement${index}`}
              value={question.statement}
              onChange={(event) => handleStatementChange(index, event)}
            />
            <div className="options-row">
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex}>
                  <label htmlFor={`option${index}-${optionIndex}`}>{`Option ${
                    optionIndex + 1
                  }`}</label>
                  <input
                    type="text"
                    placeholder={`Option ${optionIndex + 1}`}
                    id={`option${index}-${optionIndex}`}
                    value={option}
                    onChange={(event) =>
                      handleOptionChange(index, optionIndex, event)
                    }
                  />
                </div>
              ))}
            </div>
            <label htmlFor={`correct${index}`}>Correct Option</label>
            <input
              type="text"
              placeholder="Correct Option"
              id={`correct${index}`}
              value={question.correctOption}
              onChange={(event) => handleCorrectOptionChange(index, event)}
            />
            <button
              type="button"
              id="remove-question-button"
              onClick={() => handleRemoveQuestion(index)}
            >
              Remove Question
            </button>
          </div>
        ))}

        <button id="create-question-button" onClick={handleAddQuestion}>
          Add New Question
        </button>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreateExam;
