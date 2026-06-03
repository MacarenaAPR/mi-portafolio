import { useEffect, useState } from 'react'
import styles from './ScrollTopButton.module.css'

const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      className={`${styles.button} ${visible ? styles.show : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >
      <i className="bi bi-arrow-up" />
    </button>
  )
}

export default ScrollTopButton
