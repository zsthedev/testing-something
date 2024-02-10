import { server } from "../store";
import axios from "axios";

export const getAllExams = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllExamsRequest" });

    const { data } = await axios.get(
      `${server}/admin/exams`,

      {
        headers: {
          "Content-Type": "application/json",
        },

        withCredentials: true,
      }
    );
    console.log(data);
    dispatch({ type: "getAllExamsSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getAllExamsFail",
      payload: error.response.data.message,
    });
  }
};

export const createExam =
  (title, duedate, totalmarks, questions) => async (dispatch) => {
    try {
      dispatch({ type: "createExamRequest" });

      const { data } = await axios.post(
        `${server}/admin/createxam`,
        { title, duedate, totalmarks, questions },

        {
          headers: {
            "Content-Type": "application/json",
          },

          withCredentials: true,
        }
      );
      console.log(data);
      dispatch({ type: "createExamSuccess", payload: data });
    } catch (error) {
      dispatch({
        type: "createExamFail",
        payload: error.response.data.message,
      });
    }
  };

export const attemptExam = (studentId, examId, answers) => async (dispatch) => {
  try {
    dispatch({ type: "attemptExamRequest" });

    const { data } = await axios.post(
      `${server}/attemptexam`,
      { studentId, examId, answers },

      {
        headers: {
          "Content-Type": "application/json",
        },

        withCredentials: true,
      }
    );
    console.log(data);
    dispatch({ type: "attemptExamSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "attemptExamFail",
      payload: error.response.data.message,
    });
  }
};

export const declareResult = (studentId, examId) => async (dispatch) => {
  try {
    dispatch({ type: "declareResultRequest" });

    const { data } = await axios.post(
      `${server}/admin/declareresult`,
      { studentId, examId },

      {
        headers: {
          "Content-Type": "application/json",
        },

        withCredentials: true,
      }
    );
    console.log(data);
    dispatch({ type: "declareResultSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "declareResultFail",
      payload: error.response.data.message,
    });
  }
};
