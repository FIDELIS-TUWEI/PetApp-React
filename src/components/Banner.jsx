import "../styles/banner.css";
import groupImage from "../assets/pet-group.png"

const Banner = () => {
  return (
    <section className="banner--section">
      <div className="banner">
        <div className="banner--content">
          <h2>Stay & Save</h2>
          <h2>Get your awesome discount</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="banner--image">
          <img src={groupImage} alt="pet-group" />
        </div>
      </div>
    </section>
  )
}

export default Banner;