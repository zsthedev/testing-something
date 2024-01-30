import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import toast from "react-hot-toast";
import { getAllStudents } from "../../redux/actions/finance";
import {
  createClass,
  getAllAdminStudents,
  getAllTeachers,
} from "../../redux/actions/admin";
import Loader from "../../Loader";

import { useNavigate } from "react-router-dom";

const CreateClass = () => {
  const students = useSelector((state) => state.admin?.students);
  const teachers = useSelector((state) => state.admin?.teachers);
  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((state) => state.admin);

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllAdminStudents());
    dispatch(getAllTeachers());

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
      navigate("/admin/classes");
    }
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
  }, [message, error]);

  const [title, setTitle] = useState("");
  const [teacher, setTeacher] = useState("");
  const [student, setStudent] = useState("");
  const [duration, setDuration] = useState("");
  const [startTime, setStartTime] = useState("");
  const [lesson, setLesson] = useState("");

  const studentsOption = students?.map((c) => ({
    value: c._id,
    label: c.name,
  }));

  const teacherOptions = teachers?.map((c) => ({
    value: c._id,
    label: c.name,
  }));

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      createClass(title, student.value, teacher.value, duration, startTime)
    );
  };

  return loading ? (
    <Loader />
  ) : (
    <section className="class">
      <div className="row">
        <h2>Create Class</h2>
        <form onSubmit={submitHandler} action="" id="create-class">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Select
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: "rgba(4, 127, 106, 0.192)",
                padding: "5px",
                border: "none",
              }),
            }}
            options={teacherOptions}
            placeholder="Choose Teacher"
            defaultValue={teacher}
            onChange={setTeacher}
          ></Select>
          <Select
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: "rgba(4, 127, 106, 0.192)",
                padding: "5px",
                border: "none",
              }),
            }}
            options={studentsOption}
            placeholder="Choose Student"
            defaultValue={student}
            onChange={setStudent}
          ></Select>

          <input
            type="text"
            placeholder="Duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />

          <Select
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: "rgba(4, 127, 106, 0.192)",
                padding: "5px",
                border: "none",
              }),
            }}
            placeholder="Choose Lesson"
            defaultValue={lesson}
            onChange={setLesson}
          ></Select>
          <input
            type="datetime-local"
            placeholder="Duration"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />

          <button>Create</button>
        </form>
      </div>
    </section>
  );
};

export default CreateClass;
