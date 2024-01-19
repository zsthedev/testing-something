import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import { createInvoice } from "../../../redux/actions/finance";
import { clear } from "@testing-library/user-event/dist/clear";
import Loader from "../../../Loader";

const CreateInvoice = () => {
  const dispatch = useDispatch();

  const [description, setDescription] = useState("");
  const [days, setDays] = useState("");
  const [item, setItem] = useState("");
  const [customer, setCustomer] = useState("");

  const customers = useSelector((state) => state.finance.students.students);
  const items = useSelector((state) => state.courses.courses.courses);

  const navigate = useNavigate();

  const { error, loading, message } = useSelector((state) => state.finance);

  useEffect(() => {
    if (message) {
      toast.success(message.messsage);
      dispatch({ type: "clearMessage" });
      navigate("/f/invoices");
    }

    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
  }, [dispatch, message, error]);

  const customerOptions = customers?.map((c) => ({
    value: c._id,
    label: c.name,
  }));

  const itemOptions = items.map((c) => ({
    value: c._id,
    label: c.title,
  }));

  const clickHandler = (e) => {
    e.preventDefault();

    if (
      item.value === "" ||
      customer.value === "" ||
      description === "" ||
      days === ""
    ) {
      toast.error("Please Enter all Feilds");
    } else {
      dispatch(createInvoice(customer.value, item.value, description, days));
    }

    console.log("User: " + item.value);
    console.log("item: " + customer.value);
  };

  return loading ? (
    <Loader />
  ) : (
    <section className="create-invoice">
      <div className="back-row">
        <Link to={"/f/invoices"}>Back</Link>
      </div>
      <div id="create-invoice-row">
        <div className="create-invoice-col">
          <h2>Create Invoice</h2>
          <div className="customer-details">
            <p>Customer</p>
            <Select
              placeholder="Choose Customer"
              options={customerOptions}
              defaultValue={customer}
              onChange={setCustomer}
            ></Select>
          </div>

          <div className="customer-details">
            <p>Items</p>
            <Select
              placeholder="Choose Item"
              defaultValue={item}
              onChange={setItem}
              options={itemOptions}
              id="customerFeild"
            ></Select>
          </div>

          <div className="customer-details">
            <p>Description</p>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Enter Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="customer-details">
            <p>Days</p>
            <input
              type="text"
              placeholder="Enter Days"
              value={days}
              onChange={(e) => setDays(e.target.value)}
            />
          </div>

          <button onClick={clickHandler}>Send Invoice</button>
        </div>
        <div className="create-invoice-col1"></div>
      </div>
    </section>
  );
};

export default CreateInvoice;
