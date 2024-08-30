import AllOrders from "../Pages/AllOrders/AllOrders";
import MyOrders from "../Pages/AllOrders/MyOrders/MyOrders";
import OrderConfirmed from "../Pages/AllOrders/OrderConfirmed/OrderConfirmed";
import OrderDetails from "../Pages/AllOrders/OrderDetails/OrderDetails";
import Blog from "../Pages/Blog/Blog";
import Cart from "../Pages/Cart/Cart";
import Details from "../Pages/Details/Details";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Payment from "../Pages/Payment/Payment";
import Register from "../Pages/Register/Register";

export const routers = [{
    path: "/",
    element: <Home />
},
{
    path: "/details/:id",
    element: <Details />
},

{
    path: "/cart",
    element: <Cart />
},
{
    path: "/blog",
    element: <Blog />
},
{
    path: "/register",
    element: <Register />
},
{
    path: "/login",
    element: <Login />
},
{
    path: "/payment",
    element: <Payment />
},
{
    path: "/order/myOrders",
    element: <MyOrders />
},
{
    path: "/order/orderDetails/:id",
    element: <OrderDetails />
},
{
    path: "/order/allorders",
    element: <AllOrders />
},
{
    path: "/order/orderconfirmed/:id",
    element: <OrderConfirmed />
},
]