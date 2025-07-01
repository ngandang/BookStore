import Button from "../../../components/Button";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <img className="banner-image" src="/images/banner.webp" alt="Banner" />
      <div className="shop-now-button">
        <Button
          label="Shop now"
          onClick={() => console.log("Shop now")}
          color="primary"
        />
      </div>
    </div>
  );
};

export default Banner;
