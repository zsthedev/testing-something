import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/logo.png";
import placeholder from "./../assets/placeholder.jpg";
import "./teacherperformance.scss";

const TeacherPerformance = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");

  const role = "teacher";

  return (
    <section className="profile">
      <div className="row">
        <div className="col1">
          <div className="col1-content">
            <div className="profile-details salary-section">
              <h2>Teacher Performance</h2>
              <table id="teacherperformance">
                <thead>
                  <tr id="performance">
                    <th>Subject</th>
                    <th>Student Rating</th>
                    <th>Faculty Rating</th>
                    <th>Overall Rating</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>1</td>
                    <td>English</td>
                    <td>10</td>
                    <td>8</td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td>English</td>
                    <td>10</td>
                    <td>8</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherPerformance;
