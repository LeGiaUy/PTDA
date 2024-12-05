import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";

function CartMini() {
    // Lấy ra giỏ hàng từ Redux
    const cart = useSelector(state => state.cartReducer);
    
    // Tính tổng số lượng sản phẩm trong giỏ hàng
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    return (
        <NavLink to="/cart" className="relative flex items-center text-gray-700 hover:text-cyan-700">
            <FaShoppingCart className="text-2xl mr-2" />
            {total > 0 && (
                <span className="absolute top-[-5px] right-[-8px] bg-cyan-700 text-white text-xs rounded-full px-2 py-1">
                    {total}
                </span>
            )}
        </NavLink>
    );
}

export default CartMini;
