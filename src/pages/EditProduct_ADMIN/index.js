import { useState } from "react";
import CreateProduct from "./CreateProduct";
import ProductList from "./ProductList";

import "./Product.scss";
function EditProduct() {
    const [reload, setReload] = useState(false);
    
    const handleReload = () =>{
        setReload(!reload);
    }
    
    return(
        <div className="md:ml-24">
            <div className="bg-gray-100 mx-12 rounded-xl">
                <h2 className="text-cyan-700 font-semibold text-3xl text-center py-8">Danh sach san pham</h2>
                <CreateProduct onReload={handleReload}/>
                <ProductList reload={reload}/>
            </div>
        </div>
        
    )
}
export default EditProduct;