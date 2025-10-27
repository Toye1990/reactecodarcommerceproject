import React from 'react'
import './Homepage.css'
//import flower3 from "../../assets/images/flower3.png"
//import flower4 from "../../assets/images/flower4.png"
//import flower5 from "../../assets/images/flower5.png"
//import flower6 from "../../assets/images/flower6.png"
import sidebanner1 from "../../assets/images/sidebanner1.jpg"
import longbanner2 from "../../assets/images/longbanner2.jpg"
//import banner2 from "../../assets/images/bannercut2.png"
import Loader from '../../component/Loader/Loader'
import Products from '../../Hooks/Products'
import { ContextData } from '../../Context/useContext'

const GiftHomeMade = () => {

   const { addCart } = ContextData()

  function clipSentence(sentence, length) {
      if (sentence.length <= length) {
        return sentence;
      }
    
      return `${sentence.substring(0, length)}...`;
    }
    
    function formatRate(rate){
      const formated = Math.ceil(rate)
      const multiply = Array.from({length: formated})
      return multiply;
    }
  
          const {data = [], isLoading, error} = Products()
  
         if(isLoading){
          return <Loader/>
         }
  
         if(error){
          return <div className='d-flex align-items-center  justify-content-center'><h1>error occurred!</h1></div>
         }
  
         if(data.length === 0){
          return <div className='d-flex align-items-center  justify-content-center'><h1>Product Empty!</h1></div>
  
         }
  
         const productmark = data.data.slice(7, 9)
         const productmarket = data.data.slice(11, 13)
         console.log(productmark)
  
  
  
  
  return (
    <>
      <div className="gift-container">
                      <div className='gift-topline'>
                        <h4>Gifts and Homemade</h4>
                        <div className='gift-text'>
                          <ul>
                            <li>Cell phone</li>
                            <li>Laptop</li>
                            <li>Desktop</li>
                            <li>TV & Video</li>
                            <li>Tablets</li>
                          </ul>
                        </div>
                      </div>
            
                      
                      <div className="container-fluid gridsec1">
                        <div className="container">
                        <div className="grid --bs-columns: 12; gridbox" >
                        <div className="g-col-12 imgcol"><img src={sidebanner1}/></div>
                        </div>
                    
                    <div className='gridcolumn'>
                        <div className="grid text-left row-gap-0 col-gap-0 gridset" >
                        {
                          productmark.map((item) =>(
                            <div className="g-col-6" key={item.id}>
                          <div className='grid-img'><img src={item.image}/></div>
                            <div className='grid-text'>
                              <small>Digial, Electronic</small>
                              <h6>{clipSentence(item.title)}</h6>
                              <p>{item.price}</p>
                              <button type='button' onClick={() => addCart()}>Add to cart</button>
                            </div>
                          </div>
                          ))
                        }
                          
                          {/*<div className="g-col-6">
                          <div className='grid-img'><img src={flower4}/></div>
                            <div className='grid-text'>
                              <small>Digial, Electronic</small>
                              <h5>Home Security Camera</h5>
                              <p>$290</p>
                              <button type='button'>Add to cart</button>
                            </div>
                          </div>*/}
                       </div>
            
                       <div className="grid text-left row-gap-0 col-gap-0 gridset" >
                       {
                        productmarket.map((item) =>(
                          <div className="g-col-6" key={item.id}>
                          <div className='grid-img'><img src={item.image}/></div>
                            <div className='grid-text'>
                              <small>Digial, Electronic</small>
                              <h6>{clipSentence(item.title)}</h6>
                              <p>{item.price}</p>
                              <button type='button'>Add to cart</button>
                            </div>
                          </div>
                        ))
                       }
                          
                          {/*<div className="g-col-6">
                          <div className='grid-img'><img src={flower6}/></div>
                            <div className='grid-text'>
                              <small>Digial, Electronic</small>
                              <h5>Home Security Camera</h5>
                              <p>$290</p>
                              <button type='button'>Add to cart</button>
                            </div>
                          </div>*/}
                       </div>
                    </div>   
            
            
                        </div>
                      </div>
            
                      <div className="gift-boxes">
                        <div className="g-col-2 giftcol1"><img src={longbanner2}/></div>
                      </div>
            
            
                  </div>
      
    </>
  )
}

export default GiftHomeMade
