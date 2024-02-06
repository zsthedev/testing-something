import { server } from "../store";
import axios from "axios";

export const getMySchedule = () => async (dispatch) => {
  try {
    dispatch({ type: "getScheduleRequest" });

    const { data } = await axios.get(
      `${server}/myschedule`,

      {
        headers: {
          "Content-Type": "application/json",
        },

        withCredentials: true,
      }
    );
    console.log(data);
    dispatch({ type: "getScheduleSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getScheduleFail",
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
  // classId, status, joiningTime, classTime, date


    (classId, userId, status, joiningTime, classTime, date) =>
    async (dispatch) => {
      try {
        dispatch({ type: "markAttendanceRequest" });

        const { data } = await axios.post(
          `${server}/mark-attendance`,
          { classId, userId, status, joiningTime, classTime, date },
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

export const changeClassStatus = (id) => async (dispatch) => {
  try {
    dispatch({ type: "changeClassStatusRequest" });

    const { data } = await axios.put(
      `${server}/changeclassstatus/${id}`,

      {
        headers: {
          "Content-Type": "application/json",
        },

        withCredentials: true,
      }
    );
    console.log(data);
    dispatch({ type: "changeClassStatusSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "changeClassStatusFail",
      payload: error.response.data.message || "",
    });
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: "allUsersRequest" });

    const { data } = await axios.get(
      `${server}/allusers`,

      {
        headers: {
          "Content-Type": "application/json",
        },

        withCredentials: true,
      }
    );
    console.log(data);
    dispatch({ type: "allUsersSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "allUsersFail",
      payload: error.response.data.message || "",
    });
  }
};
