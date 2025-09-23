
import axios from "axios";

const updateCart = async (userId, productId, quantity) => {
  const response = await axios.put("http://localhost:2233/api/v1/cart/update", {
    userId,
    productId,
    quantity
  });
  return response.data;
};

export default updateCart

