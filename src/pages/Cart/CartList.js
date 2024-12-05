import { useSelector } from "react-redux";

import CartItem from "./CartItem";

function CartList() {
    const cart = useSelector(state => state.cartReducer);

    return (
        <div className="cart-list mt-6">
            {cart.length > 0 ? (
                cart.map(item => (
                    <CartItem key={item.id} item={item} />
                ))
            ) : (
                <div className="text-center text-gray-500">Giỏ hàng trống</div>
            )}
        </div>
    );
}

export default CartList;
