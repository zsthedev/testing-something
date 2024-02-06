import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import { financeReducer } from "./reducers/financeReducer";
import { courseReducer } from "./reducers/courseReducer";
import { scheduleReducer } from "./reducers/scheduleReducer";
import { adminReducer } from "./reducers/adminReducer";
import { invoiceReducer } from "./reducers/invociesReducer";
import { examReducer } from "./reducers/examReducer";

export const server = "https://lms-backend-i22h.onrender.com/api/v1";
const store = configureStore({
  reducer: {
    user: userReducer,
    finance: financeReducer,
    courses: courseReducer,
    schedule: scheduleReducer,
    admin: adminReducer,
    invoices: invoiceReducer,
    exam: examReducer,
  },
});

export default store;
