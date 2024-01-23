import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../profile/profile.scss";
import logo from "../../../assets/logo.png";
import Select from "react-select";
import "./contact.scss";
const ContactMenu = ({ isAuthenticated, user }) => {
  const contactOptions = [
    { value: "teacher", label: "Teacher" },
    { value: "finance", label: "Finance" },
  ];

  const role = user.role;

  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");
  return (
    <section className="profile">
      <div className="row">
        <div className="col1 contact">
          <h2>Contact Menu</h2>

          <form action="">
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
              placeholder="Send To"
              value={to}
              onChange={setTo}
              options={contactOptions}
            ></Select>
            <textarea
              cols="30"
              rows="10"
              placeholder="Enter Your Message"
            ></textarea>

            <button>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMenu;
