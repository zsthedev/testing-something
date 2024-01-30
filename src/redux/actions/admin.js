import { server } from "../store";
import axios from "axios";

export const getAllTeachers = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllTeachersRequest" });

    const { data } = await axios.get(
      `${server}/teachers`,

      {
        headers: {
          "Content-Type": "application/json",
        },

        withCredentials: true,
      }
    );
    console.log(data);
    dispatch({ type: "getAllTeachersSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getAllTeachersFail",
      payload: error.response.data.message,
    });
  }
};

export const getAllAdminStudents = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllAdminStudentsRequest" });

    const { data } = await axios.get(
      `${server}/admin/students`,

      {
        headers: {
          "Content-Type": "application/json",
        },

        withCredentials: true,
      }
    );
    console.log(data);
    dispatch({ type: "getAllAdminStudentsSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getAllAdminStudentsFail",
      payload: error.response.data.message,
    });
  }
};

export const createClass =
  (title, studentId, teacherId, duration, startTime) => async (dispatch) => {
    try {
      dispatch({ type: "createClassRequest" });

      const { data } = await axios.post(
        `${server}/admin/createclass`,
        { title, studentId, teacherId, duration, startTime },

        {
          headers: {
            "Content-Type": "application/json",
          },

          withCredentials: true,
        }
      );

      dispatch({ type: "createClassSuccess", payload: data });
    } catch (error) {
      dispatch({
        type: "createClassFail",
        payload: error.response.data.message,
      });
    }
  };
