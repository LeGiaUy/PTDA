export function Contact() {
    return (
        <>
            <div>
                <div id="contact-page" className="container">
                    <div className="bg">
                        {/* <div className="row">
                            <div className="col-sm-12">
                                <h2 className="title text-center">Contact <strong>Us</strong></h2>
                                <div id="gmap" className="contact-map">
                                </div>
                            </div>
                        </div> */}
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="contact-form">
                                    <h2 className="title text-center">Nhập thông tin </h2>
                                    <div className="status alert alert-success" style={{ display: 'none' }} />
                                    <form id="main-contact-form" className="contact-form row" name="contact-form" method="post">
                                        <div className="form-group col-md-6">
                                            <input type="text" name="name" className="form-control" required="required" placeholder="Nhập tên của bạn" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input type="email" name="email" className="form-control" required="required" placeholder="Email" />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <input type="number" name="subject" className="form-control" required="required" placeholder="Nhập số điện thoại" />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <textarea name="message" id="message" required="required" className="form-control" rows={8} placeholder="Để lại tin nhắn của bạn" defaultValue={""} />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <input type="submit" name="submit" className="btn btn-primary pull-right" defaultValue="Submit" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* <div className="col-sm-4">
                                <div className="contact-info">
                                    <h2 className="title text-center">Thông tin liên hệ</h2>
                                    <address>
                                        <p>Nhóm 14 Thực Tập Cơ Sở Ngành</p>
                                        <p>Đại Học Công Nghiệp hà Nội</p>
                                        <p>Nhổn, Bắc Từ Liêm, Hà Nội</p>
                                        <p>Mobile: +84 973 402 957</p>
                                        <p>Fax: 0123456789</p>
                                        <p>Email: hoainam0660@gmail.com</p>
                                    </address>
                                    <div className="social-networks">
                                        <h2 className="title text-center">Mạng Xã Hội</h2>
                                        <ul>
                                            <li>
                                                <a href="https://www.facebook.com"><i className="fa fa-facebook" /></a>
                                            </li>
                                            <li>
                                                <a href="https://x.com"><i className="fa fa-twitter" /></a>
                                            </li>
                                            <li>
                                                <a href="https://www.youtube.com"><i className="fa fa-youtube" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className="row">
                            <div className="col-sm-8">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.4737884515007!2d105.73253187503218!3d21.05373098060188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345457e292d5bf%3A0x20ac91c94d74439a!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2hp4buHcCBIw6AgTuG7mWk!5e0!3m2!1svi!2s!4v1731599586993!5m2!1svi!2s"
                                    width="600"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />

                            </div>
                            <div className="col-sm-4">
                                <div className="contact-info">
                                    <h2 className="title text-center">Thông tin liên hệ</h2>
                                    <address>
                                        <p>Nhóm 12 Phát Triển Dự Án Công Nghệ Thông Tin</p>
                                        <p>Đại Học Công Nghiệp hà Nội</p>
                                        <p>Nhổn, Bắc Từ Liêm, Hà Nội</p>
                                        <p>Mobile: +84 973 402 957</p>
                                        <p>Fax: 0123456789</p>
                                        <p>Email: hoainam0660@gmail.com</p>
                                    </address>
                                    <div className="social-networks">
                                        <h2 className="title text-center">Mạng Xã Hội</h2>
                                        <ul>
                                            <li>
                                                <a href="https://www.facebook.com"><i className="fa fa-facebook" /></a>
                                            </li>
                                            <li>
                                                <a href="https://x.com"><i className="fa fa-twitter" /></a>
                                            </li>
                                            <li>
                                                <a href="https://www.youtube.com"><i className="fa fa-youtube" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/*/#contact-page*/}
            </div>

        </>
    )
}
export default Contact;