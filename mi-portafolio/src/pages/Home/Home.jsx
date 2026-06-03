import Hero from '../../components/Hero/Hero'
import Stats from '../../components/Stats/Stats'
import About from '../../components/About/About'
import Skills from '../../components/Skills/Skills'
import Projects from '../../components/Projects/Projects'
import Languages from '../../components/Languages/Languages'
import ContactCTA from '../../components/ContactCTA/ContactCTA'
import styles from './Home.module.css'

const Home = () => (
  <>
    <Hero />
    <Stats />
    <About />
    <Skills />
    <Projects featuredOnly />
    <div className={`container ${styles.contactGrid}`}>
      <Languages />
      <ContactCTA />
    </div>
  </>
)

export default Home
