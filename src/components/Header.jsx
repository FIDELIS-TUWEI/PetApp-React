import "../styles/header.css";
import { HiShoppingCart, HiSearch } from "react-icons/hi";

const Header = () => {
  return (
    <header className="header">
      <Navbar />
    </header>
  )
};

const Navbar = () => {
  return (
    <>
      <nav className="header--nav">
        <div className="nav--logo">
          <a href="#">
            <h2>PetCraze</h2>
          </a>
        </div>
        <div className="nav--divider"></div>
        <ul className="nav--list">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#category">Category</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="nav--icons">
        <HiShoppingCart />
        <HiSearch />
      </div>
    </>
  )
}

export default Header;