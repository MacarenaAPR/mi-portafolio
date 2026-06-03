import skills from '../../data/skills'
import styles from './Skills.module.css'
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { SiVite } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { VscPython } from "react-icons/vsc";
import { SiDjango } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSqlite } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { LuFigma } from "react-icons/lu";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiRender } from "react-icons/si";
import { SiGoogleanalytics } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { LuPencilRuler } from "react-icons/lu";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { FaSitemap } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { LiaConnectdevelop } from "react-icons/lia";

const Skills = () => (
  <section className={styles.skills} id="Habilidades">
    <div className="container">
      <div className={styles.header}>
        <h2>Habilidades</h2>
        <p>Capacidades técnicas y metodologías que uso en mis proyectos.</p>
      </div>
      <div className={styles.grid}>
        {skills.map((group) => (
          <div key={group.title} className={styles.group}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item.name}>
                    <p className={styles.icon}>
                                {item.icon === 'LiaConnectdevelop' && <LiaConnectdevelop />}
                                {item.icon === 'BiLogoPostgresql' && <BiLogoPostgresql />}
                                {item.icon === 'IoLogoHtml5' && <IoLogoHtml5 />}
                                {item.icon === 'IoLogoCss3' && <IoLogoCss3 />}
                                {item.icon === 'IoLogoJavascript' && <IoLogoJavascript />}
                                {item.icon === 'FaReact' && <FaReact />}
                                {item.icon === 'SiVite' && <SiVite />}
                                {item.icon === 'FaBootstrap' && <FaBootstrap />}
                                {item.icon === 'VscPython' && <VscPython />}
                                {item.icon === 'SiDjango' && <SiDjango />} 
                                {item.icon === 'SiSqlite' && <SiSqlite />}
                                {item.icon === 'TbBrandMysql' && <TbBrandMysql />}
                                {item.icon === 'LuFigma' && <LuFigma />}
                                {item.icon === 'FaGitAlt' && <FaGitAlt />}
                                {item.icon === 'FaGithub' && <FaGithub />}
                                {item.icon === 'VscVscode' && <VscVscode />}
                                {item.icon === 'SiGoogleanalytics' && <SiGoogleanalytics />}
                                {item.icon === 'AiFillProduct' && <AiFillProduct />}
                                {item.icon === 'SiRender' && <SiRender />}
                                {item.icon === 'SiVercel' && <SiVercel />}
                                {item.icon === 'LuPencilRuler' && <LuPencilRuler />}
                                {item.icon === 'FaSitemap' && <FaSitemap />}
                                {item.icon === 'FaMobileAlt' && <FaMobileAlt />}
                                {item.icon === 'LiaProjectDiagramSolid' && <LiaProjectDiagramSolid />}
                    </p>
                    <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Skills
