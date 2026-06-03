import languages from '../../data/languages'
import styles from './Languages.module.css'

const levelClassMap = {
  Nativo: styles.fillNative,
  Básico: styles.fillBasic,
}

const Languages = () => (
  <section className={styles.languages} id="idiomas">
    <div className="container">
      <div className={styles.card}>
        <h2>Idiomas</h2>
        <div className={styles.list}>
          {languages.map((language) => (
            <div key={language.name} className={styles.item}>
              <div className={styles.itemHeader}>
                <span>{language.name}</span>
                <small>{language.level}</small>
              </div>
              <div className={styles.track} aria-label={`${language.name} ${language.level}`}>
                <span className={`${styles.fill} ${levelClassMap[language.level] || ''}`} />
              </div>
              <strong>{language.level === 'Nativo' ? '100%' : '35%'}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Languages
