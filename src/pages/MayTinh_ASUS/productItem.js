import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "../../actions/cart";

function ProductItem({ item }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer);

  // State để hiển thị thông báo thêm vào giỏ hàng thành công
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddToCart = () => {
    if (cart.some((itemCart) => itemCart.id === item.id)) {
      dispatch(updateQuantity(item.id));
    } else {
      dispatch(addToCart(item.id, item));
    }

    // Hiển thị thông báo thành công
    setShowSuccess(true);
  };

  // Ẩn thông báo sau 2 giây
  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 2000);

      // Cleanup timer khi component bị unmount hoặc trạng thái thay đổi
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  return (
    <>
      {item.category_id === 1 && item.company === "Asus" &&(
        <div className="bg-white rounded-lg shadow-md overflow-hidden relative flex flex-col">
          <img
            className="w-full h-40 object-contain"
            src={item.image_url}
            alt={item.name}
          />
          <div className="flex-1 p-4 flex flex-col justify-between">
            <h3 className="text-xl font-semibold text-gray-800 line-clamp-2">{item.name}</h3>
            <p className="text-lg text-[#1A899D] font-bold">{item.price} $</p>
    
            {/* Thông báo thành công */}
            <div
              className={`${
                showSuccess ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              } transition-all duration-300 absolute bottom-16 left-0 w-full text-center text-white bg-green-500 py-4 rounded-md`}
            >
              Thêm vào giỏ hàng thành công!
            </div>
    
            {/* Nút Thêm vào giỏ hàng */}
            <button
              className="mt-4 w-full bg-[#1A899D] text-white py-2 px-4 rounded-md hover:bg-[#136D7B] transition duration-200"
              onClick={handleAddToCart}
            >
              <i className="fa fa-shopping-cart mr-2"></i> Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductItem;
