import { createReducer } from "@reduxjs/toolkit";

export const classReducer = createReducer(
  {},
  {
    getClassesRequest: (state) => {
      state.loading = true;
    },
    getClassesSuccess: (state, action) => {
      state.loading = false;
      state.classess = action.payload;
    },
    getClassesFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    getAllClassesRequest: (state) => {
      state.loading = true;
    },
    getAllClassesSuccess: (state, action) => {
      state.loading = false;
      state.classess = action.payload;
    },
    getAllClassesFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    markAttendanceRequest: (state) => {
      state.loading = true;
    },

    markAttendanceSuccess: (state, action) => {
      state.loading = false;

      state.message = action.payload.message;
    },

    markAttendanceFail: (state, action) => {
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
