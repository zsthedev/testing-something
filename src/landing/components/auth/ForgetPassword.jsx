import React, { useState } from "react";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="login">
      <div className="row">
        <form action="">
          <h2>Forget Password</h2>
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="accentBtn">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ForgetPassword;
