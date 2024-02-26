import "../styles/category.css";
import { PetData } from "../Data/petData";

const Category = () => {
  return (
    <section className="category" id="category">
        <p className="section--slogan">Customer Favorites</p>
        <h2 className="section--heading">Popular Categories</h2>

        <div className="category--container">
          {PetData.map((data) => (
            <div className="category--box" key={data.id}>
              <img className="box--image" src={data.imgUrl} alt={data.title} />
              <h3 className="box--title">{data.title}</h3>
            </div>
          ))}
        </div>
    </section>
  )
}

export default Category;