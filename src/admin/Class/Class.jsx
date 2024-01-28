import React from "react";
import "./class.scss";
import Schedule from "../../student/components/class schedule/Schedule";
import { Link } from "react-router-dom";

const Class = () => {
  return (
    <section className="class">
      <div className="row">
        <h2>Classes</h2>
        <div className="btn-row">
          <Link to={"/admin/classes/create"}>Create New</Link>
        </div>
        <div className="schedule-row">
          <Schedule></Schedule>
        </div>
      </div>
    </section>
  );
};

export default Class;
