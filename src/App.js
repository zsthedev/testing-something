import "./app.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./landing/components/hero/Hero";
import Navbar from "./landing/components/navbar/Navbar";
import About from "./landing/components/about/About";
import Contact from "./landing/components/contact/Contact";
import Login from "./landing/components/auth/Login";
import ForgetPassword from "./landing/components/auth/ForgetPassword";
import Register from "./landing/components/auth/Register";
import Profile from "./student/components/profile/Profile";
import ClassSchedule from "./student/components/class schedule/ClassSchedule";
import AttendanceHistory from "./student/components/attendance history/AttendanceHistory";
import ExamHistory from "./student/components/exam history/ExamHistory";
import PerfromanceReport from "./student/components/performance report/PerformanceReport";
import FeeRecord from "./student/components/fee record/FeeRecord";
import ContactMenu from "./student/components/contact menu/ContactMenu";
import SalaryRecord from "./teacher/Salary Record/SalaryRecord";
import Students from "./teacher/students/Students";
import TeacherPerformance from "./teacher/Teacher Performance/TeacherPerformance";
import SalaryGeneration from "./finance/components/SalaryGeneration";
import FinanceFeeRecord from "./finance/components/Fee Record/FinanceFeeRecord";
import IncomeRecord from "./finance/components/Income Record/IncomeRecord";
import ExpenseRecord from "./finance/components/Expense Record/ExpenseRecord";
import CompanyAssets from "./finance/components/Company Assets/CompanyAssets";
import QStudents from "./qc/Student/QStudents";
import QTeachers from "./qc/Teacher/QTeachers";
import IssueCertificate from "./qc/Issue Certificates/IssueCertificates";
import HTeachers from "./hr/Teachers/HTeachers";
import IssueLetter from "./hr/Issue Letters/IssueLetter";
import IssueLetters from "./hr/Issue Letters/IssueLetter";
import TeacherTraining from "./hr/Teacher Training/TeacherTraining";
import AdminDashboard from "./admin/Dashboard/AdminDashboard";
import SendInvoice from "./finance/components/Invoice/SendInvoice";
import CreateInvoice from "./finance/components/Invoice/CreateInvoice";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import Loader from "./Loader";
import { loadUser } from "./redux/actions/user";
import { ProtectedRoute } from "protected-route-react";
import { getAllInvoices, getAllStudents } from "./redux/actions/finance";
import { getAllCourses } from "./redux/actions/course";
import Error404 from "./landing/components/Error404";

