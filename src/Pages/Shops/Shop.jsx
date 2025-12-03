import React from 'react'
import Topheader from '../../component/Topheader'
import Footer from '../../component/Footer'
import Electronic from '../Home/Electronic'
import FashionClothing from '../Home/FashionClothing'
import KitchenSection from '../Home/KitchenSection'
import GiftHomeMade from '../Home/GiftHomeMade'
import './Shop.css'

const Shop = () => {
  return (
    <>
      <div className='shoppart'>
         <Topheader/>
          <Electronic/>
          <FashionClothing/>
          <KitchenSection/>
          <div className='spaceline'>
            <p>More Products coming soon</p>
          </div>
          <Footer/>
      </div>
    </>
  )
}

export default Shop
