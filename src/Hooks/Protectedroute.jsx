/*import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { ContextData } from "../Context/useContext";

const Protectedroute = ({ children }) => {
  const { token, user } = ContextData();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || !user) {
      toast.error("You are not logged in!");
      navigate("/login");
    }
  }, [token, user, navigate]);

  if (!token || !user) {
    return null; // prevents children from rendering before redirect
  }

  return children;
};

export default Protectedroute;*/

/*
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { ContextData } from "../Context/useContext";

const Protectedroute = ({ children }) => {
  const { token, user } = ContextData();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || !user) {
      toast.error("You must log in first");
      navigate("/Login");   // <-- Redirect to login page
    }
  }, [token, user, navigate]);

  // While redirecting, do NOT render children
  if (!token || !user) {
    return null;
  }

  return children;
};

export default Protectedroute;

*/


import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { ContextData } from "../Context/useContext";

const Protectedroute = ({ children }) => {
  const { token, user } = ContextData();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || !user) {
      toast.error("Please login to continue");
      navigate("/signin", { replace: true }); // Redirect safely
    }
  }, [token, user, navigate]);

  // While checking authentication → don't render children
  if (!token || !user) {
    return null; 
  }

  return children;
};

export default Protectedroute;
