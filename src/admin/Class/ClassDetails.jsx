import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllUsers } from "../../redux/actions/schedule";

const ClassDetails = () => {
  const { cid } = useParams();
  const schedule = useSelector((state) => state.admin?.schedule);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const selectedClass = schedule.classes.filter(
    (c) => c._id.toString() === cid
  );

  const allUsers = useSelector((state) => state.schedule?.allusers);
  const studentId = selectedClass[0].student.studentId;
  const teacherId = selectedClass[0].teacher.teacherId;

  const teacher =
    allUsers && allUsers.length > 0
      ? allUsers.filter((u) => u._id.toString() === teacherId)[0]
      : [];
  const student =
    allUsers && allUsers.length > 0
      ? allUsers.filter((u) => u._id.toString() === studentId)[0]
      : [];

  const teacherDetails =
    teacher && teacher.length > 0
      ? teacher.attendanceHistory.filter((h) => h.classId === cid)
      : [];

  const studentDetails =
    student && student.length > 0
      ? student.attendanceHistory.filter((h) => h.classId === cid)[0]
      : [];

  return (
    <div id="class-details">
      <h2>Class Details</h2>

      <div className="details">
        <p>
          <span>Title: </span>
          {selectedClass[0].title}
        </p>

        <p>
          <span>Start Time: </span>
          {selectedClass[0].startTime.split(":")[0] > 12
            ? selectedClass[0].startTime + " P.M"
            : selectedClass[0].startTime + " A.M"}
        </p>

        <p>
          <span>End Time: </span>
          {selectedClass[0].endTime.split(":")[0] > 12
            ? selectedClass[0].endTime + " P.M"
            : selectedClass[0].endTime + " A.M"}
        </p>

        <p>
          <span>Duration: </span>
          {selectedClass[0].duration} Minutes
        </p>
      </div>

      <h2>Student Details</h2>

      <div className="details">
        <p>
          <span>Attendance: </span>
          {studentDetails.status}
        </p>

        <p>
          <span>Joining Time: </span>
          {studentDetails.status === "absent"
            ? "Nill"
            : studentDetails.joiningTime}
        </p>
      </div>

      <h2>Teacher Details</h2>

      <div className="details">
        <p>
          <span>Attendance: </span>
          {teacherDetails.status ? teacherDetails.status : "Nill"}
        </p>

        <p>
          <span>Joining Time: </span>
          {teacherDetails.length > 0
            ? teacherDetails.status === "absent"
              ? "Nill"
              : teacherDetails.joiningTime
            : "Nill"}
        </p>
      </div>
    </div>
  );
};

export default ClassDetails;
