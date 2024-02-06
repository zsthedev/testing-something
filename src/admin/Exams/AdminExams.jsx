import React, { useEffect } from "react";
import "./exams.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllExams } from "../../redux/actions/exam";
const AdminExams = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllExams());
  }, []);

  const exams = useSelector((state) => state.exam?.exams);
  return (
    <div id="adminExams">
      <h2>Exams</h2>

      <div className="btn-row">
        <Link to="/admin/createxam">Create New</Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Due Date</th>
            <th>Total Questions</th>
            <th>Total Marks</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {exams && exams.length > 0
            ? exams.map((e) => (
                <tr>
                  <td>{e.title}</td>
                  <td>{e.duedate}</td>
                  <td>{e.questions.length}</td>
                  <td>{e.totalMarks}</td>
                  <td>{e.status}</td>
                  <td id="exams-actions-row">
                    <Link to={`/admin/exam/u/${e._id}`}>Update</Link>
                    <Link to={`/admin/exam/d/${e._id}`}>Details</Link>
                  </td>
                </tr>
              ))
            : "No Exams"}
        </tbody>
      </table>
    </div>
  );
};

export default AdminExams;