function App() {
  const { isAuthenticated, user, message, error, loading } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }

    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
  }, [dispatch, message, error]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : (
    <Router>
      {/* <Navbar isAuthenticated={isAuthenticated} user={user} /> */}
      <Routes>
        <Route path="/" element={<Hero></Hero>}></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route
          path="/login"
          element={
            <ProtectedRoute
              isAuthenticated={!isAuthenticated}
              redirect={`${
                user?.role === "student"
                  ? "/profile"
                  : user?.role === "teacher"
                  ? "/profile"
                  : user?.role === "finance"
                  ? "/finance"
                  : user?.role === "admin"
                  ? "/admin"
                  : user?.role === "hr"
                  ? "/hr"
                  : user?.role === "qc"
                  ? "/qc"
                  : "/login"
              }`}
            >
              <Login></Login>
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/signup" element={<Register></Register>}></Route>
        <Route
          path="/contactmenu"
          element={
            <ContactMenu
              isAuthenticated={isAuthenticated}
              user={user}
            ></ContactMenu>
          }
        ></Route>
        <Route
          path="/forgotpassword"
          element={<ForgetPassword></ForgetPassword>}
        ></Route>

        <Route
          path="/profile"
          element={
            <ProtectedRoute
              isAuthenticated={
                (isAuthenticated && user?.role === "teacher") ||
                user?.role === "student"
              }
              redirect="/login"
            >
              <Profile isAuthenticated={isAuthenticated} user={user}></Profile>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/classchedule"
          element={
            <ClassSchedule
              isAuthenticated={isAuthenticated}
              user={user}
            ></ClassSchedule>
          }
        ></Route>

        <Route
          path="/attendancehistory"
          element={
            <AttendanceHistory
              isAuthenticated={isAuthenticated}
              user={user}
            ></AttendanceHistory>
          }
        ></Route>

        {/* Student Paths */}

        <Route
          path="student/examhistory"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated && user?.role === "student"}
              redirect="/profile"
            >
              <ExamHistory
                isAuthenticated={isAuthenticated}
                user={user}
              ></ExamHistory>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="student/performancereport"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated && user.role === "student"}
              redirect="/profile"
            >
              <PerfromanceReport
                isAuthenticated={isAuthenticated}
                user={user}
              ></PerfromanceReport>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="student/feerecord"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated && user.role === "student"}
              redirect="/profile"
            >
              <FeeRecord
                isAuthenticated={isAuthenticated}
                user={user}
              ></FeeRecord>
            </ProtectedRoute>
          }
        ></Route>
        {/* Student Paths */}

        {/* Teacher Routes */}

        <Route
          path="teacher/salaryrecord"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated && user.role === "teacher"}
              redirect="/profile"
            >
              <SalaryRecord
                isAuthenticated={isAuthenticated}
                user={user}
              ></SalaryRecord>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="teacher/students"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated && user.role === "teacher"}
              redirect="/redirect"
            >
              <Students
                isAuthenticated={isAuthenticated}
                user={user}
              ></Students>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="teacher/performance"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated && user.role === "teacher"}
              redirect="/profile"
            >
              <TeacherPerformance
                isAuthenticated={isAuthenticated}
                user={user}
              ></TeacherPerformance>
            </ProtectedRoute>
          }
        ></Route>

        {/* Teacher Routes */}

        {/* Finance Routes */}
        <Route
          path="/finance"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated && user.role === "finance"}
              redirect="/profile"
            >
              <SalaryGeneration
                isAuthenticated={isAuthenticated}
                user={user}
              ></SalaryGeneration>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/f/feerecord"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated && user.role === "finance"}
              redirect="/profile"
            >
              <FinanceFeeRecord
                isAuthenticated={isAuthenticated}
                user={user}
              ></FinanceFeeRecord>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/f/incomerecord"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated && user.role === "finance"}
              redirect="/profile"
            >
              <IncomeRecord
                isAuthenticated={isAuthenticated}
                user={user}
              ></IncomeRecord>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/f/expenserecord"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated && user.role === "finance"}
              redirect="/profile"
            >
              <ExpenseRecord
                isAuthenticated={isAuthenticated}
                user={user}
              ></ExpenseRecord>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/f/companyassets"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated && user.role === "finance"}
              redirect="/profile"
            >
              <CompanyAssets
                isAuthenticated={isAuthenticated}
                user={user}
              ></CompanyAssets>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/f/invoices"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated && user.role === "finance"}
              redirect="/profile"
            >
              <SendInvoice
                isAuthenticated={isAuthenticated}
                user={user}
              ></SendInvoice>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/f/createinvoice"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated && user.role === "finance"}
              redirect="/profile"
            >
              <CreateInvoice
                isAuthenticated={isAuthenticated}
                user={user}
              ></CreateInvoice>
            </ProtectedRoute>
          }
        ></Route>

        {/* Finance Routes */}

        {/* QC Routes */}
        <Route
          path="/qc"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated && user.role === "qc"}
              redirect="/profile"
            >
              <QStudents
                isAuthenticated={isAuthenticated}
                user={user}
              ></QStudents>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/qc/teachers"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated && user.role === "qc"}
              redirect="/profile"
            >
              <QTeachers
                isAuthenticated={isAuthenticated}
                user={user}
              ></QTeachers>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/qc/issuecertificates"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated && user.role === "qc"}
              redirect="/profile"
            >
              <IssueCertificate
                isAuthenticated={isAuthenticated}
                user={user}
              ></IssueCertificate>
            </ProtectedRoute>
          }
        ></Route>

        {/* QC Routes */}

        {/* HR Routes */}

        <Route
          path="/hr"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated && user.role === "hr"}
              redirect="/profile"
            >
              <HTeachers
                isAuthenticated={isAuthenticated}
                user={user}
              ></HTeachers>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/hr/issueletters"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated && user.role === "hr"}
              redirect="/profile"
            >
              <IssueLetters
                isAuthenticated={isAuthenticated}
                user={user}
              ></IssueLetters>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/hr/teachertraining"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated && user.role === "hr"}
              redirect="/profile"
            >
              <TeacherTraining
                isAuthenticated={isAuthenticated}
                user={user}
              ></TeacherTraining>
            </ProtectedRoute>
          }
        ></Route>

        {/* HR Routes */}

        {/* Admin Routes */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute
              isAdmin={isAuthenticated && user.role === "admin"}
              adminRoute={true}
              redirectAdmin="/profile"
            >
              <AdminDashboard></AdminDashboard>
            </ProtectedRoute>
          }
        ></Route>

        {/* Admin Routes */}
      </Routes>

      <Toaster />
    </Router>
  );
}

export default App;
