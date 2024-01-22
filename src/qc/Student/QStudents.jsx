import React, { useState } from "react";
import { Link } from "react-router-dom";
import placeholder from "../../assets/placeholder.jpg";
import logo from "../../assets/logo.png";
import QStudent from "./QStudent";
import "./qstudent.scss";
import { logout } from "../../redux/actions/user";
import { useDispatch } from "react-redux";

const QStudents = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");

  const [status, setStatus] = useState("");

  const [visible, setVisible] = useState("");

  const dispatch = useDispatch();
  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <section className="profile">
      <div className="row">
        <div className="col">
          <img src={logo} alt="" />
          <ul>
            <li>
              <Link to="/qc" className="active">
                Students
              </Link>
            </li>

            <li>
              <Link to="/qc/teachers">Teachers</Link>
            </li>

            <li>
              <Link to="/qc/issuecertificates">Issue Certificate</Link>
            </li>
          </ul>
        </div>
        <div className="col1">
          <div className="col1-content">
            <div className="pr-image-row">
              <div className="dropdown">
                <img
                  id="pr-image"
                  src={image == "" ? placeholder : image}
                  alt=""
                  onClick={() => setVisible(!visible)}
                />
                <ul className={visible ? "show" : "hide"}>
                  <li onClick={clickHandler}>Logout</li>
                </ul>
              </div>
            </div>

            <div className="q-students">
              <h2>Students</h2>
              <div className="q-students-row">
                <QStudent></QStudent>
                <QStudent></QStudent>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QStudents;
