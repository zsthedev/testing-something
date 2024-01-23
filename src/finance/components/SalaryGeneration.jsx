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
          <div className="col1-content"></div>
        </div>
      </div>
    </section>
  );
};

export default SalaryGeneration;
