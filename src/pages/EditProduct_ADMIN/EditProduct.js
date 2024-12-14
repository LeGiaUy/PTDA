import { useEffect, useState } from "react";
import Modal from 'react-modal';
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

        const result = await editProduct(item.id, data)
        if (result) {
            setShowModal(false);
            onReload(); // Tải lại danh sách sản phẩm
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Cập nhật sản phẩm thành công",
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    return (
        <>
            <button
                onClick={openModal}
                className="px-4 py-2 bg-cyan-700 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
                Chỉnh sửa
            </button>

            <Modal
                isOpen={showModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Chỉnh sửa sản phẩm"
            >
                <form onSubmit={handleSubmit} className="space-y-4">
                    <table className="w-full">
                        <tbody>
                            <tr>
                                <td className="py-2 font-semibold">Tên sản phẩm</td>
                                <td>
                                    <input
                                        value={data.name}
                                        type="text"
                                        onChange={handleChange}
                                        required
                                        name="name"
                                        className="border border-gray-300 p-2 w-full rounded-lg"
                                    />
                                </td>
                            </tr>

                            {dataCategory.length > 0 && (
                                <tr>
                                    <td className="py-2 font-semibold">Danh mục</td>
                                    <td>
                                        <select
                                            value={data.category_id}
                                            onChange={handleChange}
                                            name="category_id"
                                            required
                                            className="border border-gray-300 p-2 w-full rounded-lg"
                                        >
                                            <option value="">Chọn danh mục</option>
                                            {dataCategory.map((item) => (
                                                <option key={item.id} value={item.id}>
                                                    {item.name}
                                                </option>
                                            ))}
                                        </select>
                                    </td>
                                </tr>
                            )}

                            <tr>
                                <td className="py-2 font-semibold">Giá</td>
                                <td>
                                    <input
                                        value={data.price}
                                        type="text"
                                        onChange={handleChange}
                                        name="price"
                                        required
                                        className="border border-gray-300 p-2 w-full rounded-lg"
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className="py-2 font-semibold">Link ảnh</td>
                                <td>
                                    <input
                                        value={data.image_url}
                                        onChange={handleChange}
                                        required
                                        type="text"
                                        name="image_url"
                                        className="border border-gray-300 p-2 w-full rounded-lg"
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className="py-2 font-semibold">Miêu tả</td>
                                <td>
                                    <textarea
                                        value={data.description}
                                        required
                                        onChange={handleChange}
                                        name="description"
                                        className="border border-gray-300 p-2 w-full rounded-lg"
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <button
                                        onClick={closeModal}
                                        className="px-4 py-2 bg-gray-400 text-white font-semibold rounded-lg shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                                    >
                                        Hủy
                                    </button>
                                </td>
                                <td>
                                    <input
                                        type="submit"
                                        value="Chỉnh sửa"
                                        className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                                    />
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
