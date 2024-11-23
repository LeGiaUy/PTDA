import { useDispatch, useSelector } from "react-redux";
import CartList from "./CartList";
import "./Cart.scss"
import { deleteItemAll } from "../../actions/cart";

function Cart() {

    const cart = useSelector(state => state.cartReducer)
    console.log(cart);
    
    // const total = cart.reduce((sum,item) => {
    //     const priceNew=(item.info.price - item.info.price * item.info.discountPercentage / 100).toFixed(0)
    //     return sum+priceNew*item.quantity
    // },0)
    const total = cart.reduce((sum,item) => {
        const priceNew=(item.info.price-0).toFixed(2)
        return sum+priceNew*item.quantity
    },0)
    // const total = cart.reduce((sum, item) => {
    //     const priceNew = item.info.price
    //     return (sum + priceNew * item.quantity).toFixed(2);
    // }, 0)
    const dispatch = useDispatch();
    const handleDeleteAll = () => {
        dispatch(deleteItemAll())
    }
    return (
        <>
            {/* <h2>Gio hang</h2> */}
            <button onClick={handleDeleteAll}>Xóa tất cả</button>
            <div>
                {cart.length > 0 ? (
                    <>
                        <CartList />
                        <div className="cart__total">
                            Tổng chi phí:<span>{total}$</span>
                        </div>
                    </>
                ) :
                    (
                        <div>Giỏ hàng trống</div>
                    )}
            </div>

        </>
    )
}
export default Cart;

