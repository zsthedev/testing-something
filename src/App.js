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
import Sidebar from "./admin/Sidebar/Sidebar";
import Class from "./admin/Class/Class";
import CreateClass from "./admin/Class/CreateClass";
import Room from "./room/Room";
import Schedule from "./admin/Schedule/Schedule";
import ScheduleDetails from "./admin/Schedule/ScheduleDetails";
import CreateSchedule from "./admin/Schedule/CreateSchedule";
import UpdateClass from "./admin/Class/UpdateClass";
import ClassDetails from "./admin/Class/ClassDetails";
import Exam from "./student/components/exam history/Exam";
import AdminExams from "./admin/Exams/AdminExams";
import UpdateExams from "./admin/Exams/UpdateExams";
import ExamDetails from "./admin/Exams/ExamDetails";
import CreateExam from "./admin/Exams/CreateExam";

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

  const adminSidebarItems = [
    {
      value: [
        { link: "/admin/schedule", title: "Schedules" },
        { link: "/admin/exams", title: "Exams" },
      ],
      label: "Students",
    },
  ];

  return loading ? (
    <Loader />
  ) : (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} user={user} />
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
                  ? "/classchedule"
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
              isAuthenticated={isAuthenticated && user?.role === "teacher"}
              redirect="/login"
            >
              <Profile isAuthenticated={isAuthenticated} user={user}></Profile>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/classchedule"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              redirect="/profile"
            >
              <ClassSchedule
                isAuthenticated={isAuthenticated}
                user={user}
              ></ClassSchedule>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/room/:roomId"
          element={
            <ProtectedRoute
              isAuthenticated={
                (isAuthenticated && user?.role === "student") ||
                user?.role === "teacher"
              }
              redirect="/login"
            >
              <Room user={user} isAuthenticated={isAuthenticated}></Room>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/attendancehistory"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} redirect="/login">
              <AttendanceHistory
                isAuthenticated={isAuthenticated}
                user={user}
              ></AttendanceHistory>
            </ProtectedRoute>
          }
        ></Route>

        {/* Student Paths */}

        <Route
          path="student/examhistory"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated && user?.role === "student"}
              redirect="/login"
            >
              <ExamHistory
                isAuthenticated={isAuthenticated}
                user={user}
              ></ExamHistory>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="student/exam/:id"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated && user?.role === "student"}
              redirect="/login"
            >
              <Exam isAuthenticated={isAuthenticated} user={user}></Exam>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="student/performancereport"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated && user?.role === "student"}
              redirect="/login"
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
              isAuthenticated={isAuthenticated && user?.role === "student"}
              redirect="/login"
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
          path="t/salaryrecords"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated && user?.role === "teacher"}
              redirect="/login"
            >
              <SalaryRecord
                isAuthenticated={isAuthenticated}
                user={user}
              ></SalaryRecord>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="t/students"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated && user.role === "teacher"}
              redirect="/login"
            >
              <Students
                isAuthenticated={isAuthenticated}
                user={user}
              ></Students>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="t/performance"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated && user.role === "teacher"}
              redirect="/login"
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
              isAuthenticated={isAuthenticated && user?.role === "finance"}
              redirect="/login"
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
              isAuthenticated={isAuthenticated && user?.role === "finance"}
              redirect="/login"
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
              isAuthenticated={isAuthenticated && user?.role === "finance"}
              redirect="/login"
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
              isAuthenticated={isAuthenticated && user?.role === "finance"}
              redirect="/login"
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
              isAuthenticated={isAuthenticated && user?.role === "finance"}
              redirect="/login"
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
              isAuthenticated={isAuthenticated && user?.role === "finance"}
              redirect="/login"
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
              isAuthenticated={isAuthenticated && user?.role === "finance"}
              redirect="/login"
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
              isAuthenticated={isAuthenticated && user?.role === "qc"}
              redirect="/login"
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
              isAuthenticated={isAuthenticated && user?.role === "qc"}
              redirect="/login"
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
              isAuthenticated={isAuthenticated && user?.role === "qc"}
              redirect="/login"
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
              redirect="/login"
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
              isAuthenticated={isAuthenticated && user?.role === "hr"}
              redirect="/login"
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
              redirect="/login"
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
              isAuthenticated={isAuthenticated}
              isAdmin={user && user.role === "admin"}
              adminRoute={true}
              redirectAdmin="/login"
            >
              <Sidebar
                items={adminSidebarItems}
                component={AdminDashboard}
              ></Sidebar>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/admin/classes"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              isAdmin={user && user.role === "admin"}
              adminRoute={true}
              redirectAdmin="/login"
            >
              <Sidebar
                items={adminSidebarItems}
                user={user}
                component={Class}
              ></Sidebar>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/admin/schedule"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              isAdmin={user && user.role === "admin"}
              adminRoute={true}
              redirectAdmin="/login"
            >
              <Sidebar
                items={adminSidebarItems}
                user={user}
                component={Schedule}
              ></Sidebar>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/admin/schedule/:id"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              isAdmin={user && user.role === "admin"}
              adminRoute={true}
              redirectAdmin="/login"
            >
              <Sidebar
                items={adminSidebarItems}
                user={user}
                component={ScheduleDetails}
              ></Sidebar>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/admin/createschedule"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              isAdmin={user && user.role === "admin"}
              adminRoute={true}
              redirectAdmin="/login"
            >
              <Sidebar
                items={adminSidebarItems}
                user={user}
                component={CreateSchedule}
              ></Sidebar>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/admin/schedule/:id/createclass"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              isAdmin={user && user.role === "admin"}
              adminRoute={true}
              redirectAdmin="/login"
            >
              <Sidebar
                items={adminSidebarItems}
                component={CreateClass}
              ></Sidebar>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/admin/schedule/:id/c/:cid"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              isAdmin={user && user.role === "admin"}
              adminRoute={true}
              redirectAdmin="/login"
            >
              <Sidebar
                items={adminSidebarItems}
                component={UpdateClass}
              ></Sidebar>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/admin/s/:id/c/:cid"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              isAdmin={user && user.role === "admin"}
              adminRoute={true}
              redirectAdmin="/login"
            >
              <Sidebar
                items={adminSidebarItems}
                component={ClassDetails}
              ></Sidebar>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/admin/exams"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              isAdmin={user && user.role === "admin"}
              adminRoute={true}
              redirectAdmin="/login"
            >
              <Sidebar
                items={adminSidebarItems}
                component={AdminExams}
              ></Sidebar>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/admin/exam/u/:id"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              isAdmin={user && user.role === "admin"}
              adminRoute={true}
              redirectAdmin="/login"
            >
              <Sidebar
                items={adminSidebarItems}
                component={UpdateExams}
              ></Sidebar>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/admin/exam/d/:id"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              isAdmin={user && user.role === "admin"}
              adminRoute={true}
              redirectAdmin="/login"
            >
              <Sidebar
                items={adminSidebarItems}
                component={ExamDetails}
              ></Sidebar>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/admin/createxam"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              isAdmin={user && user.role === "admin"}
              adminRoute={true}
              redirectAdmin="/login"
            >
              <Sidebar
                items={adminSidebarItems}
                component={CreateExam}
              ></Sidebar>
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
