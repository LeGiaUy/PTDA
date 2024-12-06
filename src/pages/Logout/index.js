import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkLogin } from "../../actions/login";
import { deleteAllCookies } from "../../helpers/cookie";

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    deleteAllCookies();
    dispatch(checkLogin(false));
    navigate("/login");
  }, [dispatch, navigate]);

  return null;
}

export default Logout;
