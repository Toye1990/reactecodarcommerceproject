import axios from "axios";


const removeItem = async (userId, productId) => {
  const response = await axios.delete("http://localhost:2233/api/v1/cart/remove", {
    data: { userId, productId }
  });
  return response.data;
};

export default removeItem
