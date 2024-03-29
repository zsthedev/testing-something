import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer(
  {},
  {
    loginRequest: (state) => {
      state.loading = true;
    },

    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },

    loginFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    loadUserRequest: (state) => {
      state.loading = true;
    },

    loadUserSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },

    loadUserFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
    },

    logoutRequest: (state) => {
      state.loading = true;
    },

    logoutSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.message = action.payload.message;
      state.user = null;
    },

    logoutFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.error = action.payload;
    },

    sendContactQueryRequest: (state) => {
      state.loading = true;
    },

    sendContactQuerySuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },

    sendContactQueryFail: (state, action) => {
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
