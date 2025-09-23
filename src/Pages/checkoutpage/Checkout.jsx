import React from 'react'
import '../../component/Header.css'

const Checkout = () => {
  return (
    <>

  <div className="checkout-container">
    <h1>Checkout</h1>

    <div className="checkout-grid">

      <div className="checkout-form">
        <h2>Billing Details</h2>
        <form>
          <label>Full Name</label>
          <input type="text" placeholder="John Doe" required/>

          <label>Email Address</label>
          <input type="email" placeholder="example@mail.com" required/>

          <label>Phone Number</label>
          <input type="tel" placeholder="+1234567890" required/>

          <label>Shipping Address</label>
          <textarea placeholder="123 Street, City, Country" required></textarea>

          <h2>Payment Method</h2>
          <div className="payment-method">
            <label><input type="radio" name="payment" checked /> Credit/Debit Card</label>
            <label><input type="radio" name="payment"/> PayPal</label>
            <label><input type="radio" name="payment"/> Cash on Delivery</label>
          </div>

          <button type="submit" className="place-order-btn">Place Order</button>
        </form>
      </div>


      <div className="checkout-summary">
        <h2>Order Summary</h2>
        <div className="summary-item">
          <p>Product 1 (x1)</p>
          <span>$100</span>
        </div>
        <div className="summary-item">
          <p>Product 2 (x2)</p>
          <span>$80</span>
        </div>
        <div className="summary-item">
          <p>Subtotal</p>
          <span>$180</span>
        </div>
        <div className="summary-item">
          <p>Shipping</p>
          <span>$20</span>
        </div>
        <div className="summary-total">
          <p>Total</p>
          <span>$200</span>
        </div>
      </div>
    </div>
  </div>

    </>
  )
}

export default Checkout