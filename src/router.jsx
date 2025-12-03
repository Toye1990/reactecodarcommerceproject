import {createBrowserRouter} from "react-router-dom";
import Home from "./Pages/Home/Homescreen";
import Shop from "./Pages/Shops/Shop";
import Promotion from "./Pages/Promo/Promotion"
import Blog from "./Pages/Blog/Blog"
import Page from "./Pages/Page/Page"
//import Contact from "./Pages/Contact/Contact";
import Signin from "./Pages/Contact/Signin";
import Register from "./Pages/Contact/Register";
import Cart from "./Pages/cart/Cart";
import Protectedroute from "./Hooks/Protectedroute";
import Checkout from "./Pages/checkoutpage/Checkout";
import Productdashboard from "./Pages/dashboard/Productdashboard";
import Contactus from "./Pages/Contact/Contactus";
//import Productdash from "./Pages/dashboard/Productdash";


export const router = createBrowserRouter([
    {path: "/", element: <Home/>},
    {path: "/shop", element: <Shop/>},
    {path: "/promotion", element: <Promotion/>},
    {path: "/blog", element: <Blog/>},
    {path: "/cart", element:  (
        <Protectedroute>
            <Cart/>
        </Protectedroute>
    )},
        {path: "/checkout", element:  (
        <Protectedroute>
            <Checkout/>
        </Protectedroute>
    )},
     {path: "/dashboard", element:  (
        <Protectedroute>
            <Productdashboard/>     
        </Protectedroute>
    )},
    {path: "/signin", element: <Signin/>},
    {path: "/register", element: <Register/>},
    {path: "/contact", element: <Contactus/>},

])