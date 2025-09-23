import React, { useContext } from 'react'
//import cloth1 from "../../assets/images/cloth1.png"
//import cloth2 from "../../assets/images/cloth2.png"
//import flattv from "../../assets/images/flat_tv.jpg"
import longbanner from "../../assets/images/longbanner.jpg"
//import bag2 from "../../assets/images/bag2.png"
import fashionbanner from "../../assets/images/fashionbanner1.jpg"
//import carvas from "../../assets/images/carvas1.png"
import Loader from "../../component/Loader/Loader"
import Products from '../../Hooks/Products'
import { ContextData } from '../../Hooks/Formcontext'
//import { ContextData } from '../../Hooks/Formcontext'
//import addCart from '../../Hooks/carthook'


const FashionClothing = () => {
   
   
  const { addCart } = ContextData()
   
  function clipSentence(sentence, length) {
    if (sentence.length <= length) {
      return sentence;
    }
  
    return `${sentence.substring(0, length)}`;
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

       const productmark = data.data.slice(2, 4)
       //const productmarket = data.data.slice(5, 7)
       console.log(productmark)




  return (
    <>
   <div className='fashion-container'>
       <div className='fashion-topline'>
            <h4>Fashion & Clothing</h4>
            <div className='fashion-text'>
              <ul>
                <li>men</li>
                <li>women</li>
                <li>kid</li>
                <li>clothing</li>
                <li>shoe</li>
                <li>bag</li>
              </ul>
            </div>
          </div>

           <div className="container-fluid fashionsec1">
                      <div className="container">
                      <div className="grid --bs-columns: 12; gridbox" >
                      <div className="g-col-12 imgcol"><img src={fashionbanner}/></div>
                      </div>
                  
                  <div className='gridcolumn'>
                      <div className="grid text-left row-gap-0 col-gap-0 gridset" >
                      {productmark.map((item) => (
                        <div className="g-col-6" key={item._id}>
                        <div className='grid-img'><img src={item.image}/></div>
                          <div className='grid-text'>
                            <small>Digial, Electronic</small>
                            <h6>{clipSentence(item.title)}</h6>
                            <p>{item.price}</p>
                            <button type='button' onClick={()=>{addCart(item)}}>Add to cart</button>
                          </div>
                        </div>
                      ))}
                       
                        {/*<div className="g-col-6">
                        <div className='grid-img'><img src={cloth1}/></div>
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
                      productmark.map((item) =>(
                        <div className="g-col-6" key={item.id}>
                        <div className='grid-img'><img src={item.image}/></div>
                          <div className='grid-text'>
                            <small>Digial, Electronic</small>
                            <h6>{clipSentence(item.title)}</h6>
                            <p>${item.price}</p>
                            <button type='button' onClick={()=>{addCart(item)}}>Add to cart</button>
                          </div> 
                        </div>
                      ))
                     }
                       
                        {/*<div className="g-col-6">
                        <div className='grid-img'><img src={bag2}/></div>
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
    

               <div className="fashion-box">
                    <div className="g-col-2 fashionme1"><img src={longbanner}/></div>
              </div>
        
   </div>
      
    </>
  )
}

export default FashionClothing
