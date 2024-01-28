import React, { useState } from "react";
import "./sidebar.scss";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Sidebar = ({ items, component: Component }) => {
  const [open, isOpen] = useState("");
  return (
    <section id="admin-sidebar">
      <div className="row">
        <div className="col">
          <Link id="header" to={"/admin"}>
            <img src={logo} alt="" />
            <p>Admin Desk</p>
          </Link>
          <ul>
            {items.map((i) => (
              <div className="admin-dropdown">
                <button className="active" onClick={() => isOpen(!open)}>
                  {i.label}
                </button>
                <div
                  className={open ? "content show" : "hide"}
                  id="student-content"
                >
                  {i.value.map((v) => (
                    <Link to={v.link}>{v.title}</Link>
                  ))}
                </div>
              </div>
            ))}
          </ul>
        </div>
        <div className="col1">{Component && <Component />}</div>
      </div>
    </section>
  );
};

export default Sidebar;
