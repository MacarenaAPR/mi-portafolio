import { Link } from 'react-router-dom'
import styles from './Projects.module.css'

const ProjectCard = ({ project }) => (
  <article className={styles.projectCard}>
    <div className={styles.imageWrapper}>
      <img src={project.image} alt={project.title} />
    </div>
    <div className={styles.content}>
      <div>
        <span className={styles.category}>{project.role}</span>
        <h3>{project.title}</h3>
        <p>{project.shortDescription}</p>
        <p>{project.stack.slice(0, 3).join(" • ")}</p>
      </div>
      <Link to={`/proyectos/${project.slug}`} className="btn btn-sm btn-outline-light">
        Ver detalle
      </Link>
    </div>
  </article>
)

export default ProjectCard
