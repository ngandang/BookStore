import Button from "../Button";
import "./Header.css";

const Header = () => {
  return (
    <div className="flex center items-center justify-between border-1 border-solid border-gray-300">
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-orange-500 text-3xl mx-4 logo">
          star_shine
        </span>
        <div className="menu">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link active" href="#">
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
      <div className="px-3">
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
