import { createReducer } from "@reduxjs/toolkit";

export const financeReducer = createReducer(
  {},
  {
    getAllStudentsRequest: (state) => {
      state.loading = true;
    },

    getAllStudentsSuccess: (state, action) => {
      state.loading = false;
      state.students = action.payload;
    },
    getAllStudentsFail: (state, action) => {
      state.loading = false;
      state.students = action.payload;
    },

    createInvoiceRequest: (state) => {
      state.loading = true;
    },

    createInvoiceSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    createInvoiceFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    getAllInvoiceRequest: (state) => {
      state.loading = true;
    },

    getAllInvoiceSuccess: (state, action) => {
      state.loading = false;
      state.invoices = action.payload;
    },
    getAllInvoiceFail: (state, action) => {
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
