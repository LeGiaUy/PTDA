import { useEffect, useState } from "react";
import { getProductList } from "../../services/productService";
import ProductItem from "./productItem";

export function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getProductList();
      setData(response);
    };
    fetchApi();
  }, []);

  return (
    <div className="md:ml-24">
      

      {data.length > 0 && (
        <div className="bg-gray-100 mx-12 rounded-xl">
          <h2 className="text-cyan-700 font-semibold text-3xl text-center py-8">
            DANH SÁCH SẢN PHẨM
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-12 py-8">
            {data.map((item) => (
              <ProductItem key={item.id} item={item} />
            ))}
          </div>
        </div>
        
      )}
    </div>
  );
}

export default Products;
