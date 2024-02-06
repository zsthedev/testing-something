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

export const getAllSchedules = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllSchedulesRequest" });

    const { data } = await axios.get(
      `${server}/schedules`,

      {
        headers: {
          "Content-Type": "application/json",
        },

        withCredentials: true,
      }
    );
    console.log(data);
    dispatch({ type: "getAllSchedulesSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getAllSchedulesFail",
      payload: error.response.data.message,
    });
  }
};

export const getSchedule = (id) => async (dispatch) => {
  try {
    dispatch({ type: "getScheduleRequest" });

    const { data } = await axios.get(
      `${server}/schedule/${id}`,

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
      payload: error.response.data.message,
    });
  }
};

export const createSchedule = (title, studentId, month) => async (dispatch) => {
  try {
    dispatch({ type: "createScheduleRequest" });

    const { data } = await axios.post(
      `${server}/createschedule`,
      { title, studentId, month },

      {
        headers: {
          "Content-Type": "application/json",
        },

        withCredentials: true,
      }
    );
    console.log(data);
    dispatch({ type: "createScheduleSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "createScheduleFail",
      payload: error.response.data.message,
    });
  }
};
export const addClass =
  (date, title, teacherId, studentId, scheduleId, startTime, endTime) =>
  async (dispatch) => {
    try {
      dispatch({ type: "addClassRequest" });

      const { data } = await axios.post(
        `${server}/addclass/${scheduleId}`,
        { date, title, teacherId, studentId, startTime, endTime },

        {
          headers: {
            "Content-Type": "application/json",
          },

          withCredentials: true,
        }
      );
      console.log(data);
      dispatch({ type: "addClassSuccess", payload: data });
    } catch (error) {
      dispatch({
        type: "addClassFail",
        payload: error.response.data.message,
      });
    }
  };

export const updateClass =
  (
    date,
    title,
    teacherId,
    studentId,
    scheduleId,
    classId,
    startTime,
    endTime
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: "updateClassRequest" });

      const { data } = await axios.put(
        `${server}/updateclass/s/${scheduleId}/c/${classId}`,
        { date, title, teacherId, studentId, startTime, endTime },

        {
          headers: {
            "Content-Type": "application/json",
          },

          withCredentials: true,
        }
      );
      console.log(data);
      dispatch({ type: "updateClassSuccess", payload: data });
    } catch (error) {
      dispatch({
        type: "updateClassFail",
        payload: error.response.data.message,
      });
    }
  };
