import { useDispatch, useSelector } from "react-redux";
import { deleteItemAll } from "../../actions/cart";

import CartList from "./CartList";

function Cart() {
    const cart = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();

    // Tính tổng giá trị giỏ hàng
    const total = cart.reduce((sum, item) => {
        const priceNew = item.info.price; // Nếu có chiết khấu, thay thế giá trị này bằng giá sau khi giảm
        return sum + priceNew * item.quantity;
    }, 0).toFixed(2); // Đảm bảo rằng tổng là một số với 2 chữ số thập phân

    // Hàm xóa tất cả sản phẩm trong giỏ hàng
    const handleDeleteAll = () => {
        dispatch(deleteItemAll());
    }

    return (
        <div className="md:ml-24">

            <div className="bg-gray-100 rounded-xl mx-12">
                <div className="text-center container mx-auto py-6">
                    {/* Kiểm tra nếu giỏ hàng có sản phẩm */}
                    <div className="mt-0">
                        {cart.length > 0 ? (
                            <>
                                <CartList />
                                <div className="mt-4 text-lg font-semibold">
                                    Tổng chi phí: <span className="text-cyan-700">{total}$</span>
                                </div>
                            </>
                        ) : (
                            <div className="text-center text-gray-500">Giỏ hàng trống</div>
                        )}
                    </div>

                    {/* Nút xóa tất cả sản phẩm */}
                    <button
                        onClick={handleDeleteAll}
                        className="px-4 py-2 bg-cyan-700 text-white rounded-md hover:bg-cyan-900 transition my-8"
                    >
                        Xóa tất cả
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
