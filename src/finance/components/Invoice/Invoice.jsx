import React from "react";
import placeholder from "../../assets/placeholder.jpg";
const Invoice = (props) => {
  return (
    <div id="invoice">
      <img src={props.image || placeholder} alt="" />
      <p>{props.name || "Name"}</p>
      <p>{props.item || "Item"}</p>
      <p>{props.amount || "Amount"}</p>
      <p>{props.status || "Status"}</p>
      <div className="actions"></div>
    </div>
  );
};

export default Invoice;
