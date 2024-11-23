import CreateProduct from "./CreateProduct";
import ProductList from "./ProductList";
import { useState } from "react";

import "./Product.scss"
function EditProduct() {
    const [reload, setReload] = useState(false);
    
    const handleReload = () =>{
        setReload(!reload);
    }
    
    return(
        <>
            <h2>Danh sach san pham</h2>
            <CreateProduct onReload={handleReload}/>
            <ProductList reload={reload}/>
        </>
    )
}
export default EditProduct;