import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from './Navbar'
import styles from '../componentsCss/desc.module.css'
import menuPhoto from '../img/menu-img.jpeg'
export function Menu(){
  return(
<>
        <Navbar />
          <section className={`${styles.desc_container} ${styles.menucontainer}`}>
          <h2>Menú</h2>
          <img
            src={menuPhoto}
            alt="menu"
            className={styles.desc_img}
          />
          <img
            src={menuPhoto}
            alt="menu"
            className={styles.desc_img}
          />
          <img
            src={menuPhoto}
            alt="menu"
            className={styles.desc_img}
          />
        </section>
</>

    )
}