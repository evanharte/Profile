import logo from "../images/ehlogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <Link to="/">
          <img src={logo} alt="logo" width="50px" className="logo-img" />
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Work">Work</Link>
          <Link to="/Resume">Resume</Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
