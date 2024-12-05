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
                                className="text-gray-700 font-semibold hover:text-[#85c1c9]"
                            >
                                Trang chủ
                            </NavLink>
                            </li>
                            <li className="relative group">
                            <NavLink
                                to="products"
                                className="text-gray-700 font-semibold hover:text-[#85c1c9]"
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
                                    className="text-gray-700 hover:text-[#85c1c9] whitespace-nowrap"
                                    >
                                    Điện thoại
                                    </NavLink>
                                    {/* Sub-dropdown */}
                                    <div className="absolute left-full top-0 hidden group-hover/item1:block bg-white shadow-md rounded-md">
                                    <ul className="py-2">
                                        <li className="px-4">
                                        <NavLink
                                            to="smartphones_iphone"
                                            className="text-gray-700 hover:text-[#85c1c9]"
                                        >
                                            Apple
                                        </NavLink>
                                        </li>
                                        <li className="px-4">
                                        <NavLink
                                            to="smartphones_samsung"
                                            className="text-gray-700 hover:text-[#85c1c9]"
                                        >
                                            Samsung
                                        </NavLink>
                                        </li>
                                        <li className="px-4">
                                        <NavLink
                                            to="smartphones_xioami"
                                            className="text-gray-700 hover:text-[#85c1c9]"
                                        >
                                            Xiaomi
                                        </NavLink>
                                        </li>
                                        <li className="px-4">
                                        <NavLink
                                            to="smartphones_khac"
                                            className="text-gray-700 hover:text-[#85c1c9]"
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
                                    className="text-gray-700 hover:text-[#85c1c9] whitespace-nowrap"
                                    >
                                    Máy tính
                                    </NavLink>
                                    {/* Sub-dropdown */}
                                    <div className="absolute left-full top-0 hidden group-hover/item2:block bg-white shadow-md rounded-md -mt-2">
                                    <ul className="py-2">
                                        <li className="px-4">
                                        <NavLink
                                            to="laptops_dell"
                                            className="text-gray-700 hover:text-[#85c1c9]"
                                        >
                                            Dell
                                        </NavLink>
                                        </li>
                                        <li className="px-4">
                                        <NavLink
                                            to="laptops_hp"
                                            className="text-gray-700 hover:text-[#85c1c9]"
                                        >
                                            HP
                                        </NavLink>
                                        </li>
                                        <li className="px-4">
                                        <NavLink
                                            to="laptops_asus"
                                            className="text-gray-700 hover:text-[#85c1c9]"
                                        >
                                            ASUS
                                        </NavLink>
                                        </li>
                                        <li className="px-4">
                                        <NavLink
                                            to="laptops_khac"
                                            className="text-gray-700 hover:text-[#85c1c9]"
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
                                className="text-gray-700 font-semibold hover:text-[#85c1c9]"
                            >
                                Liên hệ
                            </NavLink>
                            </li>
                        </ul>
                        </div>

                        {/* Phần bên phải: Tìm kiếm, giỏ hàng, đăng nhập/đăng ký */}
                        <div className="flex items-center gap-12">
                        {/* Nút tìm kiếm */}
                        <button className="text-gray-700 hover:text-[#85c1c9]">
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
                                className="text-gray-700 font-semibold hover:text-[#85c1c9]"
                            >
                                Đăng xuất
                            </NavLink>
                            ) : (
                            <ul className="flex items-center gap-4">
                                <li>
                                <NavLink
                                    to="login"
                                    className="text-gray-700 font-semibold hover:text-[#85c1c9]"
                                >
                                    <i className="fa fa-sign-in"></i> Đăng nhập
                                </NavLink>
                                </li>
                                <li>
                                <NavLink
                                    to="register"
                                    className="text-gray-700 font-semibold hover:text-[#85c1c9]"
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
            <footer id="footer">
                <div class="footer-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-2">
                                <div class="companyinfo">
                                    <h2><span>NHÓM14</span>-TTCSN</h2>
                                    <p>Chuyên các sản phẩm, linh kiện ô tô</p>
                                </div>
                            </div>
                            <div class="col-sm-7">
                                <div class="col-sm-3">
                                    <div class="video-gallery text-center">
                                        <a href="https://www.youtube.com/watch?v=Mm2fz1t39bk" target="blank">
                                            <div class="iframe-img">
                                                <img src="images/home/hqdefault.jpg" alt="" />
                                            </div>
                                            <div class="overlay-icon">
                                                <i class="fa fa-play-circle-o"></i>
                                            </div>
                                        </a>
                                        <p>TỰ LÀM VÀ BẢO TRÌ</p>
                                        <h2>24 DEC 2018</h2>
                                    </div>
                                </div>

                                <div class="col-sm-3">
                                    <div class="video-gallery text-center">
                                        <a href="https://www.youtube.com/watch?v=MtPX0jBB6c0" target="blank">
                                            <div class="iframe-img">
                                                <img src="images/home/sua2.jpg" alt="" />
                                            </div>
                                            <div class="overlay-icon">
                                                <i class="fa fa-play-circle-o"></i>
                                            </div>
                                        </a>
                                        <p>SỬA XE HƠI</p>
                                        <h2>21 FEB 2019</h2>
                                    </div>
                                </div>

                                <div class="col-sm-3">
                                    <div class="video-gallery text-center">
                                        <a href="https://www.youtube.com/watch?v=ahh5AAfMtv8" target="blank">
                                            <div class="iframe-img">
                                                <img src="images/home/sua3.jpg" alt="" />
                                            </div>
                                            <div class="overlay-icon">
                                                <i class="fa fa-play-circle-o"></i>
                                            </div>
                                        </a>
                                        <p>GARA SỬA CHỮA</p>
                                        <h2>15 OCT 2019</h2>
                                    </div>
                                </div>

                                <div class="col-sm-3">
                                    <div class="video-gallery text-center">
                                        <a href="https://www.youtube.com/watch?v=3_h8NwzaSTg" target="blank">
                                            <div class="iframe-img">
                                                <img src="images/home/sua5.jpg" alt="" />
                                            </div>
                                            <div class="overlay-icon">
                                                <i class="fa fa-play-circle-o"></i>
                                            </div>
                                        </a>
                                        <p> Ô TÔ TỰ PHỤC VỤ</p>
                                        <h2>09 DEC 2022</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="address">
                                    <img src="images/home/map.png" alt="" />
                                    <p>Số 298 đường Cầu Diễn, quận Bắc Từ Liêm, Hà Nội</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="footer-widget">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-3">
                                <div class="single-widget">
                                    <h2>DỊCH VỤ</h2>
                                    <ul class="nav nav-pills nav-stacked">
                                        <li><a href="#">Hỗ trợ trực tuyến</a></li>
                                        <li><a href="#">Liên hệ chúng tôi</a></li>
                                        <li><a href="#">Trạng thái đơn hàng</a></li>
                                        <li><a href="#">Thay đổi địa điểm</a></li>
                                        <li><a href="#">Câu hỏi thường gặp</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <div class="col-sm-2">
                                <div class="single-widget">
                                    <h2>Quock Shop</h2>
                                    <ul class="nav nav-pills nav-stacked">
                                        <li><a href="#">T-Shirt</a></li>
                                        <li><a href="#">Mens</a></li>
                                        <li><a href="#">Womens</a></li>
                                        <li><a href="#">Gift Cards</a></li>
                                        <li><a href="#">Shoes</a></li>
                                    </ul>
                                </div>
                            </div> */}
                            <div class="col-sm-3">
                                <div class="single-widget">
                                    <h2>CHÍNH SÁCH</h2>
                                    <ul class="nav nav-pills nav-stacked">
                                        <li><a href="#">Điều khoản sử dụng</a></li>
                                        <li><a href="#">Chính sách quyền riêng tư</a></li>
                                        <li><a href="#">Chính sách hoàn tiền</a></li>
                                        <li><a href="#">Hệ thống thanh toán</a></li>
                                        <li><a href="#">Hệ thống vé</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-sm-2">
                                <div class="single-widget">
                                    <h2>Giới thiệu CÔNG TY</h2>
                                    <ul class="nav nav-pills nav-stacked">
                                        <li><a href="#">Thông tin công ty</a></li>
                                        <li><a href="#">Nghề nghiệp</a></li>
                                        <li><a href="#">Vị trí cửa hàng</a></li>
                                        <li><a href="#">Chương trình liên kết</a></li>
                                        <li><a href="#">Bản quyền</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-sm-3 col-sm-offset-1">
                                <div class="single-widget">
                                    <h2>Nhận thông tin</h2>
                                    <form action="#" class="searchform">
                                        <input type="text" placeholder="Nhập địa chỉ Email" />
                                        <button type="submit" class="btn btn-default"><i class="fa fa-arrow-circle-o-right"></i></button>
                                        <p>Nhận thông tin cập nhật mới nhất từ
                                            trang web của chúng tôi và tự cập nhật thông tin cho mình..</p>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="footer-bottom">
                    <div class="container">
                        <div class="row">
                            <p class="pull-left">Copyright © 2024 ELECTRONICS DEVICE Inc. All rights reserved.</p>
                            <p class="pull-right">Designed by <span><a target="_blank" href="http://www.themeum.com" rel="noreferrer">NHOM 12 PTDACNTT</a></span></p>
                        </div>
                    </div>
                </div>

            </footer>

            
        </>
    )
}
export default LayoutDefault;