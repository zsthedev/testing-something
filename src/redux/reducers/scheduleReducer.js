import { createReducer } from "@reduxjs/toolkit";

export const scheduleReducer = createReducer(
  {},
  {
    getScheduleRequest: (state) => {
      state.loading = true;
    },
    getScheduleSuccess: (state, action) => {
      state.loading = false;
      state.schedule = action.payload.mySchedule;
    },
    getScheduleFail: (state, action) => {
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

    changeClassStatusRequest: (state) => {
      state.loading = true;
    },

    changeClassStatusSuccess: (state, action) => {
      state.loading = false;

      state.message = action.payload.message;
    },

    changeClassStatusUpdate: (state, action) => {
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
