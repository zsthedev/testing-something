import { createReducer } from "@reduxjs/toolkit";

export const courseReducer = createReducer(
  {},
  {
    getAllCoursesRequest: (state) => {
      state.loading = true;
    },
    getAllCoursesSucess: (state, action) => {
      state.loading = false;
      state.courses = action.payload;
    },
    getAllCoursesFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  }
);
