import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import './Homepage.css'
import tab from '../../assets/images/tab2p.jpg'



const NewArrival = () => {
  return (
    <>
      <div className="arrival-section">
          <div className="arrival-left">
              <div className='arrival-icon-text1'>
                <h3>New Arrival</h3>
                <div className="arrival-deals">
                  <FaAngleLeft size={12}/><FaAngleRight size={12}/>
                 </div>      
             </div>
             <div className="line1"></div>
             <div className='newarrival-container'>
               <div className='newarrival-text'>
                 <div className='tab0rder1'>
                   <div className='order-img'>
                     <img src={tab} />
                   </div>
                   <div className='order-text'>
                      <small>Digital, Electronic</small>
                      <h4>Apple Macbook Retina</h4>
                      <h6>$450</h6>
                   </div>
                 </div>

                 <div className='tab0rder1'>
                   <div className='order-img'>
                     <img src={tab} />
                   </div>
                   <div className='order-text'>
                      <small>Digital, Electronic</small>
                      <h4>Home Security Camera</h4>
                      <h6>$540</h6>
                   </div>
                 </div>

                 <div className='tab0rder1'>
                   <div className='order-img'>
                     <img src={tab} />
                   </div>
                   <div className='order-text'>
                      <small>Digital, Electronic</small>
                      <h4>New model Phone </h4>
                      <h6>$930</h6>
                   </div>
                 </div>
               </div>
                 <div className="viewall"><a>View all products</a></div>
             </div>
          </div>

         <div className="arrival-right">
           <div className='arrival-icon-text2'>
               <h3>Deals Of The Week</h3>
               <div><FaAngleLeft size={12}/><FaAngleRight size={12}/></div>
           </div>            
             <div className="line2"></div>
             <div className='slider'>
             <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
               <div className="carousel-inner">
                  <div className="carousel-item displayslide active d-flex flex-row" data-bs-interval="2000">
                     {/*<div className='slide-img'>
                        <div className='percent'>-4</div>
                        <img src={tab} className="d-block w-40" alt="..."/>
                     </div>
                    
                    <div className='slide-text'>
                       <div className='toplist'>
                        <small>Digital, Electronic</small>
                         <h4>Home Security Camera</h4>
                         <h6>$540</h6>
                      </div>
                      <div className='smalltext'>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit tempus natoque faucibus viverra, 
                      </div>
                      <div className='downlist'>
                        <p>Hurry up offe ends in:</p>
                         <div className='timer-list'>
                            <div className='time-01'>
                              <h3>00</h3>
                              <span>Days</span>
                            </div>
                            <div className='column-1'>:</div>
                            <div className='time-01'>
                              <h3>00</h3>
                              <span>Hours</span>
                            </div>
                            <div className='column-1'>:</div>
                            <div className='time-01'>
                              <h3>00</h3>
                              <span>Mins</span>
                            </div>
                            <div className='column-1'>:</div>
                            <div className='time-01'>
                              <h3>00</h3>
                              <span>Sec</span>
                            </div>
                         </div>
                      </div>
                    </div>*/}
                  </div>

                  <div className="carousel-item displayslide d-flex flex-row" data-bs-interval="2000">
                  <div className='slide-img'>
                        <div className='percent'>-50</div>
                        <img src={tab} className="d-block w-50" alt="..."/>
                     </div>
                    
                    <div className='slide-text'>
                       <div className='toplist'>
                        <small>Digital, Electronic</small>
                         <h4>Home Security Camera</h4>
                         <h6>$540</h6>
                      </div>
                      <div className='smalltext'>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit tempus natoque faucibus viverra, litora odio vitae cras blandit ut est integer nisl in accumsan himenaeos, facilisis eu maecenas lectus ante platea commodo curabitur fermentum et. 
                      Pellen
                      </div>
                      <div className='downlist'>
                        <p>Hurry up offer ends in:</p>
                         <div className='timer-list'>
                            <div className='time-01'>
                              <h3>00</h3>
                              <span>Days</span>
                            </div>
                            <div className='column-1'>:</div>
                            <div className='time-01'>
                              <h3>00</h3>
                              <span>Hours</span>
                            </div>
                            <div className='column-1'>:</div>
                            <div className='time-01'>
                              <h3>00</h3>
                              <span>Mins</span>
                            </div>
                            <div className='column-1'>:</div>
                            <div className='time-01'>
                              <h3>00</h3>
                              <span>Sec</span>
                            </div>
                         </div>
                      </div>
                    </div>
                   </div>

                 {/*<div className="carousel-item displayslide" data-bs-interval="">
                     <div className='slide-img'>
                        <div className='percent'>-4</div>
                        <img src={tab} className="d-block w-40" alt="..."/>
                     </div>
                    
                    <div className='slide-text'>
                       <div className='toplist'>
                        <small>Digital, Electronic</small>
                         <h4>Home Security Camera</h4>
                         <h6>$540</h6>
                      </div>
                      <div className='smalltext'>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit tempus natoque faucibus viverra, litora odio vitae cras blandit ut est integer nisl in accumsan himenaeos, facilisis eu maecenas lectus ante platea commodo curabitur fermentum et. 
                      Pellen
                      </div>
                      <div className='downlist'>
                        <p>Hurry up offe ends in:</p>
                         <div className='timer-list'>
                            <div className='time-01'>
                              <h3>00</h3>
                              <span>Days</span>
                            </div>
                            <div className='column-1'>:</div>
                            <div className='time-01'>
                              <h3>00</h3>
                              <span>Hours</span>
                            </div>
                            <div className='column-1'>:</div>
                            <div className='time-01'>
                              <h3>00</h3>
                              <span>Mins</span>
                            </div>
                            <div className='column-1'>:</div>
                            <div className='time-01'>
                              <h3>00</h3>
                              <span>Sec</span>
                            </div>
                         </div>
                      </div>
                    </div>
                  </div>*/}
              </div>
              
          
             </div>
                
             </div>
             
         </div> 
      </div>
    </>
  )
}

export default NewArrival
