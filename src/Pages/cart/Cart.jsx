import React from 'react'
import '../../component/Header.css'
//import { ContextData } from '../../Hooks/Formcontext'
import { Link } from 'react-router-dom'
import Products from '../../Hooks/Products'
import Loader from "../../component/Loader/Loader"
import { ContextData } from '../../Context/useContext'
import { CiSquareRemove } from "react-icons/ci";
import './Cart.css'

//import { MdStar } from "react-icons/md";

const Cart = () => {
   const {cart, removeCart} = ContextData()


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

  if (cart.length === 0) {
    return (
      <>
        <section className="shopping-cart spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="shopping__cart__table">
                  <table>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <div className="text-center">Cart is Empty</div>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="cart__discount">
                  <h6>Discount codes</h6>
                  <form action="#">
                    <input type="text" placeholder="Coupon code" />
                    <button type="submit">Apply</button>
                  </form>
                </div>
                <div className="cart__total">
                  <h6>Cart total</h6>
                  <ul>
                    <li>
                      Subtotal <span>$ 0</span>
                    </li>
                    <li>
                      Total <span>$0</span>
                    </li>
                  </ul>
                  <Link to="/checkout" className="primary-btn">
                    Proceed to checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);



  const { data, isLoading, error } = Products();
  if(isLoading){
    // return <div className="d-flex justify-content-center align-items-center">
      return <Loader/>
    // </div>;
  }


  if (error) {
    return <div className="d-flex justify-content-center align-items-center" style={{height: "60vh"}}>
      <div>Error Occured</div>
    </div>;
  }

  if(!data || !data.data){
    return <div className="d-flex justify-content-center align-items-center" style={{height: "60vh"}}>
    <div>Product is unavaliable</div>
  </div>;
  }

  if(data.data.length === 0){
    return <div className="d-flex justify-content-center align-items-center" style={{height: "60vh"}}>
    <div>Product is empty</div>
  </div>;
  }


  const products = data.data

  
  return (
    <>


   <section className="shopping-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="shopping__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, index) => (
                      <tr key={index}>
                        <td className="product__cart__item">
                          <div className="product__cart__item__pic">
                            <img src={item.image} className="img-fluid" alt="" />
                          </div>
                          <div className="product__cart__item__text">
                            <h6>{item.title}</h6>
                            <h5>${item.price}</h5>
                          </div>
                        </td>
                        <td className="quantity__item">
                          <div className="quantity">
                            <div className="pro-qty-2">
                              <input type="text" value="1" />
                            </div>
                          </div>
                        </td>
                        <td className="cart__price">${item.price}</td>
                        <td className="cart__close">
                          <CiSquareRemove size={30} className='remove' onClick={()=>{removeCart(index)}}/>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="continue__btn">
                    <Link to="/" className='shopping'>Continue Shopping</Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                 {/* <div className="continue__btn update__btn">
                    <a href="#">
                      <i className="fa fa-spinner"></i> Update cart
                    </a>
                  </div>*/}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cart__discount">
                <h6>Discount codes</h6>
                <form action="#">
                  <input type="text" placeholder="Coupon code" />
                  <button type="submit">Apply</button>
                </form>
              </div>
              <div className="cart__total">
                <h6>Cart total</h6>
                <ul>
                  {/* <li>
                    Subtotal <span>$ 169.50</span>
                  </li> */}
                  <li>
                    Total <span>$ {totalPrice.toFixed(2)}</span>
                  </li>
                </ul>
                <Link to="/checkout" className="primary-btn">
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


    
    </>
  );


}

export default Cart