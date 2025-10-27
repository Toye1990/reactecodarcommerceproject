import "./Header.css";
import mylogo from "../assets/images/sitelogo.jpg";
import { FaAngleDown } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextData } from "../Context/useContext";

const Bottomheader = () => {
  const {cart} = ContextData()
  return (
    <> 
      <div className="bottomheader">

        <div className="menu-logo">
            <div className="menu">
          <div className="menu-icon">
            <GiHamburgerMenu size={23}/>
          </div>
        </div>
        <div className="sitelogo">
          <div className="logo">
            <img src={mylogo} />
          </div>
        </div>
        </div>
       

      <div className="search-cart">
         <div className="searchbox gridsearch">
          <div className="inputbox ">
            <input
              type="text"
              placeholder="enter keyword to search"
              className="button1"
            />
            <input type="button" value="search" className="button2" />
          </div>
        </div>

        


      </div> 

         <div className="cartbox">
             <div className="cartcase">
              <div className="cart">
              <Link to="/cart"><IoCartOutline size={40}/></Link>
            </div>
             <div className="textname">Your Cart</div>
             </div>
             
            <div className="cartrectangle">{cart.length}</div>
        </div>

      </div>
    </>
  );
};

export default Bottomheader;
