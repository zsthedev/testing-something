import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import { financeReducer } from "./reducers/financeReducer";
import { courseReducer } from "./reducers/courseReducer";
import { classReducer } from "./reducers/classReducer";
import { adminReducer } from "./reducers/adminReducer";

export const server = "https://lms-backend-i22h.onrender.com/api/v1";
const store = configureStore({
  reducer: {
    user: userReducer,
    finance: financeReducer,
    courses: courseReducer,
    classes: classReducer,
    admin: adminReducer,
  },
});

export default store;
