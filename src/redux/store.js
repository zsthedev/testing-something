import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import { financeReducer } from "./reducers/financeReducer";
import { courseReducer } from "./reducers/courseReducer";
import { scheduleReducer } from "./reducers/scheduleReducer";
import { adminReducer } from "./reducers/adminReducer";

export const server = "https://lms-backend-i22h.onrender.com/api/v1";
const store = configureStore({
  reducer: {
    user: userReducer,
    finance: financeReducer,
    courses: courseReducer,
    schedule: scheduleReducer,
    admin: adminReducer,
  },
});

export default store;
