import React from "react";
import assesments from "../assets/icons/QC Icons/assessments.svg";

const QStudent = () => {
  return (
    <div id="qstudent">
      <p>Name</p>
      <p>Nationality</p>
      <div>
        <img src={assesments} className="icon" alt="" />
        <img src="" className="icon" alt="" />
      </div>
    </div>
  );
};

export default QStudent;
