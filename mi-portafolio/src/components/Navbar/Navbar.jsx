import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { FaDownload } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={`${styles.brand} container`}>
        <Link to="/" className={styles.logo}>
          MPR.<span>ING</span>
        </Link>

        <button
          type="button"
          className={styles.toggle}
          aria-label="Toggle menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="bi bi-list" />
        </button>

        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>
            Inicio
          </Link>
          <Link to="/proyectos" onClick={() => setIsOpen(false)}>
            Proyectos
          </Link>
          <a href="/#Habilidades" onClick={() => setIsOpen(false)}>
            Habilidades
          </a>
          <a href="/#sobre-mi" onClick={() => setIsOpen(false)}>
            Sobre mí
          </a>
          <a href="/#contact" onClick={() => setIsOpen(false)}>
            Contacto
          </a>
          <Link className="btn btn-primary btn-lg">
            <FaDownload /> Descargar CV 
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
