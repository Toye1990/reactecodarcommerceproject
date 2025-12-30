import React from 'react'
import axios from 'axios';
import { ContextData } from '../Context/useContext';
import { useQuery } from '@tanstack/react-query';

const Producttoken = () => {
   
//const token = localStorage.getItem("token");
const {token} = ContextData()

   return useQuery({
    queryKey: ["admin-products"],
    queryFn: async () => {
      const { data } = await axios.get(
        "http://localhost:2233/api/v1/admin/fetchproduct",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data;
    },
    enabled: !!token,
  });

}

export default Producttoken