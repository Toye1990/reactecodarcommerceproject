import React from 'react'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import HeroSection from './HeroSection'
import Electronic from './Electronic'
import NewArrival from './NewArrival'
import FashionClothing from './FashionClothing'
import KitchenSection from './KitchenSection'
import GiftHomeMade from './GiftHomeMade'
import Latestblogs from './Latestblogs'
import Newsletterpage from './Newsletterpage'


const Homescreen = () => {
  return (
    <>
      <Header/>
      <NewArrival/>
      <Electronic/>
      <FashionClothing/>
      <KitchenSection/>
      <GiftHomeMade/>
      <Latestblogs/>
      <Newsletterpage/>
      <Footer/>
    </>
  )
}

export default Homescreen
