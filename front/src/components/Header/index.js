import logo from "../../images/logo.svg";
import "./styles.css";

const Header = () => {
  return (
    <header className="main-header">
      <img src={logo} className="logo" alt="logo" />
      <p className="text">Created by Freddy Duque B.</p>
    </header>
  );
};

export default Header;
