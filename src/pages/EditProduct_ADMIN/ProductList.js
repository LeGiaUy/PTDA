import { useEffect, useState } from "react";
import { getProductList } from "../../services/productService";
import DeleteProduct from "./DeleteProduct";
import EditProduct from "./EditProduct";
// import "./Product.scss"

function ProductList(props) {
    const { reload } = props;
    const [data, setData] = useState([]);
    const [editReload, setEditReload] = useState(false);

    const handleReload = () => {
        setEditReload(!editReload);
    };

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getProductList();
            setData(result.reverse());
        };
        fetchApi();
    }, [reload, editReload]);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {data.map(item => (
                <div className="bg-white p-4 border rounded-lg shadow-md hover:shadow-lg transition-all" key={item.id}>
                    <img className="w-full h-56 object-cover rounded-lg mb-4" src={item.image_url} alt={item.description} />
                    <h4 className="text-lg font-semibold text-gray-800 truncate">{item.name}</h4>
                    <p className="text-sm text-gray-500 mb-4">Giá: {item.price}$</p>
                    <div className="flex justify-between">
                        <EditProduct item={item} onReload={handleReload} />
                        <DeleteProduct item={item} onReload={handleReload} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
