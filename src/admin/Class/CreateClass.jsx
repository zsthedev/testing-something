import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import toast from "react-hot-toast";
import { getAllStudents } from "../../redux/actions/finance";
import {
  addClass,
  createClass,
  getAllAdminStudents,
  getAllTeachers,
} from "../../redux/actions/admin";
import Loader from "../../Loader";

import { useNavigate, useParams } from "react-router-dom";

const CreateClass = () => {
  const teachers = useSelector((state) => state.admin?.teachers);
  const schedule = useSelector((state) => state.admin?.schedule);
  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((state) => state.admin);

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllTeachers());

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
      navigate("/admin/schedule");
    }
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
  }, [message, error]);

  const [title, setTitle] = useState("");
  const [teacher, setTeacher] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [lesson, setLesson] = useState("");
  const params = useParams();
  const { id } = params;

  const teacherOptions = teachers?.map((c) => ({
    value: c._id,
    label: c.name,
  }));

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      addClass(
        date,
        title,
        teacher.value,
        schedule.studentId,
        id,
        startTime,
        endTime
      )
    );
  };

  return loading ? (
    <Loader />
  ) : (
    <section className="class">
      <div className="row">
        <h2>Create Class</h2>
        <form onSubmit={submitHandler} action="" id="create-class">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="Title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="teacher">Select Teacher</label>
          <Select
            id="teacher"
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
          <label htmlFor="start">Start Time</label>
          <input
            id="start"
            type="time"
            placeholder="Start Time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
          <label htmlFor="end">End Time</label>
          <input
            id="end"
            type="time"
            placeholder="Start Time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
          <label htmlFor="lesson">Title</label>
          <Select
            id="lesson"
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
          <button>Create</button>
        </form>
      </div>
    </section>
  );
};

export default CreateClass;
