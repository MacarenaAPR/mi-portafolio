import stats from '../../data/stats'
import styles from './Stats.module.css'
import { FaProjectDiagram } from "react-icons/fa";
import { BsRocketTakeoff } from "react-icons/bs";
import { PiStudentFill } from "react-icons/pi";
import { FaBoltLightning } from "react-icons/fa6";

const Stats = () => (
  <section className={styles.stats} id="stats">
    <div className="container">
      <div className={styles.cards}>
        {stats.map((item) => (
          <article key={item.title} className={styles.card}>
            <p className={styles.icon}>
              {item.icon === 'FaProjectDiagram' && <FaProjectDiagram />}
              {item.icon === 'BsRocketTakeoff' && <BsRocketTakeoff />}
              {item.icon === 'PiStudentFill' && <PiStudentFill />} 
              {item.icon === 'FaBoltLightning' && <FaBoltLightning />}
            </p>
            <div className={styles.content}>
                <span>{item.value}</span>
                <p>{item.title}</p>  
            </div>
            
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Stats
