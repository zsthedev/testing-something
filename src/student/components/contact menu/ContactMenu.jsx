import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../profile/profile.scss";
import logo from "../../../assets/logo.png";
import Select from "react-select";
import "./contact.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../redux/actions/schedule";
import { sendContactQuery } from "../../../redux/actions/user";

const ContactMenu = ({ isAuthenticated, user }) => {
  const contactOptions = [
    { value: "teacher", label: "Teacher" },
    { value: "finance", label: "Finance" },
    { value: "hr", label: "HR" },
    { value: "qc", label: "QC" },
    { value: "admin", label: "Admin" },
    { value: "ceo", label: "CEO" },
  ];
  const [department, setDepartment] = useState("");
  const [person, setPerson] = useState("");
  const [message, setMessage] = useState("");
  const allUsers = useSelector((state) => state.schedule?.allusers) || [];

  const filterdUsers =
    department.value !== ""
      ? allUsers.filter((a) => a.role === department.value)
      : [];

  const personOptions = filterdUsers?.map((c) => ({
    value: c._id,
    label: c.name,
  }));

  const role = user && user.role;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(sendContactQuery(person.value, user._id, message));
  };

  return (
    <section className="profile">
      <div className="row">
        <div className="col1 contact">
          <h2>Contact Menu</h2>

          <form action="" onSubmit={submitHandler}>
            <Select
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor: "#fff",
                  padding: "5px",
                  border: "none",
                  fontSize: "14px",
                }),
              }}
              placeholder="Choose Department"
              value={department}
              onChange={setDepartment}
              options={contactOptions}
            ></Select>
            <Select
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor: "#fff",
                  padding: "5px",
                  border: "none",
                  fontSize: "14px",
                }),
              }}
              placeholder="Choose Person"
              value={person}
              onChange={setPerson}
              options={personOptions}
            ></Select>
            <textarea
              cols="30"
              rows="10"
              value={message}
              placeholder="Enter Your Message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMenu;
