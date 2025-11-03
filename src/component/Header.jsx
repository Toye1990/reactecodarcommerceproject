import React, { useState } from 'react'
import './Header.css'
import Topheader  from './Topheader'
import Bottomheader from './Bottomheader'
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import headphone from '../assets/images/headphone2p.jpg'
import tab from '../assets/images/tab2p.jpg'
import '../Pages/Home/Homepage.css'
//import Topheader from './Topheader';

const Header = () => {
   
 const [menuClick, setMenuClick] = useState(false);
 
const openMenu = () =>{
   setMenuClick((prev) => !prev);

}


document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navList = document.getElementById("navList");

  // Toggle open/close on click
  menuToggle.addEventListener("click", function () {
    navList.classList.toggle("open");

    // Optionally change icon between bars and X
    if (navList.classList.contains("open")) {
      menuToggle.innerHTML = '<GiHamburgerMenu size={23} />'; // close icon
    } else {
      menuToggle.innerHTML = '<GiHamburgerMenu size={23} />'; // hamburger icon
    }
  });

  // Optional: close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (!menuToggle.contains(e.target) && !navList.contains(e.target)) {
      navList.classList.remove("open");
      menuToggle.innerHTML = '<GiHamburgerMenu size={23} />';
    }
  });
});



  return (
    <>
      <div className="container-1">
      <header>
        <Topheader openMenu={openMenu} menuOpen={menuClick} />
        <Bottomheader/>
        <div className="navbar">
          <nav>
          <div className='sidemenu'>
            <div className='sidetext'>SHOP BY DEPARTMENT</div>
            <div className='close-icon' onClick={openMenu}>{menuClick?<IoClose size={23}/> : <GiHamburgerMenu size={23} />}</div>
          </div>
          
            <ul className={`navlist ${menuClick ? "open" : ""}`}>
            
              <li><Link to="/" className="active">HOME <FaAngleDown size={12}/></Link> </li>
              <li><Link to="/shop">SHOP <FaAngleDown size={12}/></Link> </li>
              <li><Link to="/promotion">PROMOTION <FaAngleDown size={12}/></Link> </li>
              <li><Link to="/blog">BLOGS <FaAngleDown size={12}/></Link> </li>
              <li><Link to="/page">PAGE <FaAngleDown size={12}/></Link> </li>
              <li><Link to="/contact">CONTACT US <FaAngleDown size={12}/></Link> </li>
            </ul>
          </nav>
        </div>
        </header>
      </div>

      <div className='hero'>
      <div className={`dropdown-container ${menuClick?"open":""}`}>
              <div className="phoneDiv">Phones & Accessories</div>
              <div>Electronic & Digital</div>
              <div>Fashion & Clothing</div>
              <div>Sport & Outdoors</div>
              <div>Toys & Hobbies</div>
              <div>Book & Office</div>
              <div>Cameras & Camcorders</div>
              <div>All categories</div>
            </div>

      <div className='slide'>
        <div className="container-fluid">
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active circle"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              className="circle"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              className="circle"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item pix1 active" data-bs-interval="2000">
              {/*<img src={drone} className="d-block w-100" alt="..."/>*/}
              <div className="carousel-text">
                <h3>New Collections</h3>
                <h1>Phantom</h1>
                <h5>Only from $94</h5>
                <p>
                  dipiscing elit tempus natoque faucibus viverra, litora odio
                  vitae cras blandit ut est integer nisl in ac
                </p>
                <button className="btn btn-danger">Shop Now</button>
              </div>
            </div>
            <div className="carousel-item pix2" data-bs-interval="2000">
              {/*<img src={phone} className="d-block w-100" alt="..."/>*/}
              <div className="carousel-text">
                <h3>New Collections</h3>
                <h1>Phantom</h1>
                <h5>Only from $94</h5>
                <p>
                  dipiscing elit tempus natoque faucibus viverra, litora odio
                  vitae cras blandit ut est integer nisl in ac
                </p>
                <button className="btn btn-danger">Shop Now</button>
              </div>
            </div>
            <div className="carousel-item pix3">
              {/*<img src={voom} className="d-block w-100" alt="..."/>*/}
              <div className="carousel-text">
                <h3>New Collections</h3>
                <h1>Phantom</h1>
                <h5>Only from $94</h5>
                <p>
                  dipiscing elit tempus natoque faucibus viverra, litora odio
                  vitae cras blandit ut est integer nisl in ac
                </p>
                <button className="btn btn-danger">Shop Now</button>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
        </div>
      
      <div className="hero-gallery">
      <div className='smallhero'>
      <div className='hero-text'>
        <div>SAMSUNG TAB</div>
        <h2>TABLET</h2>
        <div className='saletext'>SALE UP TO 40% OFF ALL IN STORE</div>
        <h6>PRICE: $720</h6>
      </div>
      <div className='hero-img'>
      <img src={headphone}/>
      </div>
        
      </div>

      <div className='smallhero'>
      <div className='hero-text'>
        <div>BEAT BAND</div>
        <h2>HEADPHONE</h2>
        <div className='saletext'>SALE UP TO 20% OFF ALL IN STORE</div>
        <h6>PRICE: $150</h6>
      </div>
      <div className='hero-img'>
      <img src={tab}/>
      </div>
        
      </div>

      </div>

      </div>
        
    </>
  )
}

export default Header
