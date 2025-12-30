import React from 'react'
import { useQuery  } from "@tanstack/react-query";
import axios from 'axios';

const Justfile = () => {
 return useQuery ({
     queryKey: ["all-product"],
     //queryFn: () => axios.get("https://nodecodarprojectbackend.onrender.com/api/v1/admin/productfetch"),
     queryFn: () => axios.get("https://fakestoreapi.com/products"),
     onError: (error) => {
       console.log(error)
     }
  })
}

export default Justfile