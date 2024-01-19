import React from "react";

const Salary = (props) => {
  return (
    <div id="salary">
      <p>{props.month || "Month"}</p>
      <p>{props.date || "Date"}</p>
      <p>{props.Amount || "Amount"}</p>
      <p>{props.status || "Status"}</p>
    </div>
  );
};

export default Salary;
