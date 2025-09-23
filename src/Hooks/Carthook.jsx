import axios from "axios";

const addCart = async (userId, product) => {
  const response = await axios.post("http://localhost:2233/api/v1/cart", {
    userId,
    productId: product._id,
    title: product.title,
    price: product.price,
    quantity: 1
  });
  return response.data;
};


export default addCart

