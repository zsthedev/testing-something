import React from "react";

const Absent = (props) => {
  return (
    <div id="absent">
      <div>
        <span>Day</span>
        <h3>{props.day || "Day"}</h3>
      </div>

      <div>
        <span>Day</span>
        <h3>{props.day || "Day"}</h3>
      </div>

      <div>
        <span>Date</span>
        <h3>{props.date || "Date"}</h3>
      </div>
      <div>
        <span>Marked By</span>
        <h3>{props.marked || "Marked By"}</h3>
      </div>
    </div>
  );
};

export default Absent;
