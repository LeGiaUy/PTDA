import { NavLink, Outlet } from "react-router-dom";
import "./LayoutDefault.scss"
import { getCookie } from "../../helpers/cookie";
import { useSelector } from "react-redux"
import CartMini from "../../components/CartMini";
import { useState } from 'react';
import SearchComponent from "../../pages/Search";
import "./style.css"
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
            {/* <div className="layout-default">
                <header className="layout-default__header">
                    <div className="layout-default__logo">
                        Logo
                    </div>
                    <div className="menu">
                        <ul>
                            <li>
                                <NavLink to="/" >Trang chủ</NavLink>
                            </li>
                            <li>
                                <NavLink to="products" >Sản phẩm</NavLink>
                            </li>
                            <li>
                                <NavLink to="about">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="contact" >Liên hệ</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="layout-default__account">
                        {token ? (<>
                            <NavLink to="logout">Đăng xuất</NavLink>
                        </>) : (<>
                            <NavLink to="login">Đăng nhập</NavLink>
                            <NavLink to="register">Đăng ký</NavLink>

                        </>)}

                    </div>
                    <div className="layout-default__cart">
                        <CartMini />
                    </div>
                </header>
                <main className="layout-default__main">
                    <Outlet />
                </main>
                <footer className="layout-default__footer">
                    COPYRIGHT @ 2024 BY NHÓM 12 PHÁT TRIỂN DỰ ÁN CÔNG NGHỆ THÔNG TIN
                </footer>
            </div> */}
            <header id="header">
                <div className="header_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="contactinfo">
                                    <ul className="nav nav-pills">
                                        <li><a href="#"><i className="fa fa-phone"></i> +84 973 402 957</a></li>
                                        <li><a href="#"><i className="fa fa-envelope"></i> hoainam0660@gmail.com</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="social-icons pull-right">
                                    <ul className="nav navbar-nav">
                                        <li><a href="https://www.facebook.com" target="blank" ><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="https://x.com" target="blank"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="https://www.linkedin.com" target="blank"><i className="fa fa-linkedin"></i></a></li>
                                        <li><a href="https://dribbble.com" target="blank"><i className="fa fa-dribbble"></i></a></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header-middle">
                    <div className="container">
                        <div className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0px' }}>
                            <div className="col-sm-4">
                                <div className="logo pull-left" >
                                    <a href="/"><img style={{ width: '200px', height: 'auto' }} src="images/home/processed_image_2_cleaned.png" alt="" /></a>
                                </div>
                                {/* <div className="btn-group pull-right">
							<div className="btn-group">
								<button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
									USA
									<span className="caret"></span>
								</button>
								<ul className="dropdown-menu">
									<li><a href="#">Canada</a></li>
									<li><a href="#">UK</a></li>
								</ul>
							</div>
							
							<div className="btn-group">
								<button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
									DOLLAR
									<span className="caret"></span>
								</button>
								<ul className="dropdown-menu">
									<li><a href="#">Canadian Dollar</a></li>
									<li><a href="#">Pound</a></li>
								</ul>
							</div>
						</div> */}
                            </div>
                            <div className="col-sm-8">
                                <div className="shop-menu pull-right">
                                    <ul className="nav navbar-nav">
                                        <li> <CartMini /></li>
                                        {token ? (<>
                                            <NavLink to="logout">Đăng xuất</NavLink>
                                        </>) : (<>
                                            <li><NavLink to="login"> <i className="fa fa-sign-in"></i>Đăng nhập</NavLink> </li>
                                            <li><NavLink to="register"> <i className="fa fa-user-plus"></i>Đăng ký</NavLink> </li>

                                        </>)}

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-9">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>
                                <div className="mainmenu pull-left">
                                    <ul className="nav navbar-nav collapse navbar-collapse">
                                        <li className="active"> <NavLink to="/" >Trang chủ</NavLink></li>
                                        <li className="dropdown"><li><NavLink to="products" >Sản phẩm</NavLink></li>
                                            <ul role="menu" className="sub-menu">
                                                <li className="li_t3"><NavLink to="smartphones" >Điện thoại</NavLink>
                                                    <ul className="ul_t3">
                                                        <li><NavLink to="smartphones_iphone" >APPLE</NavLink></li>
                                                        <li><NavLink to="smartphones_samsung" >SAMSUNG</NavLink></li>
                                                        <li><NavLink to="smartphones_xioami" >XIOAMI</NavLink></li>
                                                        <li><NavLink to="smartphones_khac" >KHÁC</NavLink></li>
                                                    </ul>
                                                </li>
                                                <li className="li_t3"><NavLink to="laptops" >Máy tính</NavLink>
                                                    <ul className="ul_t3">
                                                        <li><NavLink to="laptops_dell" >DELL</NavLink></li>
                                                        <li><NavLink to="laptops_hp" >HP</NavLink></li>
                                                        <li><NavLink to="laptops_asus" >ASUS</NavLink></li>
                                                        <li><NavLink to="laptops_khac" >KHÁC</NavLink></li>
                                                    </ul></li>
                                            </ul>
                                        </li>
                                        {/* <li className="dropdown"><a href="#">Blog<i className="fa fa-angle-down"></i></a>
                                    <ul role="menu" className="sub-menu">
                                        <li><a href="blog.html">Blog List</a></li>
										<li><a href="blog-single.html">Blog Single</a></li>
                                    </ul>
                                </li>  */}

                                        <li><NavLink to="contact" >Liên hệ</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className=" pull-right">
                                    <button style={{ width: "150px", height: "36px", border: "0", borderRadius: "10px", marginLeft: "20px", color: "black", fontWeight: "700", fontSize: "20px" }}><NavLink to="search">Tìm Kiếm</NavLink></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
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
                            <p class="pull-right">Designed by <span><a target="_blank" href="http://www.themeum.com">NHOM 12 PTDACNTT</a></span></p>
                        </div>
                    </div>
                </div>

            </footer>

            
        </>
    )
}
export default LayoutDefault;