import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import { financeReducer } from "./reducers/financeReducer";
import { courseReducer } from "./reducers/courseReducer";

export const server = "https://lms-backend-i22h.onrender.com/api/v1";
const store = configureStore({
  reducer: {
    user: userReducer,
    finance: financeReducer,
    courses: courseReducer,
  },
});

export default store;
