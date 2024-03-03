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
  return (
    <>
      <nav className="header--nav">
        <div className="nav--logo">
          <a href="#home" onClick={() => setMenuOpen(false)}>
            <h2>PetCraze</h2>
          </a>
        </div>
        <div className="nav--divider"></div>
        <ul className="nav--list">
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          </li>
          <li>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          </li>
          <li>
            <a href="#category" onClick={() => setMenuOpen(false)}>Category</a>
          </li>
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>About Us</a>
          </li>
          <li>
            <a href="#footer" onClick={() => setMenuOpen(false)}>Contact</a>
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