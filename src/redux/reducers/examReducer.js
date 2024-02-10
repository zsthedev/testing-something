import { createReducer } from "@reduxjs/toolkit";
export const examReducer = createReducer(
  {},
  {
    getAllExamsRequest: (state) => {
      state.loading = true;
    },
    getAllExamsSuccess: (state, action) => {
      state.loading = false;
      state.exams = action.payload.exam;
    },
    getAllExamsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    createExamRequest: (state) => {
      state.loading = true;
    },
    createExamSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    createExamFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    attemptExamRequest: (state) => {
      state.loading = true;
    },
    attemptExamSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    attemptExamFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    declareResultRequest: (state) => {
      state.loading = true;
    },
    declareResultSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    declareResultFail: (state, action) => {
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
