import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { deleteProduct } from '../../services/productService';

function DeleteProduct(props) {
    const { item, onReload } = props;

    const deleteItem = async () => {
        const result = await deleteProduct(item.id);
        if (result) {
            onReload(); // Call reload function after successful deletion
            Swal.fire({
                title: "Đã xóa",
                text: "Sản phẩm đã được xóa thành công",
                icon: "success",
                confirmButtonText: 'OK',
                confirmButtonColor: '#3085d6',
            });
        }
    };

    const handleDelete = () => {
        Swal.fire({
            title: "Bạn có chắc muốn xóa không?",
            text: "Nếu bạn xóa bạn sẽ không thể khôi phục lại được !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Hủy",
            confirmButtonText: "Vẫn xóa !"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteItem();
            }
        });
    };

    return (
        <>
            <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
                Xóa sản phẩm
            </button>
        </>
    );
}

export default DeleteProduct;
