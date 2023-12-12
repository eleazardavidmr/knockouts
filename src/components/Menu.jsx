import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from './Navbar'
import styles from '../componentsCss/desc.module.css'
import menu1 from '../img/menu1.jpeg'
import menu2 from '../img/menu2.jpeg'
export function Menu(){
  return(
<>
        <Navbar />
          <section className={`${styles.desc_container} ${styles.menucontainer}`}>
          <h2>Menú</h2>
          <img
            src={menu1}
            alt="menu"
            className={styles.desc_img}
          />
          <img
            src={menu2}
            alt="menu"
            className={styles.desc_img}
          />
        </section>
</>

    )
}
