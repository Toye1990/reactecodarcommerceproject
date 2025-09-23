import React from 'react'
import '../../component/Header.css'
import { ContextData } from '../../Hooks/Formcontext'
import { Link } from 'react-router-dom'
import Products from '../../Hooks/Products'
import Loader from "../../component/Loader/Loader"

const Cart = () => {
   const { cart, removecart} = ContextData()

   const totalPrice = cart.reduce((acc, item) => acc + item.price, 0)

  
  return (
    <>
<div className="cart-container">
    <h1>Your Cart</h1>


   <div className="cart-items">
     {
      cart.map((item, index) =>{
         <div className="cart-item" key={index}>
        <img src={item.image} alt="Product"/>
        <div className="item-details">
          <h3>{item.title}</h3>
          <p>{item.price}</p>
          <div className="quantity">
            <button>-</button>
            <span>{item.quantity}</span>
            <button>+</button>
          </div>
        </div>
        <button className="remove-btn" onClick={()=> {removecart()}}>Remove</button>
      </div>
      })
     }

      
    </div>

     {/*<div className="cart-items">

         <div className="cart-item">
        <img src="https://via.placeholder.com/80" alt="Product"/>
        <div className="item-details">
          <h3>Order list</h3>
          <p>$60</p>
          <div className="quantity">
            <button>-</button>
            <span>9</span>
            <button>+</button>
          </div>
        </div>
        <button className="remove-btn" onClick={()=> {removecart()}}>Remove</button>
      </div>
  
    </div>*/}


    <div className="cart-summary">
      <h2>Order Summary</h2>
      <p>Subtotal: <span>$200</span></p>
      <p>Shipping: <span>$20</span></p>
    
      <p className="total">Total: <span>{totalPrice}</span></p>
      <button className="checkout-btn"><Link to="/checkout">Proceed to Checkout</Link></button>
    </div>
</div>



    </>
  )
}

export default Cart