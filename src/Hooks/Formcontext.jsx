/*import { createContext, useState, useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { getLocalStorage } from "./Forusecontext";
import { getSessionStorage } from "./Forusecontext";
import addCart from "./Carthook";
import Cartnewcontext from "./Cartnewcontext";
//import Products from "./Products";


/*
const StorageContext = createContext();
//const {data = []} = Products()

//const productmark = data.data

export const ContextProvider = ({ children }) => {

  const [user, setUser] = useState(() => getLocalStorage("user", null));
  const [token, setToken] = useState(() => getSessionStorage("token", null));
  const [cart, setCart] = useState(() => getLocalStorage("cart", []));

  // Save to localStorage safely
  useEffect(() => {
    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));
    } else {
      sessionStorage.removeItem("user");
    }
  }, [user]);

  useEffect(() => {
    if (token) {
      sessionStorage.setItem("token", JSON.stringify(token));
    } else {
      sessionStorage.removeItem("token");
    }
  }, [token]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addUser = (currentUser) => {
   
     if (!currentUser) return; // safeguard

  const id = currentUser._id || currentUser.userId;


    setUser({
      userid: id,
      firstname: currentUser.firstname,
      email: currentUser.email
    });
    sessionStorage.setItem("user", JSON.stringify({
       userid: id,
      firstname: currentUser.firstname,
      email: currentUser.email
    }));
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
    toast.success("logged out successfully");
    window.reload()

  };

  const setMytoken = (userToken) => {
    setToken(userToken);
    sessionStorage.setItem("token", JSON.stringify(userToken));
  };

 const cartTotal = () => {
  if (!Array.isArray(cart)) return 0;
  return cart.reduce((acc, curr) => acc + Number(curr.price), 0);
};


  const addCart = (data) => {
    const check = cart.filter((item) =>{ 
      return item.title === data.title
    });

    if (check.length > 0) {
      toast.error("product already exist");
      return;
    }
     setCart([...cart, data])
     localStorage.setItem("cart", JSON.stringify(cart))
     toast.success("cart added successfully");
    return cart
    /*const newCart = [...cart, data];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    toast.success("cart added successfully");
    return newCart;
  }*/
/*
  const removecart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <StorageContext.Provider
      value={{
        addCart,
        removecart,
        cartTotal,
        setMytoken,
        cart,
        user,
        token,
        setUser,
        logout,
        addUser,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};


export const ContextData = () => {
  return useContext(StorageContext);
};

*/