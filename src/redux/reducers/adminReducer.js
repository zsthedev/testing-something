import { createReducer } from "@reduxjs/toolkit";

export const adminReducer = createReducer(
  {},
  {
    getAllTeachersRequest: (state) => {
      state.loading = true;
    },
    getAllTeachersSuccess: (state, action) => {
      state.loading = false;
      state.teachers = action.payload.teachers;
    },
    getAllTeachersFail: (state, action) => {
      state.loading = false;
      state.erro9r = action.payload;
    },

    getAllAdminStudentsRequest: (state) => {
      state.loading = true;
    },
    getAllAdminStudentsSuccess: (state, action) => {
      state.loading = false;
      state.students = action.payload.students;
    },
    getAllAdminStudentsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    createClassRequest: (state) => {
      state.loading = true;
    },
    createClassSuccess: (state, action) => {
      state.loading = false;
      state.students = action.payload.students;
      state.message = action.payload.message;
    },
    createClassFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    getAllSchedulesRequest: (state) => {
      state.loading = true;
    },
    getAllSchedulesSuccess: (state, action) => {
      state.loading = false;
      state.schedules = action.payload.schedules;
    },
    getAllSchedulesFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    getScheduleRequest: (state) => {
      state.loading = true;
    },
    getScheduleSuccess: (state, action) => {
      state.loading = false;
      state.schedule = action.payload.schedule;
    },
    getScheduleFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    createScheduleRequest: (state) => {
      state.loading = true;
    },
    createScheduleSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    createScheduleFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addClassRequest: (state) => {
      state.loading = true;
    },
    addClassSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    addClassFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    updateClassRequest: (state) => {
      state.loading = true;
    },
    updateClassSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    updateClassFail: (state, action) => {
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
