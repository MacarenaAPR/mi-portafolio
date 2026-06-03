import projects from '../../data/projects'
import ProjectCard from './ProjectCard'
import styles from './Projects.module.css'

const Projects = ({ featuredOnly = false }) => {
  const list = featuredOnly ? projects.slice(0, 3) : projects

  return (
    <section className={styles.projects} id="proyectos">
      <div className="container">
        <div className={styles.headline}>
          <h2>Proyectos destacados</h2>
          <p>Proyectos reales con foco en producto, experiencia y resultado técnico.</p>
        </div>
        <div className={styles.grid}>
          {list.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
