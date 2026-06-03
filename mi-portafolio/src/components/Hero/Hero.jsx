import { Link } from 'react-router-dom'
import heroImage from '../../assets/images/hero-image.svg'
import styles from './Hero.module.css'
import { GrSend } from "react-icons/gr";
import { MdOutlineLocationOn } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { FaHouseSignal } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.content}>
      <span className={styles.subtitle}>Hola, soy</span>
      <h1>Makarena Pérez Rivera</h1>
      <h3>Full Stack Developer Junior</h3>
      <h4>UX/UI Enthusiast</h4>
      <p>
        Diseño y desarrollo de productos digitales enfocados en resolver problemas reales, combinando experiencia de usuario, rendimiento técnico y resultados de negocio.
        Mi enfoque se centra en crear soluciones digitales que no solo sean funcionales, sino también intuitivas y atractivas para los usuarios.
      </p>
      <div className={styles.actions}>
        <Link to="/proyectos" className="btn btn-primary btn-lg">
          Ver Proyectos <FaArrowRight />
        </Link>
        <a href="/#contact" className="btn btn-outline-light btn-lg">
          Contactarme <GrSend />
        </a>
      </div>
      <div className={styles.infobar}>
        <span className={styles.infobarItem}>
          <MdOutlineLocationOn />
          Antofagasta, Chile
        </span>
        <span className={styles.infobarItem}>
          <PiStudentBold />
          Ingenieria en Informatica (ultimo año)
        </span>
        <span className={styles.infobarItem}>
          <FaHouseSignal />
          Disponible para trabajos remotos
        </span>

      </div>
    </div>
    <div className={styles.visual}>
      <img src={heroImage} alt="Ilustración hero" />
      <div className={styles.glow} />
    </div>
  </section>
)

export default Hero
