import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import type { Product } from "../../common/models/product";
import {
  removeSelectedProduct,
  selectedProduct,
} from "../../redux/actions/productAction";
import { useEffect } from "react";
import axios from "axios";

const ProductDetail = () => {
  const productId = useParams();

  let product: Product = useSelector((state) => state.product);

  const dispatch = useDispatch();
  const fetchProductDetail = async (id: number) => {
    const response = await axios
      .get(`http://localhost:5130/api/products/${id}`)
      .catch((error: any) => {
        console.error("Error fetching product details:", error);
      });
    if (response && response.data) {
      dispatch(selectedProduct(response.data));
    }
  };

  useEffect(() => {
    if (productId && productId !== undefined) {
      fetchProductDetail(Number(productId.productId));
    }
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div className="text-center text-gray-500">
          No product details available
        </div>
      ) : (
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-1">
              <div className="w-full max-w-xs mx-auto flex items-center justify-center">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
              <div className="text-blue-600 font-bold text-2xl mb-2">
                ${product.price}
              </div>
              <div className="text-gray-500 text-base mb-4">
                {product.category}
              </div>
              <p className="text-gray-700 mb-6">{product.description}</p>
              {/* Add more product info here if needed */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
