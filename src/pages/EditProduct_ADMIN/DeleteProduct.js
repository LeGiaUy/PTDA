import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { deleteProduct } from '../../services/productService';
function DeleteProduct(props) {
    const { item, onReload } = props;

    const deleteItem = async () => {
        
        const result =await deleteProduct(item.id)
        if(result){
            onReload(); // Gọi lại hàm reload khi xóa thành công
            Swal.fire({
                title: "Đã xóa",
                text: "Sản phẩm đã được xóa thành công",
                icon: "success"
            });
        }
        

    }
    const handleDelete = () => {
        Swal.fire({
            title: "Bạn có chắc muốn xóa không?",
            text: "Nếu bạn xóa bạn sẽ không thể khôi phục lại được !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Hủy ",
            confirmButtonText: "Vẫn xóa !"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteItem();
            }
        });
    }
    return (
        <>
            <button onClick={handleDelete}>Delete</button>
        </>
    )
}
export default DeleteProduct;