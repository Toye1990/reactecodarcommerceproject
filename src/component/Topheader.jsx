import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import "./Header.css";
//import Header from './Header';
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { ContextData } from "../Context/useContext";

const Topheader = ({ openMenu, menuOpen }) => {
  const { user, token, logout } = ContextData();
  /*
  const [menuOpen, setMenuOpen] = useState(false)

  const openMe = () =>{
    setMenuOpen(!menuOpen)
  }
*/
  return (
    <>
      <div className="topheader">
        <div className="subtopheader smallnewheader">
          <div className="smalllefttext">
            <div className="signintext">
              <div className="textandiconleft">
                <div className="english">
                  English <FaAngleDown className="down4" size={12} />
                </div>
                <div className="pipe1"></div>
                <div className="usd">
                  USD <FaAngleDown className="down3" size={12} />
                </div>
                <div className="pipe1"></div>
              </div>
              <div className="helo">
                {!user || !token ? <Link to="/signin">Login</Link> : ""}
                {!user || !token ? <Link to="/register">register</Link> : ""}
                {!user || !token ? (
                  ""
                ) : (
                  <div className="logprocess">
                    <div className="login">welcome {user.firstname}</div>
                    <div className="logout" onClick={logout}>
                      Logout
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="smallrighttext">
            <div className="textandiconright">
              <div className="dashboard">
                <FaAngleDown className="down1" size={12} />{" "}
                <Link to="/dashboard">Dashboard</Link>
              </div>
              <div className="pipe1"></div>
              <div className="track">
                <FaAngleDown className="down2" size={12} /> Track order
              </div>
            </div>
          </div>
          <div className="menusmallsc" onClick={openMenu}>
            {menuOpen ? <GiHamburgerMenu size={23} /> : <IoClose size={23} />}
          </div>
        </div>

      </div>
      {/* ✅ Pass menuOpen to Header */}
    </>
  );
};

export default Topheader;
