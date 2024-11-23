import { useDispatch } from "react-redux";
import { updateQuantity, deleteItem } from '../../actions/cart';
import { useRef } from "react";

function CartItem(props) {
    const { item } = props;
    const inputRef = useRef();
    const dispatch = useDispatch();
    const handleUp = () => {
        dispatch(updateQuantity(item.id))
        inputRef.current.value = parseInt(inputRef.current.value) + 1
    }
    const handleDown = () => {
        if (item.quantity > 1) {
            dispatch(updateQuantity(item.id, -1))
            inputRef.current.value = parseInt(inputRef.current.value) - 1
        }
    }
    const handleDelete = () => {
        dispatch(deleteItem(item.id))
    }

    return (
        <>
            {/* <div className="cart__item" key={item.id}>
                <div className="cart__image">
                    <img src={item.info.image_url} alt={item.info.name} />
                </div>
                <div className="cart__content">
                    <h4 className=" cart__title">{item.info.name}</h4>
                    <h4 className=" cart__price-new">{item.info.price}$</h4>
                </div>
                <div className="cart__quantity">
                    <button onClick={handleDown}>-</button>
                    <input ref={inputRef} value={item.quantity} />
                    <button onClick={handleUp}>+</button>
                </div>
                <button onClick={handleDelete}>Xoa</button>
            </div> */}
            <section id="cart_items">
                <div className="container">
                    {/* <div className="breadcrumbs">
                        <ol className="breadcrumb">
                            <li><a href="#">Home</a></li>
                            <li className="active">Cart</li>
                        </ol>
                    </div> */}
                    <div className="table-responsive cart_info" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <table className="table table-condensed" >
                            <thead>
                                <tr className="cart_menu">
                                    <td className="image">Sản phẩm</td>
                                    <td className="description" />
                                    <td className="price">Giá</td>
                                    <td className="quantity">Số lượng</td>
                                    <td className="total">Tổng tiền</td>
                                    <td />
                                </tr>
                            </thead>
                            <tbody>
                                
                                    <tr>
                                        <td className="cart_product">
                                            <a href><img style={{ width: '100px', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }} src={item.info.image_url} alt /></a>
                                        </td>
                                        <td className="cart_description">
                                            <h4><a style={{marginLeft:'20px'}} href>{item.info.name}</a></h4>
                                        </td>
                                        <td className="cart_price">
                                            {item.info.price}$
                                        </td>
                                        <td className="cart_quantity">
                                            <div className="cart_quantity_button">
                                                <a className="cart_quantity_up" href> <button onClick={handleUp}>+</button> </a>
                                                <input className="cart_quantity_input" ref={inputRef} value={item.quantity} />
                                                <a className="cart_quantity_down" href> <button onClick={handleDown}>-</button> </a>
                                            </div>
                                        </td>
                                        <td className="cart_total">
                                            <p className="cart_total_price" style={{ color: 'white' }}> {(item.quantity * item.info.price).toFixed(2)}$</p>
                                        </td>
                                        <td className="cart_delete">
                                            <button  className="cart_quantity_delete" onClick={handleDelete} >Xóa sản phẩm</button>
                                        </td>
                                    </tr>
                                

                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

        </>
    )
}
export default CartItem;