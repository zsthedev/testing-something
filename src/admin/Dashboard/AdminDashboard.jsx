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
    </section>
  );
};

export default AdminDashboard;
