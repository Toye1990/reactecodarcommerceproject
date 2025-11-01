import { createContext, useState, useContext } from "react";
import toast from "react-hot-toast";
//import { Navigate } from "react-router-dom";

const UserContext = createContext();

export const ContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("myCart")) || []
  );

  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("user") || null)
  );
  const [token, setToken] = useState(
    JSON.parse(sessionStorage.getItem("token") || null)
  );

  const setMyToken = (userToken) => {
    setToken(userToken);
    sessionStorage.setItem("token", JSON.stringify(userToken));
  };

  const addUser = (currentUser) => {
    setUser({
      userId: currentUser._id,
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
    });
    sessionStorage.setItem(
      "user",
      JSON.stringify({
        userId: currentUser._id,
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
      })
    );
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
    toast.success("Logged out successfully");
    window.reload();
  };

  function addToCart(data) {
    // if (!user || !token) {
    //   toast.error("You must be logged in to add items to cart");
      // return <Navigate to="/login" />;
    //   return;
    // }
    const check = cart.filter((item) => {
      return item.title === data.title;
    });

    if (check.length > 0) {
      toast.error("Item already in cart");
      return;
    }
    setCart([...cart, data]);
    localStorage.setItem("myCart", JSON.stringify(cart));
    toast.success(`Added to cart successfully`);
    return cart;
  }

  const removeCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem("myCart", JSON.stringify(newCart));
    toast.success("Item removed from cart");
  };
  return (
    <UserContext.Provider
      value={{
        addToCart,
        cart,
        logout,
        addUser,
        user,
        setMyToken,
        token,
        removeCart,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const ContextData = () => {
  return useContext(UserContext);
};
