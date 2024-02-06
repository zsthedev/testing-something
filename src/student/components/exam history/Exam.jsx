import React, { useState } from "react";
import "./exam.scss";

const Exam = () => {
  const questions = [
    {
      id: 1,
      statement: "How many letters in Haroof-e-Tahajee",
      options: ["HTML", "JavaScript", "React", "CSS"],
    },
    {
      id: 2,
      statement: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
    },
  ];

  const [answers, setAnswers] = useState({});

  const handleOptionChange = (questionId, option) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: option,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("Answers:", answers);
  };

  return (
    <div id="exam">
      <form onSubmit={submitHandler} action="">
        {questions.map((question) => (
          <div key={question.id} className="question">
            <p className="statement">{question.statement}</p>
            <div className="options">
              {question.options.map((option, index) => (
                <div key={index} className="option-row">
                  <input
                    type="radio"
                    id={`option-${question.id}-${index}`}
                    name={`question-${question.id}`}
                    value={option}
                    checked={answers[question.id] === option}
                    onChange={() => handleOptionChange(question.id, option)}
                  />
                  <label htmlFor={`option-${question.id}-${index}`}>
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
