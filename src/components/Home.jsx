import "../styles/home.css";
import { HiOutlinePlay } from "react-icons/hi";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home--content">
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
      </div>
      <div className="home-image"></div>
    </section>
  )
}

export default Home;