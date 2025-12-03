import React from 'react'
import Topheader from '../../component/Topheader'
import Footer from '../../component/Footer'
import Latestblogs from '../Home/Latestblogs'
import Newsletterpage from '../Home/Newsletterpage'

const Blog = () => {
  return (
    <>
      <div>
        <Topheader/>
        <Latestblogs/>
        <Newsletterpage/>
        <Footer/>
      </div>
    </>
  )
}

export default Blog
