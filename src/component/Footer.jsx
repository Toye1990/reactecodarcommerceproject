import React from 'react'
import { FiMapPin } from "react-icons/fi";
import mylogo from '../assets/images/sitelogo.jpg'
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { MdOutlinePhoneCallback } from "react-icons/md";
import carvas from "../assets/images/chair.jpg"
import bag from "../assets/images/bag2.jpg"
import './Header.css'

const Footer = () => {
  return (
    <>
      <div className='footer'>
          <div className='footer-col'>
             <img className='imgtext' src={mylogo}/>
             <div className='footertext'>
               Pellentesque euismod proin himenaeos nullam felis eros maecenas egestas
             </div>

             <div className="footericoncover">
               <FiMapPin size={10}/>
               <small>Add: Walls Street 68, Mahattan, New York, USA.</small>
             </div>

             <div className="footericoncover">
             <MdOutlineMarkEmailRead size={10}/>
               <small>Add: Walls Street 68, Mahattan, New York, USA.</small>
             </div>

             <div className="footericoncover">
             <MdOutlinePhoneCallback size={10}/>
               <small>Add: Walls Street 68, Mahattan, New York, USA.</small>
             </div>
          </div>
          
         <div className='footer-col'>
           <h3>Information</h3>
            <ul>
              <li><a href='#'>About Us</a></li>
              <li><a href='#'>Contact Us</a></li>
              <li><a href='#'>Help Center</a></li>
              <li><a href='#'>Track your Order</a></li>
              <li><a href='#'>FAQ</a></li>
              <li><a href='#'>Search</a></li>
            </ul>
         </div>

         <div className='footer-col'>
           <h3>Our Services</h3>
            <ul>
              <li><a href='#'>Privacy Policy</a></li>
              <li><a href='#'>Refund policy</a></li>
              <li><a href='#'>Shipping Policy</a></li>
              <li><a href='#'>Term of Service</a></li>
              <li><a href='#'>Help & Contact Us</a></li>
              <li><a href='#'>Secure Payment</a></li>
            </ul>
         </div>

         <div className='footer-col'>
           <h3>ON-SALE PRODUCTS</h3>

           <div className='footer-store'>
            <div className='footer-texts'>
                <img src={carvas}/>
                <div className='text-combine'>
                   <small>fashion, shoes</small>
                  <h4>Blink Home Security</h4>
                  <h6>$14.99 <span>$30</span></h6>
                </div>
           </div>

           <div className='footer-texts'>
                <img src={bag}/>
                <div className='text-combine'>
                   <small>fashion, shoes</small>
                  <h4>Blink Home Security</h4>
                  <h6>$14.99 <span>$30</span></h6>
                </div>
           </div>
         </div>
         </div>
      </div>
    </>
  )
}

export default Footer
