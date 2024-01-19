import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const submitHandler = () => {};
  return (
    <section className="contact about">
      <div className="row">
        <div className="col">
          <div className="text">
            <h2>Contact Us</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>
        <div className="col">
          <form
            action="
          "
            onSubmit={submitHandler}
          >
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              type="text"
              placeholder="Enter Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button className="accentBtn">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
