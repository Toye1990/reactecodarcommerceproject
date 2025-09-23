import React from 'react'
import Products from './Products'

const Cartnewcontext = () => {
    const {data = []} = Products()


       const cartproduct = data.data.slice(2, 4)
       //const productmarket = data.data.slice(5, 7)
       return cartproduct
    }

export default Cartnewcontext