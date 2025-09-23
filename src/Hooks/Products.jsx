import React from 'react'
import { useQuery  } from "@tanstack/react-query";
import axios from 'axios';

const Products = () => {
    
  return useQuery ({
     queryKey: ["all-product"],
     queryFn: () => axios.get("https://fakestoreapi.com/products"),
     onError: (error) => {
       console.log(error)
     }
  })
}



export default Products
