export function Contact() {
    return (
        <div className="md:ml-24">
            <div className="container mx-auto m-6 ">
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="contact-form">
                                <h2 className="text-cyan-700 text-center text-2xl font-semibold mb-6">Nhập thông tin</h2>
                                <div className="status alert alert-success hidden" />
                                <form
                                    id="main-contact-form"
                                    className="contact-form space-y-6"
                                    name="contact-form"
                                    method="post"
                                >
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control w-full p-3 border border-gray-300 rounded-md"
                                            required="required"
                                            placeholder="Nhập tên của bạn"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control w-full p-3 border border-gray-300 rounded-md"
                                            required="required"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="number"
                                            name="subject"
                                            className="form-control w-full p-3 border border-gray-300 rounded-md"
                                            required="required"
                                            placeholder="Nhập số điện thoại"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            name="message"
                                            id="message"
                                            required="required"
                                            className="form-control w-full p-3 border border-gray-300 rounded-md"
                                            rows={8}
                                            placeholder="Để lại tin nhắn của bạn"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="submit"
                                            name="submit"
                                            className="btn bg-cyan-700 text-white py-2 px-4 rounded-md hover:bg-cyan-900"
                                            defaultValue="Submit"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-8">
                        <div className="col-sm-8">
                            <iframe
                                title="Bản đồ trường Đại học Công nghiệp Hà Nội"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.4737884515007!2d105.73253187503218!3d21.05373098060188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345457e292d5bf%3A0x20ac91c94d74439a!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2hp4buHcCBIw6AgTuG7mWk!5e0!3m2!1svi!2s!4v1731599586993!5m2!1svi!2s"
                                width="600"
                                height="450"
                                className="w-full h-full border-0"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
