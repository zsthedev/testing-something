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
      state.erro9r = action.payload;
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

    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  }
);
