import { useNavigate } from "react-router-dom";
import { setCookie } from "../../helpers/cookie";
import { login } from "../../services/userService";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../actions/login";

function Login() {
    const navigate = useNavigate();
    const dispactch = useDispatch()
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(e.target[0].value);
        const phonenumber = e.target[0].value
        const password = e.target[1].value
        console.log(e.target[1].value);

        const response = await login(phonenumber, password)
        console.log(response);

        if (response.length > 0) {
            setCookie("id", response[0].id, 1);
            setCookie("fullName", response[0].fullName, 1);
            setCookie("phone_number", response[0].phone_number, 1);
            setCookie("token", response[0].token, 1);
            dispactch(checkLogin(true))
            navigate("/")
        }
        else {
            alert("Nhập lại tài khoản hoặc mật khẩu")
        }
    }
    return (
        <>
            {/* <form onSubmit={handleSubmit}>
                <h2>LOGIN</h2>
                <div>
                    <input type="number" placeholder="Nhap so dien thoai" />
                </div>
                <div>
                    <input type="password" placeholder="Nhap mat khau" />
                </div>
                <button type="submit" >Login</button>
            </form> */}
            <section id="form" onSubmit={handleSubmit}>
                <div class="row">
                    <div class="col-sm-4 col-sm-offset-1">
                        <div class="login-form">
                            <h2>Đăng nhập</h2>
                            <form action="#">
                                <input type="number" placeholder="Nhập số điện thoại" />
                                <input type="password" placeholder="Nhập mật khẩu" />
                                <span>
                                    <input type="checkbox" class="checkbox" />
                                        Keep me signed in
                                </span>
                                <button type="submit" class="btn btn-default">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Login;