/*import React, { useState } from "react";
import toast from 'react-hot-toast'
import '../Contact/Contacting.css'

const Registering = () => {
  const [formdata, setformdata] = useState({
    firstname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handchange = (e) => {
    const { name, value } = e.target;
    setformdata({
      ...formdata,
      [name]: value,
    });
  };

  const createAct = (e) => {
    e.preventDefault(); // prevent page reload
    const emptyfield = [];

    if (!formdata.firstname.trim()) emptyfield.push("First Name");
    if (!formdata.email.trim()) emptyfield.push("Email");
    if (!formdata.password.trim()) emptyfield.push("Password");
    if (!formdata.confirmpassword.trim()) emptyfield.push("Confirm Password");

    if (emptyfield.length > 0) {
      emptyfield.forEach((item) => {
        toast.error(`${item} cannot be empty`);
      });
      return;
    }

    if (formdata.password !== formdata.confirmpassword) {
      toast.error("Passwords do not match");
      return;
    }

    toast.success("Registered successfully!");
    console.log("Form Submitted:", formdata); // For debugging
  };

  return (
    <div className="register">
      <div className="d-flex align-item-center justify-content-left text-align-center">
        <h5>Register</h5>
      </div>
      <div className="container">
        <form className="form-control" onSubmit={createAct}>
          <input
            type="text"
            className="form-control"
            name="firstname"
            placeholder="Your Name"
            value={formdata.firstname}
            onChange={handchange}
          />
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            value={formdata.email}
            onChange={handchange}
          />
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            value={formdata.password}
            onChange={handchange}
          />
          <input
            type="password"
            className="form-control"
            name="confirmpassword"
            placeholder="Confirm Password"
            value={formdata.confirmpassword}
            onChange={handchange}
          />
          <button type="submit" className="btn btn-primary mt-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registering;*/
