import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/logo.png";
import placeholder from "./../assets/placeholder.jpg";
import "./salary.scss";
import Salary from "./Salary";

const SalaryRecord = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");

  const role = "teacher";

  return (
    <section className="profile">
      <div className="row">
        <div className="col1">
          <div className="col1-content">
            <div className="profile-details salary-section">
              <h2>Salary Record</h2>

              <div className="salary-row">
                <table>
                  <tr>
                    <th>Month</th>
                    <th>Basic Salary</th>
                    <th>Hourly Rate</th>
                    <th>Hours</th>
                    <th>Class Rate</th>
                    <th>Classes Taken</th>
                    <th>Replacement</th>
                    <th>Deduction</th>
                    <th>Total Salary</th>
                    <th>Actions</th>
                  </tr>

                  <tr>
                    <td>Feburary</td>
                    <td>20,000</td>
                    <td>500</td>
                    <td>10</td>
                    <td>200</td>
                    <td>5</td>
                    <td>12</td>
                    <td>500</td>
                    <td>{20000 + 500 * 10 + 200 * 5 + 12 * 500 - 500}</td>
                    <td>
                      <button id="pdf">Download Pdf</button>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalaryRecord;
