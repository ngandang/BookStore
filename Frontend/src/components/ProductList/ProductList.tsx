import axios from "axios";
import { use, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productAction";
import { addToCart } from "../../redux/actions/cartAction";
import type { Product } from "../../common/models/product";
import { Link } from "react-router-dom";

const ProductList = () => {
  const products = useSelector((state: any) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("http://localhost:5130/api/products")
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
    if (response && response.data) {
      dispatch(setProducts(response.data));
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const renderList = products.map((product: Product) => {
    return (
      <div
        key={product.id}
        className="bg-white rounded shadow p-4 flex flex-col items-center transition-transform duration-200 hover:scale-105"
      >
        <Link
          to={`/products/${product.id}`}
          className="w-full flex flex-col items-center no-underline hover:no-underline focus:no-underline"
          style={{ textDecoration: "none" }}
        >
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-40 h-60 object-cover mb-3 rounded"
          />
          <div className="font-semibold text-center mt-2">{product.name}</div>
          <div className="text-blue-600 font-bold mt-1">${product.price}</div>
          <div className="text-gray-500 text-sm mt-1">{product.category}</div>
        </Link>
        <button
          className="mt-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
      </div>
    );
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-8 md:px-16">
      {renderList.length > 0 ? (
        renderList
      ) : (
        <div className="col-span-3 text-center text-gray-500">
          No products available
        </div>
      )}
    </div>
  );
};

export default ProductList;
