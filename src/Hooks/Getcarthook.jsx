import axios from "axios";

const getCart = async (userId) => {
  const response = await axios.get(`http://localhost:2233/api/v1/cart/${userId}`);
  return response.data;
};


export default getCart

