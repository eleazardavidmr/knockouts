import { Navbar } from './Navbar'
import styles from '../componentsCss/desc.module.css'
export function Menu(){
  return(
<>
        <Navbar />
          <section className={`${styles.desc_container} ${styles.menucontainer}`}>
          <h2>Menú</h2>
          <img
            src="src/components/img/menu-img.jpeg"
            alt="menu"
            className={styles.desc_img}
          />
          <img
            src="src/components/img/menu-img.jpeg"
            alt="menu"
            className={styles.desc_img}
          />
          <img
            src="src/components/img/menu-img.jpeg"
            alt="menu"
            className={styles.desc_img}
          />
        </section>
</>

    )
}