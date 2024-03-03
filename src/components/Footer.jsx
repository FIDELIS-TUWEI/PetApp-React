import "../styles/footer.css";

import { BsFacebook, BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs"

const Footer = () => {
  return (
    <section className="footer" id="footer">
      <div className="footer--news--feed">
        <div className="news--feed--text">
          <h3>Subscribe to our News Letter!</h3>
        </div>
        <div className="news--feed--input">
          <input type="text" placeholder="Enter your Email" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="footer--menu">
        <ul className="footer--menu--list">
          <li><a href="#home">Home</a></li>
          <li><a href="#category">Category</a></li>
          <li><a href="#home">About</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>

        <div className="footer--menu--icons">
          <BsFacebook />
          <BsInstagram />
          <BsTwitterX />
          <BsYoutube />
        </div>
      </div>

      <div className="footer--breaker"></div>
      <div className="footer--credits">
        <p>
          &copy; {new Date().getFullYear()} - PetCraze All rights reserved.
        </p>
      </div>
    </section>
  )
}

export default Footer;