import React, { useState, useEffect } from 'react'
import '../../component/Header.css'
//import { ContextData } from '../../Context/useContext'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate, useLocation } from 'react-router-dom'
import './checkout.css'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import Topheader from '../../component/Topheader'

const Checkout = () => {

  const navigate = useNavigate()
  const location = useLocation()
 //const {addUser, setMytoken} = ContextData()



 const [payData, setPayData] = useState({
      firstname: "",
      lastname: "",
      email: "",
      address: "",
      phonenumber: "",
      amount: ""
 })


const handchange = (e) =>{
  const {name, value} = e.target
  setPayData({
    ...payData,
    [name] : value
  })
}

const totalPrice = Number(location.state?.totalPrice) || 0


 useEffect(() => {
  setPayData(prev => ({
    ...prev,
    amount: totalPrice
  }))
}, [totalPrice])

console.log("Checkout totalPrice:", totalPrice)
const paymentslide = async() =>{

try{
  const emptypath = []

  if(!payData.firstname || payData.firstname.trim() === ""){
    emptypath.push("first name")
  }

   if(!payData.lastname || payData.lastname.trim() === ""){
    emptypath.push("first name")
  }

   if(!payData.email || payData.email.trim() === ""){
      emptypath.push("email")
    }

    if(!payData.phonenumber || payData.phonenumber.trim() === ""){
    emptypath.push("phonenumber")
  }

   if(!payData.address || payData.address.trim() === ""){
    emptypath.push("address")
  }

   if (payData.amount <= 0) {
  emptypath.push("amount")
}


  if(emptypath.length > 0){
    emptypath.forEach((item)=>{
      toast.error(`${item} cannot be empty`)
    })
  }

  const response = await axios.post("http://localhost:2233/api/v1/initializepayment", payData, {
      headers: { "Content-Type": "application/json" }
  }
  )

  console.log("response:", response.data)

  if(response && response.status === 200 && response.data){

      if (response.data.status) {
        toast.success("Redirecting to payment...");
        window.location.href = response.data.paymentUrl; // 🔥 redirect to paystack
      } else {
        toast.error("Unable to initialize payment");
      }

  toast.success("payment initialized completely")
  navigate("/checkout")
    return;
}else{
  toast.error("error occurred whle processing payment")
  return
}

}catch(err){
   if(err.response){
        console.log("Error response data:", err.response.data)
        console.log("Error response status:", err.response.status)
        console.log("Error response header:", err.response.headers)

        toast.error(` ${err.response.data.message} || ${err.message}`)
      }else{
        console.log("error:", err.message)
        toast.error("error occurred")
      }
}



}



  return (
    <>
   <Topheader/>
  <div className="checkout-container">
    <h1>Checkout</h1>

    <div className="checkout-grid">

      <div className="checkout-form">
        <h2>Billing Details</h2>
        <form>
          <label>FirstName</label>
          <input type="text" 
          name="firstname" 
          placeholder="John Doe" value={payData.firstname} onChange={handchange} required/>

              <label>LastName</label>
          <input type="text" 
          name="lastname"  
          value={payData.lastname} onChange={handchange} placeholder="John Doe" required/>

          <label>Email Address</label>
          <input type="email" 
          name="email" 
          value={payData.email} onChange={handchange} placeholder="example@mail.com" required/>

          <label>Phone Number</label>
          <input type="tel" 
          name='phonenumber' 
          value={payData.phonenumber} onChange={handchange} placeholder="+1234567890" required/>

          <label>Shipping Address</label>
          <textarea name='address' 
          value={payData.address} onChange={handchange} placeholder="123 Street, City, Country" required></textarea>

          <h2>Payment Method</h2>
          <div className="payment-method">
            <label><input type="radio" name="payment" checked /> Bank Transfer</label>
            <input type="number" name="amount" value={payData.amount} readOnly/>

            {/*<input type="number" value={payData.amount} onChange={handchange} name='amount' placeholder="amount" required/>*/}
          </div>

          <div className="place-order-btn" onClick={paymentslide}>Place Order</div>
        </form>
      </div>


      <div className="checkout-summary">
        <h2>Order Summary</h2>
        <div className="summary-item">
          <p>Product Amount:</p>
          <span>₦{payData.amount || "0"}</span>
        </div>
        
      </div>
    </div>
  </div>
<Footer/>
    </>
  )
}

export default Checkout