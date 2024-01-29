import React from "react";
import "./schedule.scss";
import placholder from "../../../assets/placeholder.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Schedule = (props) => {
  return (
    <div className="schedule">
      <img src={props.image == "" ? placholder : props.image} alt="" />
      <div>
        <h4>{props.teacher || "Teacher"}</h4>
        <p>{props.desination || "Designation"}</p>
      </div>

      <h4>{props.course_name || "Course Name"}</h4>

      <Link to={"/room/locus"}>
        <FaArrowRight />
      </Link>
    </div>
  );
};

export default Schedule;
