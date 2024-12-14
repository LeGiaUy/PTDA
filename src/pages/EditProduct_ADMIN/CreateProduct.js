import { useEffect, useState } from "react";
import Modal from 'react-modal';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { getListCategory } from '../../services/categorytService';
import { createProduct } from '../../services/productService';

function CreateProduct(props) {
    const { onReload } = props;
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState({});
    const [dataCategory, setDataCategory] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getListCategory();
            setDataCategory(result);
        };
        fetchApi();
    }, []);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({
            ...data,
            [name]: value,
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

        const result = await createProduct(data);
        if (result) {
            setShowModal(false);
            onReload(); // Reload danh sách sản phẩm
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Tạo mới sản phẩm thành công",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    return (
        <>
            <div className="flex justify-center">
                <button
                    onClick={openModal}
                    className="bg-cyan-700 text-white px-4 py-2 rounded hover:bg-cyan-900 transition"
                >
                    Tạo sản phẩm mới
                </button>
            </div>

            <Modal
                isOpen={showModal}
                onRequestClose={closeModal}
                className="fixed inset-0 flex items-center justify-center"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50"
                ariaHideApp={false}
            >
                <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
                    <h2 className="text-2xl font-bold mb-4 text-center">Tạo Sản Phẩm Mới</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Tên sản phẩm</label>
                            <input
                                type="text"
                                onChange={handleChange}
                                required
                                name="name"
                                className="border rounded w-full px-3 py-2 focus:ring-2 focus:ring-cyan-700 outline-none"
                            />
                        </div>

                        {dataCategory.length > 0 && (
                            <div>
                                <label className="block text-sm font-medium mb-1">Danh mục</label>
                                <select
                                    onChange={handleChange}
                                    name="category_id"
                                    required
                                    className="border rounded w-full px-3 py-2 focus:ring-2 focus:ring-cyan-700 outline-none"
                                >
                                    <option value="">Chọn danh mục</option>
                                    {dataCategory.map((item) => (
                                        <option key={item.id} value={item.id}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium mb-1">Giá</label>
                            <input
                                type="text"
                                onChange={handleChange}
                                name="price"
                                required
                                className="border rounded w-full px-3 py-2 focus:ring-2 focus:ring-cyan-700 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Link ảnh</label>
                            <input
                                type="text"
                                onChange={handleChange}
                                name="image_url"
                                required
                                className="border rounded w-full px-3 py-2 focus:ring-2 focus:ring-cyan-700 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Miêu tả</label>
                            <textarea
                                onChange={handleChange}
                                name="description"
                                required
                                className="border rounded w-full px-3 py-2 focus:ring-2 focus:ring-cyan-700 outline-none"
                            ></textarea>
                        </div>

                        <div className="flex justify-end space-x-4">
                            <button
                                type="button"
                                onClick={closeModal}
                                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
                            >
                                Hủy
                            </button>
                            <button
                                type="submit"
                                className="bg-cyan-700 text-white px-4 py-2 rounded focus:bg-cyan-900 transition"
                            >
                                Tạo mới
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    );
}

export default CreateProduct;
