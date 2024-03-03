import "../styles/category.css";
import { PetData } from "../Data/PetData";
import { motion } from "framer-motion";

const Category = () => {
  return (
    <section className="category" id="category">
        <p className="section--slogan">Customer Favorites</p>
        <h2 className="section--heading">Popular Categories</h2>

        <div className="category--container">
          {PetData.map((data) => (
            <motion.div 
              className="category--box" 
              key={data.id}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2 }}
            >
              <img className="box--image" src={data.imgUrl} alt={data.title} />
              <h3 className="box--title">{data.title}</h3>
            </motion.div>
          ))}
        </div>
    </section>
  )
}

export default Category;