import PropTypes from "prop-types";
import '../styles/header.css';
import { HiShoppingCart, HiSearch, HiMenu, HiX } from "react-icons/hi";

const Header = ({ menuOpen, setMenuOpen }) => {
  const menuIcon = menuOpen ? <HiX /> : <HiMenu />

  const handleToggle = () => {
    setMenuOpen(!menuOpen)
  };

  return (
    <>
      <header className="header">
        <Navbar setMenuOpen={setMenuOpen} />
      </header>
      <button className="burger--menu" onClick={handleToggle}>{menuIcon}</button>
    </>
  )
};

Header.propTypes = {
  menuOpen: PropTypes.bool,
  setMenuOpen: PropTypes.bool
};

export const ResponsiveMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`res--menu ${menuOpen ? 'res--menu--open' : ''}`}>
      <Navbar setMenuOpen={setMenuOpen} />
    </div>
  )
};

ResponsiveMenu.propTypes = {
  menuOpen: PropTypes.bool,
  setMenuOpen: PropTypes.bool,
}

const Navbar = ({ setMenuOpen }) => {
  const handleLinkClick = () => {
    setMenuOpen(false)
  };

  return (
    <>
      <nav className="header--nav">
        <div className="nav--logo">
          <a href="#home" onClick={handleLinkClick}>
            <h2>PetCraze</h2>
          </a>
        </div>
        <div className="nav--divider"></div>
        <ul className="nav--list">
          <li>
            <a href="#home" onClick={handleLinkClick}>Home</a>
          </li>
          <li>
            <a href="#services" onClick={handleLinkClick}>Services</a>
          </li>
          <li>
            <a href="#category" onClick={handleLinkClick}>Category</a>
          </li>
          <li>
            <a href="#home" onClick={handleLinkClick}>About Us</a>
          </li>
          <li>
            <a href="#footer" onClick={handleLinkClick}>Contact</a>
          </li>
        </ul>
      </nav>
      <div className="nav--icons">
        <HiShoppingCart className='nav-icon' />
        <HiSearch className='nav-icon' />
      </div>
    </>
  )
};

Navbar.propTypes = {
  setMenuOpen: PropTypes.bool,
}

export default Header;