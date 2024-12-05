import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateToken } from "../../helpers/generateToken";
import { checkExits, register } from "../../services/userService";

function Register() {
    const navigate = useNavigate();

    const [fullName, setFullName] = useState("");
    const [city, setCity] = useState("");
    const [birth, setBirth] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Kiểm tra số điện thoại đã tồn tại chưa
        const checkExitsPhoneNumber = await checkExits("phone_number", phonenumber);
        if (checkExitsPhoneNumber.length > 0) {
            setError("Số điện thoại đã tồn tại");
            return;
        }

        const options = {
            fullName: fullName,
            phone_number: phonenumber,
            address: city,
            password: password,
            created_at: "CURRENT_TIMESTAMP",
            updated_at: "CURRENT_TIMESTAMP",
            date_of_birth: birth,
            expired: 1,
            role: "user",
            token: generateToken(),
        };

        const response = await register(options);

        if (response) {
            alert("Đăng ký thành công");
            navigate("/login");
        } else {
            alert("Đăng ký thất bại");
        }
    };

    return (
        <section id="form" className="py-12">
            <div className="container mx-auto">
                <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md">
                    <h2 className="text-2xl font-semibold text-center mb-6">Đăng ký tài khoản</h2>

                    {error && <div className="text-red-500 text-center mb-4">{error}</div>}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                type="text"
                                placeholder="Nhập họ và tên"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-700"
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                placeholder="Thành phố đang sống"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-700"
                            />
                        </div>

                        <div>
                            <input
                                type="text"
                                id="date_of_birth"
                                name="date_of_birth"
                                placeholder="dd/mm/yyyy"
                                pattern="\d{2}/\d{2}/\d{4}"
                                value={birth}
                                onChange={(e) => setBirth(e.target.value)}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-700"
                            />
                        </div>

                        <div>
                            <input
                                type="number"
                                placeholder="Nhập số điện thoại"
                                value={phonenumber}
                                onChange={(e) => setPhonenumber(e.target.value)}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-700"
                            />
                        </div>

                        <div>
                            <input
                                type="password"
                                placeholder="Nhập mật khẩu"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-700"
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-cyan-700 text-white rounded-md hover:bg-cyan-900 focus:outline-none focus:ring-2 focus:ring-cyan-700 transition"
                            >
                                Đăng ký
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Register;
