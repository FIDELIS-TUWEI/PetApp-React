import "../styles/home.css";
import { HiOutlinePlay } from "react-icons/hi";
import homeImage from "../assets/home-image.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="home" id="home">
      <motion.div 
        className="home--content"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <h2 className="home--title">
          Bringing <span>Pets</span>
          <br />& People Closer
        </h2>

        <p className="home--description">
          Unleash the excitement of the pet world - where passion and companionship come together in perfect harmony.
        </p>

        <div className="home--buttons">
          <button className="btn--1">Adopt Now</button>
          <button className="btn--2">
            <HiOutlinePlay className="btn--icon" /> Watch Video
          </button>
        </div>
      </motion.div>
      <motion.div 
        className="home--image"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      >
        <img src={homeImage} alt="Dog Lovers" />
      </motion.div>
    </section>
  )
}

export default Home;