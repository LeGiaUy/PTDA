
import PrivateRoutes from "../components/PrivateRoutes";
import LayoutDefault from "../layout/LayoutDefault";
import Home from "../pages/Home"
import About from "../pages/About";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";
import Product from "../pages/EditProduct_ADMIN";
import Products from "../pages/Product_USER";
import EditProduct from "../pages/EditProduct_ADMIN";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Register from "../pages/Resgister";

export const routes= [
    {
        path: "/",
        element: <LayoutDefault />,
        children: [
            {
                path: "/",
                element: <Home />
            },{
                path:"products",
                element:<Products />
            },{
                path:"about",
                element:<About />
            },{
                path:"contact",
                element:<Contact />
            },
            {
                path:"login",
                element:<Login />
            },
            {
                path:"logout",
                element:<Logout />
            },
            {
                path:"register",
                element:<Register />
            },
            {
                path:"cart",
                element:<Cart />
            },{
                path:"edit",
                element:<EditProduct />
            }
        ]
    }
]
