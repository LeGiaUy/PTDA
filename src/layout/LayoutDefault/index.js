import { NavLink, Outlet } from "react-router-dom";
import "./LayoutDefault.scss"
import { getCookie } from "../../helpers/cookie";
import { useSelector } from "react-redux"
import CartMini from "../../components/CartMini";

function LayoutDefault() {
    const token = getCookie("token");
    const isLogin = useSelector(state => state.loginReducer);
    console.log(isLogin);
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
                                            <li><a href="#"><i className="fa fa-phone"></i> +84 972 402 957</a></li>
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
                                        <a href="/"><img style={{ width: '100px', height: 'auto' }} src="images/home/image-removebg.png" alt="" /></a>
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
                                                    <li><a href="shop.html">Phụ tùng điện</a></li>
                                                    <li><a href="product-details.html">Phụ tùng động cơ</a></li>
                                                    <li><a href="checkout.html">Phụ tùng gầm</a></li>
                                                    <li><a href="cart.html">Phụ tùng khác</a></li>

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
                                    <div className="search_box pull-right">
                                        <input type="text" placeholder="Search" />
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


                    <div class="footer-bottom">
                        <div class="container">
                            <div class="row">
                                <p class="pull-left">Copyright © 2024 CART PARTS Inc. All rights reserved.</p>
                                <p class="pull-right">Designed by <span><a target="_blank" href="http://www.themeum.com">NHOM 14 TTCSN</a></span></p>
                            </div>
                        </div>
                    </div>

                </footer>

            )
        </>
    )
}
export default LayoutDefault;