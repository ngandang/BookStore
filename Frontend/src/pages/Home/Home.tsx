import ProductList from "../../components/ProductList/ProductList";
import Banner from "./Banner/Banner";
// import BestSeller from "./BestSeller/BestSeller";

const Home = () => {
  return (
    <div>
      <Banner />
      {/* <div className="mt-[40px]"></div>
      <div className="mt-[40px]">
        <img
          className="w-100 h-[250px]"
          src="/images/out_of_world.jpg"
          alt="Best boook"
        />
      </div> */}
      <div className="mt-[40px]">
        <h2 className="text-xl font-bold mb-2 text-center">All Products</h2>
        <p className="mb-6 text-center">Explore our featured products!</p>
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
