import { createReducer } from "@reduxjs/toolkit";

export const invoiceReducer = createReducer(
  {},
  {
    getMyInvoicesRequest: (state) => {
      state.loading = true;
    },

    getMyInvoicesSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.invoices = action.payload.myInvoices;
    },

    getMyInvoicesFail: (state, action) => {
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
