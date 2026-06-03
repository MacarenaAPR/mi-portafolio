import Projects from '../../components/Projects/Projects'

const ProjectsPage = () => (
  <section className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
    <div style={{ marginBottom: '2rem' }}>
      <h1 style={{ color: 'var(--text-h)' }}>Todos los proyectos</h1>
      <p style={{ color: 'var(--text)' }}>
        Listado completo de trabajos realizados con enfoque en producto y ejecución técnica.
      </p>
    </div>
    <Projects />
  </section>
)

export default ProjectsPage
