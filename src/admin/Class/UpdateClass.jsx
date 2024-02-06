import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Select from "react-select";
import { getAllTeachers, updateClass } from "../../redux/actions/admin";
import toast from "react-hot-toast";
import Loader from "../../Loader";

const UpdateClass = () => {
  const params = useParams();
  const { id, cid } = params;

  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((state) => state.admin);
  useEffect(() => {
    dispatch(getAllTeachers());
  }, []);

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }

    if (error) {
      toast.error(message);
      dispatch({ type: "clearError" });
    }
  }, [message, error]);

  const schedule = useSelector((state) => state.admin?.schedules);
  const schedul = useSelector((state) => state.admin?.schedule);

  const filteredClass = schedule.map((s) =>
    s.classes.filter((c) => c._id.toString() === cid.toString())
  );

  const [title, setTitle] = useState(filteredClass[0][0].title);
  const [teacher, setTeacher] = useState({
    value: filteredClass[0][0].teacher.teacherId,
    label: filteredClass[0][0].teacher.teacherName,
  });
  const [date, setDate] = useState(filteredClass[0][0].date);
  const [startTime, setStartTime] = useState(filteredClass[0][0].startTime);
  const [endTime, setEndTime] = useState(filteredClass[0][0].endTime);
  const [lesson, setLesson] = useState("");

  const teachers = useSelector((state) => state.admin?.teachers);

  const teacherOptions = teachers?.map((c) => ({
    value: c._id,
    label: c.name,
  }));

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateClass(
        date,
        title,
        teacher.value,
        schedul.studentId,
        id,
        cid,
        startTime,
        endTime
      )
    );
  };

  return loading ? (
    <Loader />
  ) : (
    <div id="update_class">
      <h2>Update Class</h2>
      <div className="row">
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
          <label htmlFor="lesson">Lesson</label>
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
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateClass;
