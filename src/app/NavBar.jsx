import { Link } from "react-router-dom";
import "../styles/navBar.css";

const NavBar = () => {
  return (
    <nav className="App-navBar">
      <Link to="/" className="App-navBar__link">Posts</Link>
    </nav>
  );
};

export default NavBar;
