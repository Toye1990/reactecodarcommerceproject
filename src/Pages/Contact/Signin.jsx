import { useState } from "react";
import "../Contact/Contacting.css";
import toast from "react-hot-toast";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ContextData } from "../../Context/useContext";
import Loader from "../../component/Loader/Loader";

const Signin = () => {
  const Navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const { addUser, setMyToken } = ContextData();
  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });

  // await addUser(response.data.user);
  // await setMyToken(response.data.token);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const loginUser = async () => {
    setLoader(true);

    try {
      const empty = [];
      if (!formData.email || formData.email.trim() === "") {
        empty.push("Email is required");
      }

      if (!formData.password || formData.password.trim() === "") {
        empty.push("Password is required");
      }

      if (empty.length > 0) {
        empty.forEach((item) => {
          toast.error(item);
        });
        setLoader(false);
        return;
      }

      const response = await axios.post(
        "http://localhost:2233/api/v1/login",
        formData
      );

      if (response && response.status === 200 && response.data) {
        await addUser(response.data.user);
        await setMyToken(response.data.token);
        toast.success("Login Successful");
        setLoader(false);
        Navigate("/");
        return;
      } else {
        toast.error("Error Occured !");
        setLoader(false);
        return;
      }
    } catch (err) {
      if (err.response) {
        toast.error(`${err.response.data.message || err.message}`);
      } else {
        console.log("Error:", err.message);
        toast.error("Error Occurred");
      }
      setLoader(false);
    }
  };

  return (
    <div className="signinpage">
      <div className="container">
        <form className="form-control p-4">
          <div className="text-center mb-4">
            <h5>Login</h5>
          </div>

          <input
            type="email"
            className="form-control mb-3"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            className="form-control mb-3"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          {loader ? (
            <div className="btn btn-primary w-100">
              <Loader />
            </div>
          ) : (
            <div onClick={loginUser} className="btn btn-primary w-100">
              Login
            </div>
          )}

          <div className="text-center mt-3">
            <span>Don’t have an account? </span>
            <Link to="/Register">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
