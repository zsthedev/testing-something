import React from "react";

const Attendance = (props) => {
  return (
    <div id="attendance">
      <h3>{props.number || "0"} </h3>

      <h4>{props.text || "Today Class"} </h4>
    </div>
  );
};

export default Attendance;
