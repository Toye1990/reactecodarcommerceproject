import React from 'react'
import './Homepage.css'
import phone1 from "../../assets/images/phonebanner2.jpg"
//import tabnew from "../../assets/images/tab2p.png"
//import flattv from "../../assets/images/flat_tv.jpg"
//import picgrid1 from "../../assets/images/phonegrid.jpg"
//import picgrid2 from "../../assets/images/tabgrid.png"
import banner1 from "../../assets/images/bannercut1.jpg"
import banner2 from "../../assets/images/bannercut2.jpg"
import Products from '../../Hooks/Products'
import Loader from "../../component/Loader/Loader"
import { ContextData } from '../../Context/useContext'



const Electronic = () => {

  const { addToCart } = ContextData()

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

       const products = data.data.slice(0, 2)
       console.log(products)

  return (
    <>
      <div className="electronic-container">
          <div className='electronic-topline'>
            <h4 className='h-text'>ELECTRONIC & COMPUTERS</h4>
            <div className='electron-text'>
              <ul>
                <li>Cell phone</li>
                <li>Laptop</li>
                <li>Desktop</li>
                <li>TV & Video</li>
                <li>Tablets</li>
              </ul>
            </div>
          </div>

          {/*<div className='gridsection1'>
              <div className='gridcol colgrid1'></div>
              <div className='gridcol colgrid2'>
                <div className='grid-img'><img src={phone1}/></div>
                <div className='grid-text'>
                  <small>Digial, Electronic</small>
                  <h5>Home Security Camera</h5>
                  <p>$290</p>
                  <button type='button'>Add to cart</button>
                </div>
              </div>
              <div className='gridcol colgrid3'>
                <div className='grid-img'><img src={tabnew}/></div>
                <div className='grid-text'>
                  <small>Digial, Electronic</small>
                  <h5>Home Security Camera</h5>
                  <p>$290</p>
                  <button type='button'>Add to cart</button>
                </div>
              </div>
              <div className='gridcol colgrid4'>
                <div className='grid-img'><img src={flattv}/></div>
                <div className='grid-text'>
                  <small>Digial, Electronic</small>
                  <h5>Home Security Camera</h5>
                  <p>$290</p>
                  <button type='button'>Add to cart</button>
                </div>
              </div>
              <div className='gridcol colgrid5'>
                <div className='grid-img'><img src={tabnew}/></div>
                <div className='grid-text'>
                  <small>Digial, Electronic</small>
                  <h5>Home Security Camera</h5>
                  <p>$290</p>
                  <button type='button'>Add to cart</button>
                </div>
              </div>
          </div>*/}

          <div className="container-fluid gridsec1">
            <div className="container">
            <div className="grid --bs-columns: 12; gridbox" >
            <div className="g-col-12 imgcol"><img src={phone1}/></div>
            </div>
        
        <div className='gridcolumn'>
            <div className="grid text-left row-gap-0 col-gap-0 gridset" >
          {products.map((item) =>(
            <div className="g-col-6" key={item.id}>
              <div className='grid-img'><img src={item.image}/></div>
                <div className='grid-text'>
                  <small>Digial, Electronic</small>
                  <h6>{clipSentence(item.title, 20)}</h6>
                  <p>${item.price}</p>
                  <button type='button' onClick={()=>{addToCart(item)}}>Add to cart</button>
                </div>
              </div>

          ))}
              {/*<div className="g-col-6">
              <div className='grid-img'><img src={tabnew}/></div>
                <div className='grid-text'>
                  <small>Digial, Electronic</small>
                  <h5>Home Security Camera</h5>
                  <p>$290</p>
                  <button type='button'>Add to cart</button>
                </div>
              </div>*/}

              
              {/*<div className="g-col-6">
              <div className='grid-img'><img src={flattv}/></div>
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
            products.map((item)=>(
              <div className="g-col-6" key={item.id}>
              <div className='grid-img'><img src={item.image}/></div>
                <div className='grid-text'>
                  <small>Digial, Electronic</small>
                  <h6>{clipSentence(item.title, 20)}</h6>
                  <p>${item.price}</p>
                  <button type='button' onClick={()=>{addToCart(item)}}>Add to cart</button>
                </div>
              </div>
            ))
           }
           
              
              {/*<div className="g-col-6">
              <div className='grid-img'><img src={picgrid1}/></div>
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

          <div className="grid-boxe">
            <div className="g-col-2 gridme1"><img src={banner1}/></div>
            <div className="g-col-2 gridme2"><img src={banner2}/></div>
          </div>


      </div>
    </>
  )
}

export default Electronic
