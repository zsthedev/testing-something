import React, { useEffect, useState } from "react";
import "./schedule.scss";
import placholder from "../../../assets/placeholder.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import moment from "moment-timezone";
import { convertTimeZone } from "./timezone";

const Schedule = (props) => {
  return (
    <div className="schedule">
      <div className="user-details">
        <img
          src={
            props.role === "teacher"
              ? props.student.avatar
              : props.role === "admin"
              ? props.teacher.avatar
              : props.teacher.avatar
          }
          alt=""
        />

        <div>
          <span>Teacher Name</span>
          <h4>
            {props.role === "student"
              ? props.teacher.teacherName
              : props.role === "admin"
              ? props.teacher.teacherName
              : props.student.studentName || "Teacher"}
          </h4>
        </div>
      </div>

      <div className="user-details">
        <img
          className={props.role === "admin" ? "show" : "hide"}
          src={props.student.avatar}
          alt=""
        />
        <div className={props.role === "admin" ? "show student-admin" : "hide"}>
          <span>Student Name</span>
          <h4>{props.student.studentName}</h4>
        </div>
      </div>

      <div>
        <span>Start Time</span>
        <h4>{props.start_time || "Start Time"}</h4>
      </div>
      <div>
        <span>Duration</span>
        <h4>{props.duration + " Minutes" || "Start Time"}</h4>
      </div>
      <div>
        <span>Lesson</span>
        <h4>{props.course_name || "Course Name"}</h4>
      </div>

      <Link
        className={
          props.role === "student" || props.role === "teacher" ? "show" : "hide"
        }
        to={`/room/${props.link}`}
      >
        <FaArrowRight />
      </Link>
    </div>
  );
};

export default Schedule;
