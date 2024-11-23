import { Navigate, useNavigate } from "react-router-dom";
import { checkExits, register } from "../../services/userService";
import { generateToken } from "../../helpers/generateToken";
import { useEffect } from "react";

function Register() {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const fullName = e.target[0].value;
        const city = e.target[1].value;
        const phonenumber = e.target[2].value;
        const password = e.target[3].value;

        const checkExitsPhoneNumber = await checkExits("phone_number", phonenumber)
        console.log(checkExitsPhoneNumber);

        if (checkExitsPhoneNumber.length > 0) {
            alert("Số điện thoại đã tồn tại")
        }
        else {
            const options = {
                fullName: fullName,
                city: city,
                phonenumber: phonenumber,
                password: password,
                token: generateToken()
            }
            const response = await register(options)
            
            if (response) {
                navigate("/login")
            }
            else {
                alert("Dang ky that bai")
            }
            
        }
    }
   
    return (
        <>
            {/* <form onSubmit={handleSubmit}>
           <h2>LOGIN</h2>
           <div>
                <input type="text" placeholder="Nhập họ và tên"/>
           </div>
           <div>
                <input type="text" placeholder="Thành phố đang sống"/>
           </div>
           <div>
               <input type="number" placeholder="Nhập số điện thoại " />
           </div>
           <div>
               <input type="password" placeholder="Nhập mật khẩu" />
           </div>

           <button type="submit" >Login</button>
       </form> */}
            <section id="form" onSubmit={handleSubmit}>{/*form*/}
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="signup-form">{/*sign up form*/}
                                <h2>Đăng ký tài khoản</h2>
                                <form action="#">
                                    <input type="text" placeholder="Nhập họ và tên" />
                                    <input type="text" placeholder="Thành phố đang sống" />
                                    <input type="number" placeholder="Nhập số điện thoại" />
                                    <input type="password" placeholder="Nhập mật khẩu" />
                                    <button type="submit" className="btn btn-default">Đăng ký</button>
                                </form>
                            </div>{/*/sign up form*/}
                        </div>
                    </div>
                </div>
            </section>{/*/form*/}

        </>
    )
}

export default Register;