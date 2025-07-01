import ProductList from "../../components/ProductList/ProductList";
import Banner from "./Banner/Banner";
import { fetchProducts } from "../../store/productsSlice";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="mt-[40px]">
        <h2 className="text-xl font-bold mb-2 text-center">Best Seller</h2>
        <p className="mb-6 text-center">Check out our best-selling products!</p>
        <ProductList queryFn={() => fetchProducts({ params: { rating: 1 } })} />
      </div>
      <div className="mt-[40px]">
        <img
          className="w-100 h-[250px]"
          src="/images/out_of_world.jpg"
          alt="Best boook"
        />
      </div>
      <div className="mt-[40px]">
        <h2 className="text-xl font-bold mb-2 text-center">
          Featured Products
        </h2>
        <p className="mb-6 text-center">Explore our featured products!</p>
        <ProductList queryFn={fetchProducts} />
      </div>
    </div>
  );
};

export default Home;
