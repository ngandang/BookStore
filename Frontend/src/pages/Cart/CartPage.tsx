import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../../redux/actions/cartAction";
import { Link } from "react-router-dom";

const CartPage = () => {
  const cartItems = useSelector((state: any) => state.cart.cartItems);
  const dispatch = useDispatch();

  const total = cartItems.reduce(
    (sum: number, item: any) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <img
            src="/images/shopping_cart_off.webp"
            alt="Empty Cart"
            className="mx-auto mb-4 w-60 h-60 object-contain"
          />
          <div className="text-center text-red-500 text-2xl">
            Your cart is empty.
          </div>
          <div className="text-center mt-12">
            <Link
              to="/home"
              style={{ textDecoration: "none" }}
              className="px-4 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-6 mb-8">
            {cartItems.map((item: any) => (
              <div
                key={item.id}
                className="flex items-center gap-6 bg-white rounded shadow p-4"
              >
                <Link to={`/products/${item.id}`}>
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-24 h-36 object-contain rounded"
                  />
                </Link>
                <div className="flex-1">
                  <div className="font-semibold text-lg">{item.name}</div>
                  <div className="text-gray-500 text-sm mb-2">
                    {item.category}
                  </div>
                  <div className="text-blue-600 font-bold">${item.price}</div>
                  <div className="text-sm">Quantity: {item.quantity}</div>
                </div>
                <button
                  className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center border-t pt-4">
            <div className="text-xl font-bold">Total: ${total.toFixed(2)}</div>
            <button
              className="px-6 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
