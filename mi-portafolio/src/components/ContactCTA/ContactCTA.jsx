import styles from './ContactCTA.module.css'

const ContactCTA = () => (
  <section className={styles.cta} id="contact">
    <div className="container">
      <div className={styles.panel}>
        <div>
          <p className={styles.subtitle}>Hola, soy Makarena.</p>
          <h2>Me gusta transformar ideas en productos digitales.</h2>
          <p>
            Estudiante de Ingeniería en Informática con interés en desarrollo Full Stack y UX/UI. Disfruto participar en todo el proceso: entender el problema, diseñar la experiencia y construir la solución.
          </p>
        </div>
        <div className={styles.buttons}>

          <a href="https://www.linkedin.com/in/makarena-perez-rivera/" target="_blank" rel="noreferrer" className="btn btn-outline-light">
            LinkedIn
          </a>
          <a href="https://github.com/MacarenaAPR" target="_blank" rel="noreferrer" className="btn btn-outline-light">
            GitHub
          </a>
          <a href="mailto:macarena.p.r@outlook.es" className="btn btn-primary">
            Enviar correo
          </a>
          <a href="https://wa.me/+56988424939" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default ContactCTA
