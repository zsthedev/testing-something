import React from "react";

const Fee = (props) => {
  return (
    <div id="fee-record">
      <p>{props.name || "Student Name"}</p>
      <p>{props.amount || "Amount"}</p>
      <p>{props.duedate || "Due Date"}</p>
      <p>{props.status || "Status"}</p>
    </div>
  );
};

export default Fee;
