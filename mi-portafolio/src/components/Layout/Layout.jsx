import styles from './Layout.module.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import ScrollTopButton from '../ScrollTopButton/ScrollTopButton'

const Layout = ({ children }) => (
  <div className={styles.pageShell}>
    <Navbar />
    <main className={styles.main}>{children}</main>
    <Footer />
    <ScrollTopButton />
  </div>
)

export default Layout
