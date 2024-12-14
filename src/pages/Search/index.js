import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "../../actions/cart";
import { getProductList } from "../../services/productService";

function SearchComponent() {
    const [query, setQuery] = useState(""); // Lưu trữ giá trị tìm kiếm
    const [results, setResults] = useState([]); // Lưu trữ kết quả tìm kiếm
    const [filteredResults, setFilteredResults] = useState([]); // Lưu trữ kết quả đã lọc

    // Lấy dữ liệu từ Mock API
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const response = await getProductList();
                setResults(response); // Nếu API trả về đúng array
            } catch (error) {
                console.error("Lỗi khi lấy danh sách sản phẩm:", error);
            }
        };
        fetchApi();
    }, []);

    // Hàm xử lý khi bấm vào nút tìm kiếm
    const handleSearch = () => {
        // Lọc kết quả theo query khi bấm nút "Tìm"
        const filtered = results.filter(
            (products) =>
                products.name && products.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredResults(filtered);
    };

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartReducer);

    const handleAddToCard = (product) => {
        if (cart.some(itemCart => itemCart.id === product.id)) {
            dispatch(updateQuantity(product.id));
            console.log("Sản phẩm đã được cập nhật trong giỏ hàng");
        } else {
            dispatch(addToCart(product.id, product));
            console.log("Sản phẩm đã được thêm vào giỏ hàng");
        }
    };

    return (
        <div className="container mx-auto p-12 md:ml-12">
            <div className="flex items-center mb-6">
                <input
                    type="text"
                    placeholder="Tìm kiếm sản phẩm..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)} // Lưu giá trị tìm kiếm
                    className="p-2 w-full border border-gray-300 rounded-md"
                />
                <button
                    onClick={handleSearch} // Gọi hàm handleSearch khi bấm vào nút
                    className="ml-4 px-4 py-2 bg-cyan-700 text-white rounded-md hover:bg-cyan-900 transition"
                >
                    Tìm
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredResults.length > 0 ? (
                    filteredResults.map((product) => (
                        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center" key={product.id}>
                            <div className="w-full h-64 mb-4">
                                <img
                                    className="w-full h-full object-cover rounded-md"
                                    src={product.image_url}
                                    alt={product.name}
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                            <div className="text-xl font-bold text-[#1A899D] mb-4">{product.price}$</div>
                            <button
                                onClick={() => handleAddToCard(product)}
                                className="w-full bg-[#1A899D] text-white py-2 px-4 rounded-md hover:bg-[#136D7B] transition"
                            >
                                <i className="fa fa-shopping-cart mr-2"></i> Thêm vào giỏ hàng
                            </button>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-500">Không tìm thấy sản phẩm nào!</div>
                )}
            </div>
        </div>
    );
}

export default SearchComponent;
