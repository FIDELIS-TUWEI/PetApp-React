import "../styles/banner.css";
import groupImage from "../assets/pet-group.png";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className="banner--section">
      <div className="banner">
        <motion.div 
          className="banner--content"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          <h2>Stay & Save</h2>
          <h2>Get your awesome discount</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </motion.div>

        <div className="banner--image">
          <motion.img 
            src={groupImage} 
            alt="pet-group" 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
          />
        </div>
      </div>
    </section>
  )
}

export default Banner;