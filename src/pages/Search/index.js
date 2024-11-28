import React, { useState, useEffect } from "react";
import { getProductList } from "../../services/productService";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToCart, updateQuantity } from "../../actions/cart";
import "./style.scss"
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
    const dispatch = useDispatch();;
    const cart = useSelector(state => state.cartReducer);

    const handleAddToCard = () => {
        if (cart.some(itemCart => itemCart.id === filteredResults.id)) {
            dispatch(updateQuantity(filteredResults.id))
            console.log("update");

        }
        else {
            dispatch(addToCart(filteredResults.id, filteredResults))
        }


    }
    return (
        <div>
            <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                value={query}
                onChange={(e) => setQuery(e.target.value)} // Lưu giá trị tìm kiếm
            />
            <button
                style={{ width: "50px", height: "36px", border: "0", borderRadius: "10px", marginLeft: "20px" }}
                onClick={handleSearch} // Gọi hàm handleSearch khi bấm vào nút
            >
                Tìm
            </button>
            <div className="product">
                {filteredResults.length > 0 ? (
                    filteredResults.map((product) => (
                        <div className="product__item" key={product.id}>
                            <div className="product__image">
                                <img src={product.image_url} alt={product.name} />
                            </div>
                            <h3 className="product__title">{product.name}</h3>
                            <div className="product__price">Giá: {product.price}$</div>
                            <div className="product__button">
                                <button onClick={() => handleAddToCard(product)}>
                                    <i className="fa fa-shopping-cart"></i> Thêm vào giỏ hàng
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>Không tìm thấy sản phẩm nào!</div>
                )}
            </div>

        </div>
    );
}

export default SearchComponent;
