import React from 'react'
import './Homepage.css'

const Newsletterpage = () => {
  return (
    <>
    
       <div className='newsletter'>
       <div className='newstext'>
          <h3>Sign Up For Newsletter</h3>
          <small>Join 40.00+ Subscribers and get a new discount coupon on every Saturday.</small>
        </div>

        <div className='signupage'>
          <form action='#'>
               <input type='text' placeholder='enter your email...' className='inputtext'/>
               <button type='button'>subscribe</button>
          </form>
        </div>
     
       
      </div>
    </>
  )
}

export default Newsletterpage
