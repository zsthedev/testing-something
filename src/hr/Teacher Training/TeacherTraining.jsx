import React, { useState } from "react";
import { Link } from "react-router-dom";
import placeholder from "../../assets/placeholder.jpg";
import logo from "../../assets/logo.png";
import { logout } from "../../redux/actions/user";
import { useDispatch } from "react-redux";

const TeacherTraining = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");

  const [status, setStatus] = useState("");
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <section className="profile">
      <div className="row">
        <div className="col1">
          <div className="col1-content">
            <div className="q-students">
              <h2>Teacher Training</h2>
              <div className="q-students-row"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherTraining;
