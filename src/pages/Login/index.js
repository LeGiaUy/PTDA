import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkLogin } from "../../actions/login";
import { setCookie } from "../../helpers/cookie";
import { login } from "../../services/userService";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [phonenumber, setPhonenumber] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await login(phonenumber, password);

        if (response.length > 0) {
            setCookie("id", response[0].id, 1);
            setCookie("fullName", response[0].fullName, 1);
            setCookie("phone_number", response[0].phone_number, 1);
            setCookie("token", response[0].token, 1);
            dispatch(checkLogin(true));
            navigate("/");
        } else {
            setError("Nhập lại tài khoản hoặc mật khẩu");
        }
    };

    return (
        <section id="form" className="py-12">
            <div className="container mx-auto">
                <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md">
                    <h2 className="text-2xl font-semibold text-center mb-6">Đăng nhập</h2>

                    {error && <div className="text-red-500 text-center mb-4">{error}</div>}

                    <form onSubmit={handleSubmit} className="space-y-4">
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

                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                className="h-4 w-4 text-cyan-700 border-gray-300 rounded"
                            />
                            <label htmlFor="rememberMe" className="text-sm text-gray-600">
                                Keep me signed in
                            </label>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-cyan-700 text-white rounded-md hover:bg-cyan-900 focus:outline-none focus:ring-2 focus:ring-cyan-700 transition"
                            >
                                Đăng nhập
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Login;
