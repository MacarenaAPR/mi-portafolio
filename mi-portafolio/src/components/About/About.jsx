import styles from './About.module.css'
import { LuNotebookTabs } from "react-icons/lu";
import { LuBrainCircuit } from "react-icons/lu";
import { FaComments } from "react-icons/fa";
import { TbUserHeart } from "react-icons/tb";
import { LuPuzzle } from "react-icons/lu";
import { FaPeopleCarry } from "react-icons/fa";
import { FaSyncAlt } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";

const About = () => (
  <section className={styles.about} id="sobre-mi">
    <div className="container">
      <div className={styles.grid}>
        <div className={styles.info}>
          <h2>Sobre mí</h2>
          <span>
            No solo escribo código.
          </span>
          <p>
            Me interesa entender a las personas que utilizaran los productos, diseñar experiencias intuitivas y desarrollarsolocuoines funcionales que generen valor.
          </p>
          <p>
            Actualmente combino formacion en Ingeniería en Informática con estudios en UX/UI, trabajando en proyectos reales orientados a salud, restaurantes y sistemas de gestión.
          </p>
        </div>
        <div className={styles.details}>
          <div>
            <strong><LuNotebookTabs /></strong>
            <span>Aprendízaje continuo</span>
          </div>
          <div>
            <strong><LuBrainCircuit /></strong>
            <span>Pensamiento analítico</span>
          </div>
          <div>
            <strong><FaComments /></strong>
            <span>Comunicación efectiva</span>
          </div>
          <div>
            <strong><TbUserHeart /></strong>
            <span>Orientación al usuario</span>
          </div>
          <div>
            <strong><LuPuzzle /></strong>
            <span>Resolución de problemas</span>
          </div>
          <div>
            <strong><FaPeopleCarry /></strong>
            <span>Trabajo en equipo</span>
          </div>
          <div>
            <strong><FaSyncAlt /></strong>
            <span>Adaptabilidad</span>
          </div>
          <div>
            <strong><FaTasks /></strong>
            <span>Organización</span>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default About
