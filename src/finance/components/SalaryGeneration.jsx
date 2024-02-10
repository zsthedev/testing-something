import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import placeholder from "../assets/placeholder.jpg";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllInvoices, getAllStudents } from "../../redux/actions/finance";
import { getAllCourses } from "../../redux/actions/course";
import Loader from "../../Loader";
import { logout } from "../../redux/actions/user";

const SalaryGeneration = () => {
  const dispatch = useDispatch();

  const [image, setImage] = useState("");
  const [name, setName] = useState("");

  const [status, setStatus] = useState("");

  const role = "teacher";

  const { loading, message, error } = useSelector((state) => state.finance);
  const [visible, setVisible] = useState(false);

  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  useEffect(() => {
    dispatch(getAllStudents());
    dispatch(getAllCourses());
    dispatch(getAllInvoices());
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <section className="profile">
      <div className="row">
        <div className="col1">
          <div className="col1-content">
            <h2>Salary Records</h2>
            <table>
              <tr>
                <th>Teacher Name</th>
                <th>Basic Salary</th>
                <th>Hourly Rate</th>
                <th>Hours</th>
                <th>Class Rate</th>
                <th>Classes Taken</th>
                <th>Replacement</th>
                <th>Deduction</th>
                <th>Total Salary</th>
                <th>Action</th>
              </tr>

              <tr>
                <td>Abbas Khan</td>
                <td>20,000</td>
                <td>500</td>
                <td>10</td>
                <td>200</td>
                <td>5</td>
                <td>12</td>
                <td>500</td>
                <td>{20000 + 500 * 10 + 200 * 5 + 12 * 500 - 500}</td>

                <td>
                  <Link to={""}>Update Rate</Link>
                </td>
              </tr>

              <tr>
                <td>Teacher</td>
                <td>20,000</td>
                <td>500</td>
                <td>10</td>
                <td>200</td>
                <td>5</td>
                <td>12</td>
                <td>500</td>
                <td>{20000 + 500 * 10 + 200 * 5 + 12 * 500 - 500}</td>

                <td>
                  <Link to={""}>Update Rate</Link>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalaryGeneration;
