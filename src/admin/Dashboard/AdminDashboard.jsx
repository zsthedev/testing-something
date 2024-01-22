import React, { useState } from "react";
import "./admin.scss";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import placeholder from "../assets/placeholder.jpg";
import { logout } from "../../redux/actions/user";
import { useDispatch } from "react-redux";

const AdminDashboard = ({ image }) => {
  const [open, isOpen] = useState(false);
  const [tOpen, isTOpen] = useState(false);
  const [fOpen, isfOpen] = useState(false);
  const [hOpen, ishOpen] = useState(false);
  const [qOpen, isqOpen] = useState(false);

  const [visible, setVisible] = useState("");
  const dispatch = useDispatch();
  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <section className="admin-dashboard">
      <div className="row">
        <div className="a-side-bar">
          <img src={logo} alt="" />
          <div id="adminLinks">
            <div className="admin-dropdown">
              <button className="active" onClick={() => isOpen(!open)}>
                Students
              </button>
              <div
                className={open ? "content show" : "hide"}
                id="student-content"
              >
                <Link to={""}>Create Student</Link>
                <Link to={""}>Create Teacher</Link>
              </div>
            </div>

            <div className="admin-dropdown">
              <button className="active" onClick={() => isTOpen(!tOpen)}>
                Teacher
              </button>
              <div
                className={tOpen ? "content show" : "hide"}
                id="teacher-content"
              >
                <Link to={""}>Create Student</Link>
                <Link to={""}>Create Teacher</Link>
              </div>
            </div>

            <div className="admin-dropdown">
              <button className="active" onClick={(e) => isfOpen(!fOpen)}>
                Finance
              </button>
              <div
                className={fOpen ? "content show" : "hide"}
                id="finance-content"
              >
                <Link to={""}>Create Student</Link>
                <Link to={""}>Create Teacher</Link>
              </div>
            </div>

            <div className="admin-dropdown">
              <button className="active" onClick={(e) => ishOpen(!hOpen)}>
                HR
              </button>
              <div className={hOpen ? "content show" : "hide"} id="hr-content">
                <Link to={""}>Create Student</Link>
                <Link to={""}>Create Teacher</Link>
              </div>
            </div>

            <div className="admin-dropdown">
              <button className="active" onClick={(e) => isqOpen(!qOpen)}>
                QC
              </button>
              <div className={qOpen ? "content show" : "hide"} id="qc-content">
                <Link to={""}>Create Student</Link>
                <Link to={""}>Create Teacher</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="a-content">
          <div className="pr-image-row">
            <div className="dropdown">
              <img
                id="pr-image"
                src={placeholder}
                alt=""
                onClick={() => setVisible(!visible)}
              />
              <ul className={visible ? "show" : "hide"}>
                <li onClick={clickHandler}>Logout</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
