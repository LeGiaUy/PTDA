
import { useEffect, useState } from "react";
import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";
import { getProductList } from "../../services/productService";
// import "./Product.scss"
// de ve ra giao dien
function ProductList(props) {
    const {reload} =props;
    const [data,setData] = useState([]);  
    const [editReload,setEditReload] = useState(false)
    const handleReload = () =>{
        setEditReload(!editReload)
    }
    useEffect(() =>{
        const fetchApi = async () =>{
            const result=  await getProductList();
            setData(result.reverse());
        }
        fetchApi()
    },[reload,editReload])
    // console.log(data);
    return(
        <>
            <div className="product">
                {data.map(item => (
                    <div className="product__item" key={item.id}> 
                        <img className="product__img" src={item.image_url} alt={item.description} />
                        <h4 className="product__title">Tên: {item.name}</h4>
                        <p className="product__price">Giá: {item.price}$</p>
                        <EditProduct item={item} onReload={handleReload}/>
                        <DeleteProduct item={item} onReload={handleReload}/>
                    </div>
                ))}
            </div>
        </>
    )
}
export default ProductList;