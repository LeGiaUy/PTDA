import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./productItem"; // Import component ProductItem

function Home() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer);

  const products = [
    {
      id: 1,
      name: "iPhone 13 Pro Max",
      image_url: "images/home/13ProMax.jpg",
      price: 1400,
      category_id: 1,
    },
    {
      id: 2,
      name: "Samsung Galaxy Note 20",
      image_url: "images/home/GalaxyNote20.webp",
      price: 1300,
      category_id: 1,
    },
    {
      id: 3,
      name: "ASUS TUF Gaming F15",
      image_url: "images/home/TUF.png",
      price: 1200,
      category_id: 1,
    },
    {
      id: 4,
      name: "ASUS Rog ROG Zephyrus G14",
      image_url: "images/home/G14.png",
      price: 2200,
      category_id: 1,
    },
    {
      id: 5,
      name: "OPPO Reno 5",
      image_url: "images/home/Reno5.jpg",
      price: 700,
      category_id: 1,
    },
	{
		id: 1,
		name: "iPhone 13 Pro Max",
		image_url: "images/home/13ProMax.jpg",
		price: 1400,
		category_id: 1,
	  },
	  {
		id: 2,
		name: "Samsung Galaxy Note 20",
		image_url: "images/home/GalaxyNote20.webp",
		price: 1300,
		category_id: 1,
	  },
	  {
		id: 3,
		name: "ASUS TUF Gaming F15",
		image_url: "images/home/TUF.png",
		price: 1200,
		category_id: 1,
	  },
	  {
		id: 4,
		name: "ASUS Rog ROG Zephyrus G14",
		image_url: "images/home/G14.png",
		price: 2200,
		category_id: 1,
	  },
	  {
		id: 5,
		name: "OPPO Reno 5",
		image_url: "images/home/Reno5.jpg",
		price: 700,
		category_id: 1,
	  },
  ];

  return (
    <div className="md:ml-24">
      <section className="bg-gray-100 mx-12 rounded-xl">
        <div className="container mx-auto px-4">
          <h2 className="text-cyan-700 font-semibold text-3xl text-center py-8">SẢN PHẨM NỔI BẬT</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {products.map((product) => (
              <ProductItem key={product.id} item={product} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
