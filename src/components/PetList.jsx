import "../styles/petList.css";
import { PetData } from "../Data/PetData";
import { motion } from "framer-motion";

const PetList = () => {
  return (
    <motion.section 
      className="pets"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 4 }}
    >
      <p className="section--slogan">Recommendation</p>
      <h2 className="section--heading">Best Choice</h2>  

      <div className="pets--container">
        {PetData.map((pet) => (
          <div className="pet--box" key={pet.id}>
            <img className="pet--image" src={pet.imgUrl} alt="" />

            <h1 className="pet--title">
              {pet.title}
            </h1>

            <h4 className="pet--price">
              ${pet.price}
            </h4>
          </div>
        ))}
      </div>  
    </motion.section>
  )
}

export default PetList