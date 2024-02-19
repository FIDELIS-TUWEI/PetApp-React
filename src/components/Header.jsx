import PropTypes from "prop-types";
import '../styles/header.css';
import { HiShoppingCart, HiSearch, HiMenu, HiX } from "react-icons/hi";

const Header = ({ menuOpen, setMenuOpen }) => {
  const menuIcon = menuOpen ? <HiX /> : <HiMenu />
  const handleToggle = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <>
    <header className="header">
      <Navbar />
    </header>
    <button className="burger--menu" onClick={handleToggle}>{menuIcon}</button>
    </>
  )
};
Header.propTypes = {
  menuOpen: PropTypes.bool,
  setMenuOpen: PropTypes.bool
}


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
        <HiShoppingCart className='nav-icon' />
        <HiSearch className='nav-icon' />
      </div>
    </>
  )
}

export default Header;