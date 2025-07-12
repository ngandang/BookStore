import Button from "../Button";
import "./Header.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartCount = useSelector((state: any) =>
    state.cart.cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0)
  );
  return (
    <div className="flex center items-center justify-between border-1 border-solid border-gray-300">
      <div className="flex items-center gap-2">
        <img src="/images/logo.png" alt="Logo" className="logo" />
        <div className="menu">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link active" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Help
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-6 px-3">
        <Link to="/cart" className="relative cursor-pointer">
          <span className="material-symbols-outlined text-3xl text-orange-500">
            shopping_cart
          </span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
              {cartCount}
            </span>
          )}
        </Link>
        <Button
          label="Login"
          onClick={() => alert("Button clicked!")}
          color="outline-primary"
        ></Button>
      </div>
    </div>
  );
};

export default Header;
