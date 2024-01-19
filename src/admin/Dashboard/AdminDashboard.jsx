import React, { useState } from "react";
import "./admin.scss";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [open, isOpen] = useState("");
  return (
    <section className="admin-dashboard">
      <div className="row">
        <div className="a-side-bar">
          <img src={logo} alt="" />
          <div id="adminLinks">
            <div className="dropdown">
              <button
                className="active"
                onClick={() =>
                  document
                    .getElementById("student-content")
                    .classList.add("show")
                }
              >
                Students
              </button>
              <div className="content" id="student-content">
                <Link to={""}>Create Student</Link>
                <Link to={""}>Create Teacher</Link>
              </div>
            </div>

            <div className="dropdown">
              <button
                className="active"
                onClick={(e) =>
                  document
                    .getElementById("teacher-content")
                    .classList.add("show")
                }
              >
                Teacher
              </button>
              <div className="content" id="teacher-content">
                <Link to={""}>Create Student</Link>
                <Link to={""}>Create Teacher</Link>
              </div>
            </div>

            <div className="dropdown">
              <button
                className="active"
                onClick={(e) =>
                  document
                    .getElementById("finance-content")
                    .classList.add("show")
                }
              >
                Finance
              </button>
              <div className="content" id="finance-content">
                <Link to={""}>Create Student</Link>
                <Link to={""}>Create Teacher</Link>
              </div>
            </div>

            <div className="dropdown">
              <button
                className="active"
                onClick={(e) =>
                  document.getElementById("hr-content").classList.add("show")
                }
              >
                HR
              </button>
              <div className="content" id="hr-content">
                <Link to={""}>Create Student</Link>
                <Link to={""}>Create Teacher</Link>
              </div>
            </div>

            <div className="dropdown">
              <button
                className="active"
                onClick={(e) =>
                  document.getElementById("qc-content").classList.add("show")
                }
              >
                QC
              </button>
              <div className="content" id="qc-content">
                <Link to={""}>Create Student</Link>
                <Link to={""}>Create Teacher</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="a-content"></div>
      </div>
    </section>
  );
};

export default AdminDashboard;
