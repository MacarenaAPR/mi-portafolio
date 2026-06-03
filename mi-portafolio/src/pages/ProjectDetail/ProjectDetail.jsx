import { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import projects from '../../data/projects'
import styles from './ProjectDetail.module.css'

const ProjectDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = useMemo(() => projects.find((item) => item.slug === slug), [slug])

  if (!project) {
    return (
      <section className="container" style={{ padding: '3rem 0' }}>
        <p style={{ color: 'var(--text)', marginBottom: '1rem' }}>Proyecto no encontrado.</p>
        <button type="button" className="btn btn-outline-light" onClick={() => navigate('/proyectos')}>
          Volver a proyectos
        </button>
      </section>
    )
  }

  return (
    <section className="container" style={{ padding: '3rem 0' }}>
      <button type="button" className="btn btn-link text-decoration-none mb-4" onClick={() => navigate(-1)}>
        ← Volver
      </button>
      <div className={styles.wrapper}>
        <div className={styles.hero}>
          <div>
            <span className={styles.role}>{project.role}</span>
            <h1>{project.title}</h1>
            <p>{project.shortDescription}</p>
          </div>
          <img src={project.image} alt={project.title} />
        </div>
        <div className={styles.details}>
          <div>
            <h2>Problema</h2>
            <p>{project.problem}</p>
          </div>
          <div>
            <h2>Solución</h2>
            <p>{project.solution}</p>
          </div>
          <div>
            <h2>Tecnologías</h2>
            <div className={styles.tags}>
              {project.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
          <div>
            <h2>Funcionalidades</h2>
            <ul>
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Aprendizajes</h2>
            <ul>
              {project.learnings.map((learning) => (
                <li key={learning}>{learning}</li>
              ))}
            </ul>
          </div>
          <div className={styles.actions}>
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
              Ver demo
            </a>
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-outline-light">
              Ver GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetail
