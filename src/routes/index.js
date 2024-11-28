
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
import DienThoai from "../pages/DienThoai";
import MayTinh from "../pages/MayTinh";
import MayTinh_ASUS from "../pages/MayTinh_ASUS";
import MayTinh_HP from "../pages/MayTinh_HP";
import MayTinh_KHAC from "../pages/MayTinh_KHAC";
import MayTinh_DELL from "../pages/MayTinh_DELL";

import { patch } from "../utils/request";
import SearchComponent from "../pages/Search";
import DienThoai_IPHONE from "../pages/DienThoai_IPHONE";
import DienThoai_SAMSUNG from "../pages/DienThoai_SAMSUNG";
import DienThoai_XIOAMI from "../pages/DienThoai_XIOAMI";
import DienThoai_KHAC from "../pages/DienThoai_KHAC";

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
            },
            {
                path:"edit",
                element:<EditProduct />
            },
            {
                path:"smartphones",
                element:<DienThoai />
            },
            {
                path:"laptops",
                element:<MayTinh />
            },
            {
                path:"laptops_asus",
                element:<MayTinh_ASUS />
            },
            {
                path:"laptops_dell",
                element:<MayTinh_DELL />
            },
            {
                path:"laptops_hp",
                element:<MayTinh_HP />
            },
            {
                path:"laptops_khac",
                element:<MayTinh_KHAC />
            },
            {
                path:"search",
                element:<SearchComponent />
            },
            {
                path:"smartphones_iphone",
                element:<DienThoai_IPHONE />
            },
            {
                path:"smartphones_samsung",
                element:<DienThoai_SAMSUNG />
            },
            {
                path:"smartphones_xioami",
                element:<DienThoai_XIOAMI />
            },
            {
                path:"smartphones_khac",
                element:<DienThoai_KHAC />
            }
        ]
    }
]
