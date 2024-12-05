import { useRef } from "react";
import { useDispatch } from "react-redux";
import { deleteItem, updateQuantity } from '../../actions/cart';

function CartItem(props) {
    const { item } = props;
    const inputRef = useRef();
    const dispatch = useDispatch();

    const handleUp = () => {
        dispatch(updateQuantity(item.id));
        inputRef.current.value = parseInt(inputRef.current.value) + 1;
    }

    const handleDown = () => {
        if (item.quantity > 1) {
            dispatch(updateQuantity(item.id, -1));
            inputRef.current.value = parseInt(inputRef.current.value) - 1;
        }
    }

    const handleDelete = () => {
        dispatch(deleteItem(item.id));
    }

    return (
        <section id="cart_items" className="py-6">
            <div className="container mx-auto">
                <div className="table-responsive cart_info">
                    <table className="table table-condensed w-full">
                        <thead>
                            <tr className="cart_menu bg-gray-100">
                                <th className="image">Sản phẩm</th>
                                <th className="description">Mô tả</th>
                                <th className="price">Giá</th>
                                <th className="quantity">Số lượng</th>
                                <th className="total">Tổng tiền</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t border-b">
                                <td className="cart_product p-4">
                                    <a href="#">
                                        <img src={item.info.image_url} alt={item.info.name} className="w-24 h-auto mx-auto" />
                                    </a>
                                </td>
                                <td className="cart_description p-4">
                                    <h4><a href="#" className="ml-4">{item.info.name}</a></h4>
                                </td>
                                <td className="cart_price p-4">
                                    {item.info.price}$
                                </td>
                                <td className="cart_quantity p-4">
                                    <div className="flex items-center space-x-2 lg:pl-12 lg:ml-24">
                                        <button 
                                            onClick={handleDown} 
                                            className="px-2 py-1 bg-cyan-700 text-white rounded-full hover:bg-cyan-900 transition"
                                        >
                                            -
                                        </button>
                                        <input 
                                            ref={inputRef} 
                                            value={item.quantity} 
                                            className="w-12 text-center border border-gray-300 p-1 rounded"
                                            readOnly
                                        />
                                        <button 
                                            onClick={handleUp} 
                                            className="px-2 py-1 bg-cyan-700 text-white rounded-full hover:bg-cyan-900 transition"
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td className="cart_total p-4">
                                    <p className="cart_total_price text-cyan-700">
                                        {(item.quantity * item.info.price).toFixed(2)}$
                                    </p>
                                </td>
                                <td className="cart_delete p-4">
                                    <button 
                                        onClick={handleDelete} 
                                        className="bg-cyan-700 text-white py-1 px-4 rounded-full hover:bg-cyan-900 transition"
                                    >
                                        Xóa sản phẩm
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default CartItem;
