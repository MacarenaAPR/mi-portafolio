import styles from './Footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div className="container">
      <div className={styles.content}>
        <p>© 2026 MPR.ING · Hecho con React, Vite y CSS Modules.</p>
        <div className={styles.links}>
          <a href="https://www.linkedin.com/in/makarena-perez-rivera/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/MacarenaAPR" target="_blank" rel="noreferrer">GitHub</a>
          <a href="CV_URL" target="_blank" rel="noreferrer">Descargar CV</a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
