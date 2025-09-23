import React from 'react'
import './Homepage.css'
//import clock from "../../assets/images/clock.png"
//import chair from "../../assets/images/chair.png"
//import camera from "../../assets/images/camera.png"
//import pots from "../../assets/images/pots.png"
import sidebanner2 from "../../assets/images/sidebanner2.jpg"
import kitchbanner1 from "../../assets/images/kitchbanner1.jpg"
import kitchbanner2 from "../../assets/images/kitchbanner2.jpg"
import Products from '../../Hooks/Products'
import Loader from '../../component/Loader/Loader'


const KitchenSection = () => {
  
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

       const kichendata = data.data.slice(12, 14)
       const kichendata2 = data.data.slice(14, 16)
       console.log(kichendata)

  return (
    <>
      <div className="kitchen-container">
                <div className='kitchen-topline'>
                  <h4>Home, Garden and kitchen</h4>
                  <div className='kitchen-text'>
                    <ul>
                      <li>Kitchen</li>
                      <li>furniture</li>
                      <li>wall art</li>
                      <li>Lightning</li>
                      <li>Dining</li>
                    </ul>
                  </div>
                </div>
      
                
                <div className="container-fluid gridsec1">
                  <div className="container">
                  <div className="grid --bs-columns: 12; gridbox" >
                  <div className="g-col-12 imgcol"><img src={sidebanner2}/></div>
                  </div>
              
              <div className='gridcolumn'>
                  <div className="grid text-left row-gap-0 col-gap-0 gridset" >
                    {
                      kichendata.map((item) =>(
                        <div className="g-col-6" key={item.id}>
                    <div className='grid-img'><img src={item.image}/></div>
                      <div className='grid-text'>
                        <small>Digial, watch</small>
                        <h6>{clipSentence(item.title)}</h6>
                        <p>${item.price}</p>
                        <button type='button'>Add to cart</button>
                      </div>
                    </div>
                      ))
                    }

                    {/*<div className="g-col-6">
                    <div className='grid-img'><img src={camera}/></div>
                      <div className='grid-text'>
                        <small>Digial, Lightning</small>
                        <h5>Home Lightning</h5>
                        <p>$290</p>
                        <button type='button'>Add to cart</button>
                      </div>
                    </div>*/}


                 </div>
      
                 <div className="grid text-left row-gap-0 col-gap-0 gridset" >
                 {
                   kichendata2.map((item) =>(
                    <div className="g-col-6" key={item.id}>
                    <div className='grid-img'><img src={item.image}/></div>
                      <div className='grid-text'>
                        <small>furniture, chair</small>
                        <h6>{clipSentence(item.title)}</h6>
                        <p>${item.price}</p>
                        <button type='button'>Add to cart</button>
                      </div>
                    </div>
                   ))
                 }
                 


                    {/*<div className="g-col-6">
                    <div className='grid-img'><img src={pots}/></div>
                      <div className='grid-text'>
                        <small>Utensils, pots</small>
                        <h5>Kitchen pots</h5>
                        <p>$290</p>
                        <button type='button'>Add to cart</button>
                      </div>
                    </div>*/}


                 </div>
              </div>   
      
      
                  </div>
                </div>
      
                <div className="kitchen-boxes">
                  <div className="g-col-2 kitchencol1"><img src={kitchbanner1}/></div>
                  <div className="g-col-2 kitchencol2"><img src={kitchbanner2}/></div>
                </div>
      
      
            </div>
    </>
  )
}

export default KitchenSection
