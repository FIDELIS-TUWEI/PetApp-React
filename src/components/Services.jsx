import { HiGlobe } from "react-icons/hi";
import "../styles/services.css";
import { motion } from "framer-motion";

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
        <motion.div 
            className="service--content"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
        >
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
        </motion.div>
        
        <div className="services--container">
            {services.map((service) => (
                <motion.div 
                    className="service--box" 
                    key={service.id}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2 }}
                >
                    <span className="service--icon">
                        {service.icon}
                    </span>
                    <h3 className="service--title">
                        {service.title}
                    </h3>
                </motion.div>
            ))}
        </div>
    </section>
  )
}

export default Services;