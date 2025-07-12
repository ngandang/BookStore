import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MainLayout from "./layouts/MainLayout/MainLayout";
import ProductDetail from "./pages/ProductDetails/ProductDetail";
import CartPage from "./pages/Cart/CartPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route
            path="/products/:productId"
            element={<ProductDetail />}
          ></Route>
          <Route path="/about" element={<div>About</div>}></Route>
          <Route path="/contact" element={<div>Contact</div>}></Route>
          <Route path="/help" element={<div>Help</div>}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="*" element={<div>404 Not Found</div>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
