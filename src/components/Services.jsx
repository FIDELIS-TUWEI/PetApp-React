import { HiGlobe } from "react-icons/hi";
import "../styles/services.css";

const services = [
    {
        id: 1,
        title: 'best grooming',
        icon: <HiGlobe />
    },
    {
        id: 2,
        title: 'dog training',
        icon: <HiGlobe />
    },
    {
        id: 3,
        title: 'special diet',
        icon: <HiGlobe />
    },
    {
        id: 4,
        title: 'vet services',
        icon: <HiGlobe />
    },
]

const Services = () => {
  return (
    <section className="services"id="services">
        <div className="service--content">
            <p className="section--slogan">
                services
            </p>
            <h2 className="section--heading">
                Pet Care With Love
            </h2>

            <div className="services--des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae tempora ea perferendis unde, repudiandae corrupti atque dolorem! Magnam, et? Ipsum quod saepe eius hic asperiores nobis repellat dolorum, repellendus similique?
            </div>
            <button className="btn--1">Explore</button>
        </div>
        
        <div className="services--container">
            {services.map((service) => (
                <div className="service--box" key={service.id}>
                    <span className="service--icon">
                        {service.icon}
                    </span>
                    <h3 className="service--title">
                        {service.title}
                    </h3>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Services;