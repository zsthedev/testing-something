import { server } from "../store";
import axios from "axios";

export const getAllCourses = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllCoursesRequest" });

    const { data } = await axios.get(
      `${server}/courses`,

      {
        headers: {
          "Content-Type": "application/json",
        },

        withCredentials: true,
      }
    );
    console.log(data);
    dispatch({ type: "getAllCoursesSucess", payload: data });
  } catch (error) {
    dispatch({
      type: "getAllCoursesFail",
      payload: error.response.data.message,
    });
  }
};
