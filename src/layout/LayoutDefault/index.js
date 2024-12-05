import { useState } from 'react';
import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import CartMini from "../../components/CartMini";
import { getCookie } from "../../helpers/cookie";
import '../../index.css'; // Đưa ra đường dẫn chính xác từ LayoutDefault đến index.css trong thư mục src
function LayoutDefault() {
    const token = getCookie("token");
    const isLogin = useSelector(state => state.loginReducer);
    console.log(isLogin);
    const [inputData, setInputData] = useState('');
    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };
    return (
        <>
            <nav id="header">
                <div className="bg-white w-full top-0 left-0 z-40 px-8">
                    <div className="py-4">
                    <div className="container flex justify-between items-center">
                        {/* Phần bên trái: Logo và liên kết chính */}
                        <div className="flex items-center gap-6">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <a href="/">
                            <img
                                className="w-24 h-auto"
                                src="images/home/processed_image_2_cleaned.png"
                                alt="Logo"
                            />
                            </a>
                        </div>
                        {/* Menu chính */}
                        <ul className="hidden lg:flex items-center gap-12">
                            <li>
                            <NavLink
                                to="/"
                                className="text-gray-700 font-semibold hover:text-cyan-700"
                            >
                                Trang chủ
                            </NavLink>
                            </li>
                            <li className="relative group">
                            <NavLink
                                to="products"
                                className="text-gray-700 font-semibold hover:text-cyan-700"
                            >
                                Sản phẩm
                            </NavLink>
                            {/* Dropdown */}
                            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md -ml-4">
                                <ul>
                                {/* Điện thoại */}
                                <li className="relative group/item1 px-4 py-2">
                                    <NavLink
                                    to="smartphones"
                                    className="text-gray-700 hover:text-cyan-700 whitespace-nowrap"
                                    >
                                    Điện thoại
                                    </NavLink>
                                    {/* Sub-dropdown */}
                                    <div className="absolute left-full top-0 hidden group-hover/item1:block bg-white shadow-md rounded-md">
                                    <ul className="py-2">
                                        <li className="px-4">
                                        <NavLink
                                            to="smartphones_iphone"
                                            className="text-gray-700 hover:text-cyan-700"
                                        >
                                            Apple
                                        </NavLink>
                                        </li>
                                        <li className="px-4">
                                        <NavLink
                                            to="smartphones_samsung"
                                            className="text-gray-700 hover:text-cyan-700"
                                        >
                                            Samsung
                                        </NavLink>
                                        </li>
                                        <li className="px-4">
                                        <NavLink
                                            to="smartphones_xioami"
                                            className="text-gray-700 hover:text-cyan-700"
                                        >
                                            Xiaomi
                                        </NavLink>
                                        </li>
                                        <li className="px-4">
                                        <NavLink
                                            to="smartphones_khac"
                                            className="text-gray-700 hover:text-cyan-700"
                                        >
                                            Khác
                                        </NavLink>
                                        </li>
                                    </ul>
                                    </div>
                                </li>
                                {/* Máy tính */}
                                <li className="relative group/item2 px-4">
                                    <NavLink
                                    to="laptops"
                                    className="text-gray-700 hover:text-cyan-700 whitespace-nowrap"
                                    >
                                    Máy tính
                                    </NavLink>
                                    {/* Sub-dropdown */}
                                    <div className="absolute left-full top-0 hidden group-hover/item2:block bg-white shadow-md rounded-md -mt-2">
                                    <ul className="py-2">
                                        <li className="px-4">
                                        <NavLink
                                            to="laptops_dell"
                                            className="text-gray-700 hover:text-cyan-700"
                                        >
                                            Dell
                                        </NavLink>
                                        </li>
                                        <li className="px-4">
                                        <NavLink
                                            to="laptops_hp"
                                            className="text-gray-700 hover:text-cyan-700"
                                        >
                                            HP
                                        </NavLink>
                                        </li>
                                        <li className="px-4">
                                        <NavLink
                                            to="laptops_asus"
                                            className="text-gray-700 hover:text-cyan-700"
                                        >
                                            ASUS
                                        </NavLink>
                                        </li>
                                        <li className="px-4">
                                        <NavLink
                                            to="laptops_khac"
                                            className="text-gray-700 hover:text-cyan-700"
                                        >
                                            Khác
                                        </NavLink>
                                        </li>
                                    </ul>
                                    </div>
                                </li>
                                </ul>
                            </div>
                            </li>
                            <li>
                            <NavLink
                                to="contact"
                                className="text-gray-700 font-semibold hover:text-cyan-700"
                            >
                                Liên hệ
                            </NavLink>
                            </li>
                        </ul>
                        </div>

                        {/* Phần bên phải: Tìm kiếm, giỏ hàng, đăng nhập/đăng ký */}
                        <div className="flex items-center gap-12">
                        {/* Nút tìm kiếm */}
                        <button className="text-gray-700 hover:text-cyan-700">
                            <NavLink to="search">
                                <i className="fas fa-search"></i> Tìm kiếm
                            </NavLink>
                        </button>

                        {/* Nút giỏ hàng */}
                        <div>
                            <CartMini />
                        </div>

                        {/* Nút đăng nhập/đăng ký */}
                        <div className="flex items-center">
                            {token ? (
                            <NavLink
                                to="logout"
                                className="text-gray-700 font-semibold hover:text-cyan-700"
                            >
                                Đăng xuất
                            </NavLink>
                            ) : (
                            <ul className="flex items-center gap-4">
                                <li>
                                <NavLink
                                    to="login"
                                    className="text-gray-700 font-semibold hover:text-cyan-700"
                                >
                                    <i className="fa fa-sign-in"></i> Đăng nhập
                                </NavLink>
                                </li>
                                <li>
                                <NavLink
                                    to="register"
                                    className="text-gray-700 font-semibold hover:text-cyan-700"
                                >
                                    <i className="fa fa-user-plus"></i> Đăng ký
                                </NavLink>
                                </li>
                            </ul>
                            )}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </nav>
            <div className="container">
                <div className="row">
                    <Outlet />
                </div>
            </div>
            <footer className="bg-gray-100 py-8">
                <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Liên kết */}
                    <div>
                    <h3 className="text-cyan-700 text-lg font-semibold mb-4">Liên kết</h3>
                    <ul className="space-y-2 text-cyan-700">
                        <li><a href="#" className="hover:text-cyan-700">Trang chủ</a></li>
                        <li><a href="#" className="hover:text-cyan-700">Sản phẩm</a></li>
                        <li><a href="#" className="hover:text-cyan-700">Giới thiệu</a></li>
                        <li><a href="#" className="hover:text-cyan-700">Liên hệ</a></li>
                    </ul>
                    </div>

                    {/* Địa chỉ */}
                    <div>
                    <h3 className="text-cyan-700 text-lg font-semibold mb-4">Địa chỉ</h3>
                    <ul className="space-y-2 text-cyan-700">
                        <li><i className="fas fa-map-marker-alt"></i> Phường A, Quận B, Hà Nội</li>
                        <li><i className="fas fa-phone-alt"></i> 0961750846</li>
                        <li className="flex space-x-4 mt-2">
                        <a href="#" className="text-cyan-700 hover:text-cyan-700"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="text-cyan-700 hover:text-cyan-700"><i className="fab fa-facebook"></i></a>
                        <a href="#" className="text-cyan-700 hover:text-cyan-700"><i className="fab fa-twitter"></i></a>
                        </li>
                    </ul>
                    </div>

                    {/* Form nhận thông tin */}
                    <div>
                    <h3 className="text-cyan-700 text-lg font-semibold mb-4">Nhận thông tin</h3>
                    <form className="flex flex-col space-y-4">
                        <input
                        type="email"
                        placeholder="Nhập địa chỉ Email"
                        className="p-2 border border-gray-300 rounded-md"
                        />
                        <button type="submit" className="bg-cyan-700 text-white p-2 rounded-md hover:bg-cyan-900">
                        Đăng ký
                        </button>
                        <p className="text-sm text-cyan-700">
                        Nhận thông tin cập nhật mới nhất từ trang web của chúng tôi.
                        </p>
                    </form>
                    </div>
                </div>
            </footer> 
        </>
    )
}
export default LayoutDefault;