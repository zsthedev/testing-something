import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../profile/profile.scss";
import logo from "../../../assets/logo.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./fee.scss";
import { useDispatch, useSelector } from "react-redux";
import { getMyInvoices } from "../../../redux/actions/invoices";

const ClassSchedule = ({ isAuthenticated, user }) => {
  const [date, setDate] = useState(new Date());
  const role = user.role;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyInvoices());
  }, []);

  const myInvoices = useSelector((state) => state.invoices?.invoices);
  return (
    <section className="profile schedule-section">
      <div className="row">
        <div className="col1" id="feesec">
          <h2>Current Year</h2>
          <div className="col1-row" id="performance-row">
            <table>
              <thead>
                <tr id="fee">
                  <th>Chalan No</th>
                  <th>Item</th>

                  <th>Due Date</th>
                  <th>Status</th>
                  <th>Due Amount</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {myInvoices && myInvoices.length > 0
                  ? myInvoices.map((i) => (
                      <tr>
                        <td>{i._id}</td>
                        <td>{i.items[0].title}</td>

                        <td>{new Date(i.dueDate).toLocaleDateString()}</td>
                        <td>{i.status}</td>
                        <td>${i.amount}</td>
                        <td>
                          <Link
                            id="invoice_btn"
                            to={i.invoice_url}
                            target="_blank"
                          >
                            Pay
                          </Link>
                        </td>
                      </tr>
                    ))
                  : "No Invoices"}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassSchedule;
