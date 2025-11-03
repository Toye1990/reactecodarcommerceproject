import React from 'react'
import { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import './Homepage.css'
import desktop1 from "../../assets/images/desktop1.jpg"
import desktop2 from "../../assets/images/desktop2.jpg"
import desktop3 from "../../assets/images/desktop3.jpg"
import man1 from "../../assets/images/manlaugh.jpg"
import man2 from "../../assets/images/man22.jpg"
import man3 from "../../assets/images/smilingman.jpg"

import icon1 from "../../assets/images/icon1.jpg"
import icon2 from "../../assets/images/icon2.jpg"
import icon3 from "../../assets/images/icon3.jpg"
import icon4 from "../../assets/images/icon4.jpg"
//import Testimonials from '../../Hooks/Testimonials';
//import Loader from '../../component/Loader/Loader';
//import Testimonialapi from '../../Hooks/testimonialapi';
//import Loader from '../../component/Loader/Loader';
//import picgrid1 from "../../assets/images/phonegrid.jpg"

const Latestblogs = () => {

  const slidetexts = [
    {
      title: "pretium imperdiet morbi habitasse ullamcorper cras ad accumsan turpis",
      description: "bellad",
      job: "Graphic designer",
      images: man1
    },

    {
      title: "tium imperdiet morbi habitasse ullamcorper cras ad accumsan turpis",
      description: "mark",
      job: "web designer",
      images: man2
    },

    {
      title: "prium perdiet morbi habitasse ullamcorper cras ad accumsan turpis",
      description: "john",
      job: "video editor",
      images: man3
    }
  ]

const [currentIndex, setCurrentIndex] = useState(0);

const prevSlide = () =>{
   setCurrentIndex((prev) => (prev === 0 ? slidetexts.length - 1 : prev - 1))
}

const nextSlide = () => {
   setCurrentIndex((prev) => (prev === slidetexts.length - 1 ? 0 : prev + 1))
}

  return (
    <>
       <div className="blog-container">
                      <div className='blog-topline'>
                        <h4>LATEST BLOGS</h4>
                        <div className='icon-text'>
                          <div className="arrival-deals">
                            <FaAngleLeft size={12}/><FaAngleRight size={12}/>
                          </div>  
                        </div>
                      </div>
            
                      
                      <div className="container-fluid gridsec1">
                        <div className="blogpack">
                            <div className='col-md-3 colx'>
                              <div className='img-box'>
                              <img src={desktop1}/>
                              </div>

                              <div className='text-boxes'>
                                <h3>adipiscing elit tempus natoque</h3>
                                 <div className='Datetime'>
                                 <div className='date'>31/03/2025</div>
                                   <div>By <span>Mr admin</span></div>
                                 </div> 
                                <small>pretium imperdiet morbi habitasse ullamcorper cras ad accumsan turpis, quis congue phasellus ultricies 
                                potenti volutpat varius torquent.</small>
                              </div>

                              <button type='button'>READ MORE</button>

                           </div>
                            
                           <div className='col-md-3 colx'>
                              <div className='img-box'>
                              <img src={desktop2}/>
                              </div>

                              <div className='text-boxes'>
                                <h3>adipiscing elit tempus natoque</h3>
                                 <div className='Datetime'>
                                   <div className='date'>31/03/2025</div>
                                   <div>By <span>Mr Admin</span></div>
                                 </div> 
                                <small>pretium imperdiet morbi habitasse ullamcorper cras ad accumsan turpis, quis congue phasellus ultricies 
                                 potenti volutpat varius torquent.</small>
                              </div>

                              <button type='button'>READ MORE</button>

                           </div>


                           <div className='col-md-3 colx'>
                              <div className='img-box'>
                              <img src={desktop3}/>
                              </div>

                              <div className='text-boxes'>
                                <h3>adipiscing elit tempus natoque</h3>
                                 <div className='Datetime'>
                                   <div className='date'>31/03/2025</div>
                                   <div>By <span>Mr Admin</span></div>
                                 </div> 
                                <small>pretium imperdiet morbi habitasse ullamcorper cras ad accumsan turpis, quis congue phasellus ultricies 
                                 potenti volutpat varius torquent.</small>
                              </div>

                              <button type='button'>READ MORE</button>

                           </div>          
                        </div>
                      </div>
            
            <div className='downtext-col'>
                 <div className='textlitle'>{slidetexts[currentIndex].title}</div>
                 <div className='downimgbox'>
                     <p>{slidetexts[currentIndex].description} - <span>{slidetexts[currentIndex].job}</span></p>
                     <img src={slidetexts[currentIndex].images}/>
                 </div>
                 <div className="slidebuttons">
                    <button onClick={prevSlide} className='leftbutton'><FaAngleLeft size={20}/></button>
                    <button onClick={nextSlide} className='rightbutton'><FaAngleRight size={20}/></button>
                 </div>


                <div className='icontextcol'>
                   <div className='col'>
                      <div className='imgicon'><img src={icon1}/></div>
                          <div className='textforicon'>
                            <h6>FREE SHIPPING</h6>
                            <small>Free Shipping All Order</small>
                         </div>
                     </div>

                     <div className='col'>
                      <div className='imgicon'><img src={icon2}/></div>
                          <div className='textforicon'>
                            <h6>FREE SHIPPING</h6>
                            <small>Free Shipping All Order</small>
                         </div>
                     </div>

                     <div className='col'>
                      <div className='imgicon'><img src={icon3}/></div>
                          <div className='textforicon'>
                            <h6>FREE SHIPPING</h6>
                            <small>Free Shipping All Order</small>
                         </div>
                     </div>

                     <div className='col'>
                      <div className='imgicon'><img src={icon4}/></div>
                          <div className='textforicon'>
                            <h6>FREE SHIPPING</h6>
                            <small>Free Shipping All Order</small>
                         </div>
                     </div>
                </div>

            </div>
            
      
       </div>
    </>  
  )
}

export default Latestblogs
