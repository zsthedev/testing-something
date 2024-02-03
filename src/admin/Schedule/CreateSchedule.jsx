import React, { useEffect, useState } from "react";
import Select from "react-select";
import "./schedule.scss";
import { useDispatch, useSelector } from "react-redux";
import { createSchedule, getAllAdminStudents } from "../../redux/actions/admin";
import Loader from "../../Loader";
import toast from "react-hot-toast";
import { getAllStudents } from "../../redux/actions/finance";
import { useNavigate } from "react-router-dom";
const CreateSchedule = () => {
  const [title, setTitle] = useState("");
  const [studentId, setStudentId] = useState("");
  const [month, setMonth] = useState("");
  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((state) => state.admin);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllAdminStudents());
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
      navigate("admin/schedule");
    }
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
  }, [message, error]);
  const students = useSelector((state) => state.admin?.students);
  const studentsOption = students?.map((c) => ({
    value: c._id,
    label: c.name,
  }));

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(createSchedule(title, studentId.value, month));
  };
  return loading ? (
    <Loader />
  ) : (
    <div id="create-schedule">
      <h2>Create Schedule</h2>
      <div className="row">
        <form action="" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Select
            options={studentsOption}
            defaultValue={studentId}
            onChange={setStudentId}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: "rgba(4, 127, 106, 0.192)",
                padding: "5px",
                border: "none",
              }),
            }}
            placeholder="Select Student"
          ></Select>
          <input
            type="date"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />

          <button>Create</button>
        </form>
      </div>
    </div>
  );
};

export default CreateSchedule;
