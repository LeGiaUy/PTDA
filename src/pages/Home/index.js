import "./style.scss";
export function Home() {
	return (
		<>
			<section>
				<div className="container">
					<div className="row">
						{/* <div className="col-sm-3">
							<div className="left-sidebar">
								<h2>DANH MỤC SẢN PHẨM</h2>
								<div className="panel-group category-products" id="accordian">
									<div className="panel panel-default">
										<div className="panel-heading">
											<h4 className="panel-title">
												<a data-toggle="collapse" data-parent="#accordian" href="#sportswear">
													<span className="badge pull-right"><i class="fa fa-plus"></i></span>
													<NavLink to="smartphones" className="style" >Điện thoại</NavLink>
												</a>
											</h4>
										</div>
										<div id="sportswear" class="panel-collapse collapse">
											<div class="panel-body">
												<ul>
													<li><NavLink to="smartphones_iphone">APPLE</NavLink></li>
													<li><NavLink to="smartphones_samsung">SAMSUNG</NavLink></li>
													<li><NavLink to="smartphones_xioami">XIOAMI</NavLink></li>
													<li><NavLink to="smartphones_khac">KHÁC</NavLink></li>
												</ul>
											</div>
										</div>
									</div>
									<div class="panel panel-default">
										<div class="panel-heading">
											<h4 class="panel-title">
												<a data-toggle="collapse" data-parent="#accordian" href="#mens">
													<span class="badge pull-right"><i class="fa fa-plus"></i></span>
													<NavLink to="laptops" className="style" >MÁY TÍNH</NavLink>
												</a>
											</h4>
										</div>
										<div id="mens" class="panel-collapse collapse">
											<div class="panel-body">
												<ul>
													<li><NavLink to="laptops_dell">DELL</NavLink></li>
													<li><NavLink to="laptops_asus">ASUS</NavLink></li>
													<li><NavLink to="laptops_hp">HP</NavLink></li>
													<li><NavLink to="laptops_khac">KHÁC</NavLink></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div> */}
						<div className="col-sm-9 padding-right">
							<div className="features_items">
								<h2 className="title text-center">Các sản phẩm nổi bật</h2>
								{/* <div className="col-sm-4">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center">
												<img src="images/home/z4162394153328_8ef7d40d741c5b427854c92db364198c.jpg" alt />
												<h2>Giá: 95$</h2>
												<p className="height_bn">BALLAST ĐÈN PHA AUDI Q7</p>
												<div className="product__button">
													<button><i className="fa fa-shopping-cart" />  Thêm vào giỏ hàng</button>
												</div>

											</div>

										</div>
										<div className="choose">
											<ul className="nav nav-pills nav-justified">
												<li><a href="#"><i className="fa fa-plus-square" />Add to wishlist</a></li>
												<li><a href="#"><i className="fa fa-plus-square" />Add to compare</a></li>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-sm-4">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center ">
												<img src="images/home/z4350289481373_687c74cca78ebf466a65e3cc609242a8.jpg" alt />
												<h2>Giá: 115$</h2>
												<p className="height_bn">BALAST ĐÈN PHA CHEVROLET TRAILBLAZER</p>
												<div className="product__button">
													<button><i className="fa fa-shopping-cart" />  Thêm vào giỏ hàng</button>
												</div>											</div>

										</div>
										<div className="choose">
											<ul className="nav nav-pills nav-justified">
												<li><a href="#"><i className="fa fa-plus-square" />Add to wishlist</a></li>
												<li><a href="#"><i className="fa fa-plus-square" />Add to compare</a></li>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-sm-4">
									<div className="product-image-wrapper">
										<div className="single-products">
											<div className="productinfo text-center ">
												<img src="images/home/id18.jpg" alt />
												<h2>Giá: 23$</h2>
												<p className="height_bn">BẠC BALIE KIA SPECTRA</p>
												<div className="product__button">
													<button><i className="fa fa-shopping-cart" />  Thêm vào giỏ hàng</button>
												</div>											</div>

										</div>
										<div className="choose">
											<ul className="nav nav-pills nav-justified">
												<li><a href="#"><i className="fa fa-plus-square" />Add to wishlist</a></li>
												<li><a href="#"><i className="fa fa-plus-square" />Add to compare</a></li>
											</ul>
										</div>
									</div>
								</div> */}




							</div>

							{/* <div className="recommended_items">
								<div id="recommended-item-carousel" className="carousel slide" data-ride="carousel">
									<div className="carousel-inner">
										<div className="item active">
											<div className="col-sm-4">
												<div className="product-image-wrapper">
													<div className="single-products">
														<div className="productinfo text-center gan">
															<div className="gan__image"><img src="images/home/id20.jpg" alt /></div>
															<h2> Giá:21$</h2>
															<p>BẠC ĐẠN TĂNG TỔNG CHEVROLET SPARK</p>
															<div className="product__button">
																<button><i className="fa fa-shopping-cart" />  Thêm vào giỏ hàng</button>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-sm-4">
												<div className="product-image-wrapper">
													<div className="single-products">
														<div className="productinfo text-center gan" >
															<div className="gan__image"><img src="images/home/id21.jpg" alt /></div>
															<h2>Giá: 33$</h2>
															<p>BẠC XÉC MĂNG ACURA RSX</p>
															<div className="product__button">
																<button><i className="fa fa-shopping-cart" />  Thêm vào giỏ hàng</button>
															</div>														</div>
													</div>
												</div>
											</div>
											<div className="col-sm-4">
												<div className="product-image-wrapper">
													<div className="single-products">
														<div className="productinfo text-center gan">
															<div className="gan__image"><img src="images/home/id24.jpg" alt /></div>
															<h2>Giá: 119$</h2>
															<p>BÁNH ĐÀ HYUNDAI PORTER 2, KIA BONGO 3</p>
															<div className="product__button">
																<button><i className="fa fa-shopping-cart" />  Thêm vào giỏ hàng</button>
															</div>														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="item">
											<div className="col-sm-4">
												<div className="product-image-wrapper">
													<div className="single-products">
														<div className="productinfo text-center gan">
															<div className="gan__image"><img src="images/home/id25.jpg" alt /></div>
															<h2>Giá: 50$</h2>
															<p>BẦU E KIA BONGO 3 81104E000</p>
															<div className="product__button">
																<button><i className="fa fa-shopping-cart" />  Thêm vào giỏ hàng</button>
															</div>														</div>
													</div>
												</div>
											</div>
											<div className="col-sm-4">
												<div className="product-image-wrapper">
													<div className="single-products">
														<div className="productinfo text-center gan">
															<div className="gan__image"><img src="images/home/id26.jpg" alt /></div>
															<h2>Giá:27$</h2>
															<p>BẦU LỌC GIÓ HONDA ACCORD</p>
															<div className="product__button">
																<button><i className="fa fa-shopping-cart" />  Thêm vào giỏ hàng</button>
															</div>														</div>
													</div>
												</div>
											</div>
											<div className="col-sm-4">
												<div className="product-image-wrapper">
													<div className="single-products">
														<div className="productinfo text-center gan">
															<div className="gan__image"><img src="images/home/id29.jpg" alt /></div>
															<h2>Giá:242$</h2>
															<p>BÉC PHUN DẦU KIA SEDONA</p>
															<div className="product__button">
																<button><i className="fa fa-shopping-cart" />  Thêm vào giỏ hàng</button>
															</div>														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<a className="left recommended-item-control" href="#recommended-item-carousel" data-slide="prev">
										<i className="fa fa-angle-left" />
									</a>
									<a className="right recommended-item-control" href="#recommended-item-carousel" data-slide="next">
										<i className="fa fa-angle-right" />
									</a>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
export default Home;