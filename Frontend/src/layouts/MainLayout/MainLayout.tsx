import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./MainLayout.css";

const MainLayout = () => {
  return (
    <div className="app-container">
      <div className="app-header">
        <Header />
      </div>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
