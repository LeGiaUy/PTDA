import Modal from 'react-modal';
import { useEffect, useState } from "react";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { getListCategory } from '../../services/categorytService';
import { editProduct } from '../../services/productService';

function EditProduct(props) {
    const { onReload, item } = props;
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState(item);
    const [dataCategory, setDataCategory] = useState([]);



    useEffect(() => {
        const fetchApi = async () => {
            const result = await getListCategory();
            setDataCategory(result);
        };
        fetchApi();
    }, []);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({
            ...data,
            [name]: value
        });
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const openModal = () => {
        setShowModal(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Kiểm tra dữ liệu trước khi gửi
        // console.log(data);
       
        const result = await editProduct(item.id, data)
        if (result) {
            setShowModal(false);
            onReload(); // Tải lại danh sách sản phẩm
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Cập nhập sản phẩm thành công",
                showConfirmButton: false,
                timer: 1500
            });
        }

    };

    return (
        <>
            <button onClick={openModal}>Chỉnh sửa</button>

            <Modal
                isOpen={showModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>Tên sản phẩm</td>
                                <td>
                                    <input value={data.name} type='text' onChange={handleChange} required name='name' style={{ border: "1px solid #000000", padding: "3px", width: "100%" }} />
                                </td>
                            </tr>
                            {dataCategory.length > 0 && (
                                <tr>
                                    <td>Danh mục</td>
                                    <td>
                                        <select value={data.category_id} onChange={handleChange} style={{ border: "1px solid #000000", padding: "2px", width: "100%" }} name='category_id' required>
                                            <option value="">Chọn danh mục</option>
                                            {dataCategory.map((item) => (
                                                <option key={item.id} value={item.id}>{item.name}</option>
                                            ))}
                                        </select>
                                    </td>
                                </tr>
                            )}
                            <tr>
                                <td>Giá</td>
                                <td>
                                    <input value={data.price} type='text' onChange={handleChange} name='price' required style={{ border: "1px solid #000000", padding: "3px", width: "100%" }} />
                                </td>
                            </tr>
                            <tr>
                                <td>Link ảnh</td>
                                <td>
                                    <input value={data.image_url} onChange={handleChange} required type='text' name='image_url' style={{ border: "1px solid #000000", padding: "3px", width: "100%" }} />
                                </td>
                            </tr>
                            <tr>
                                <td>Miêu tả</td>
                                <td>
                                    <textarea value={data.description} required onChange={handleChange} name='description' style={{ border: "1px solid #000000", padding: "3px", width: "100%" }} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button onClick={closeModal}>
                                        Hủy
                                    </button>
                                </td>
                                <td>
                                    <input type='submit' value="Chỉnh sửa" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </Modal>
        </>
    );
}

export default EditProduct;
