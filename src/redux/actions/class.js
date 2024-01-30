import { server } from "../store";
import axios from "axios";

export const getMyClasses = () => async (dispatch) => {
  try {
    dispatch({ type: "getClassesRequest" });

    const { data } = await axios.get(
      `${server}/myclasses`,

      {
        headers: {
          "Content-Type": "application/json",
        },

        withCredentials: true,
      }
    );
    console.log(data);
    dispatch({ type: "getClassesSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getClassesFail",
      payload: error.response.data.message || "",
    });
  }
};

export const getAllClasses = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllClassesRequest" });

    const { data } = await axios.get(
      `${server}/admin/classes`,

      {
        headers: {
          "Content-Type": "application/json",
        },

        withCredentials: true,
      }
    );
    console.log(data);
    dispatch({ type: "getAllClassesSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getAllClassesFail",
      payload: error.response.data.message || "",
    });
  }
};
export const markAttendance =
  (classId, userId, status, date) => async (dispatch) => {
    try {
      dispatch({ type: "markAttendanceRequest" });

      const { data } = await axios.post(
        `${server}/mark-attendance`,
        { classId, userId, status, date },
        {
          headers: {
            "Content-Type": "application/json",
          },

          withCredentials: true,
        }
      );
      console.log(data);
      dispatch({ type: "markAttendanceSuccess", payload: data });
    } catch (error) {
      dispatch({
        type: "markAttendanceFail",
        payload: error.response.data.message,
      });
    }
  };
