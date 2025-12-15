import "./Header.css";
import mylogo from "../assets/images/sitelogo.jpg";
import { FaAngleDown } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ContextData } from "../Context/useContext";

const Bottomheader = ({ onSearch }) => {
  const { cart } = ContextData();

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    // Convert input to lowercase
    const term = searchTerm.toLowerCase();

    // Try to find an element that matches the search term by ID or text
    const allSections = document.querySelectorAll("section, div, h1, h2, h3, p, span");
    let found = false;

    allSections.forEach((el) => {
      if (el.textContent.toLowerCase().includes(term)) {
        found = true;

        // Scroll to the element
        el.scrollIntoView({ behavior: "smooth", block: "center" });

        // Highlight it temporarily
        el.style.backgroundColor = "yellow";
        setTimeout(() => {
          el.style.backgroundColor = "";
        }, 8000);
      }
    });

    if (!found) {
      alert("No matching content found on this page.");
    }
  };
  return (
    <>
      <div className="bottomheader">
        <div className="menu-logo">
          <div className="menu">
            <div className="menu-icon">
              <GiHamburgerMenu size={23} />
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
         <form onSubmit={handleSearch}>
              <div className="inputbox ">
            <input
              type="text"
              placeholder="enter keyword to search"
              className="button1"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <input type="submit" value="search" className="button2" />
          </div>
         </form>
         
        </div>
      </div>


        <div className="cartbox">
          <div className="cartcase">
            <div className="cart">
              <Link to="/cart">
                <IoCartOutline size={40} />
              </Link>
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
