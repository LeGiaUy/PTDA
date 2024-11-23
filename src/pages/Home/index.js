export function Home(){
    return (
        <>
       <section id="slider">
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<div id="slider-carousel" class="carousel slide" data-ride="carousel">
						<ol class="carousel-indicators">
							<li data-target="#slider-carousel" data-slide-to="0" class="active"></li>
							<li data-target="#slider-carousel" data-slide-to="1"></li>
							<li data-target="#slider-carousel" data-slide-to="2"></li>
						</ol>
						
						<div class="carousel-inner">
							<div class="item active">
								<div class="col-sm-6">
									<h1><span>NHÓM 14 </span>AUTO</h1>
									<h2>Chuyên các sản phẩm phụ kiện auto</h2>
									<p>Chúng tôi chuyên cung cấp các sản phẩm, linh kiện ô tô</p>
									<button type="button" class="btn btn-default get">Get it now</button>
								</div>
								<div class="col-sm-6">
									<img src="images/home/anhdong1.png" class="girl img-responsive" alt="" />
								</div>
							</div>
							<div class="item">
								<div class="col-sm-6">
								<h1><span>NHÓM 14 </span>AUTO</h1>
									<h2>Chuyên các sản phẩm phụ kiện auto</h2>
									<p>Chúng tôi đem đến những sản phẩm tốt nhất tới khách hàng </p>
									<button type="button" class="btn btn-default get">Get it now</button>
								</div>
								<div class="col-sm-6">
									<img src="images/home/anhdong2.png" class="girl img-responsive" alt="" />
									
								</div>
							</div>
							
							<div class="item">
								<div class="col-sm-6">
								<h1><span>NHÓM 14 </span>AUTO</h1>
									<h2>Chuyên các sản phẩm phụ kiện auto</h2>
									<p>Hãy liên hệ với chúng tôi để biết thêm thông tin chi tiết</p>
									<button type="button" class="btn btn-default get">Get it now</button>
								</div>
								<div class="col-sm-6">
									<img src="images/home/anhdong3.png" class="girl img-responsive" alt="" />
									
								</div>
							</div>
							
						</div>
						
						<a href="#slider-carousel" class="left control-carousel hidden-xs" data-slide="prev">
							<i class="fa fa-angle-left"></i>
						</a>
						<a href="#slider-carousel" class="right control-carousel hidden-xs" data-slide="next">
							<i class="fa fa-angle-right"></i>
						</a>
					</div>
					
				</div>
			</div>
		</div>
	</section>
        </>
    )
}
export default Home;