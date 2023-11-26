import React from 'react';
import ReactDOM from 'react-dom';
import styles from "../componentsCss/contact.module.css";
import { Navbar } from './Navbar'
import hogar_logo from '../img/hogar-logo.png'
import instagram_logo_png from '../img/instagram-logo.png'
import whatsapp_logo from '../img/whatsapp-logo.png'
export function Contact() {
  return (
    <>
    <Navbar />
      <div className={styles.fullDivMenuSection}>
        <section className={`${styles.contact_container}`}>
          <h2 className={styles.contactH2}>Contáctanos:</h2>
          <div className={styles.contact_div}>
            <img
              src={hogar_logo}
              id="ig-logo-sr"
              alt="direccion"
              className={styles.desc_logo}
            />
            <p>
              <strong>Santa Rita: </strong>Av. Alfaragua, diagonal a la
              licorería El Mandúco
            </p>
            <p></p>
            <br />
          </div>

          <div className={styles.contact_div}>
            <img
              src={hogar_logo}
              alt="direccion"
              className={styles.desc_logo}
            />
            <p>
              <strong>La Morita I: </strong>Detrás de Makro
            </p>
          </div>

          <div className={styles.contact_div}>
            <img
              src={instagram_logo_png}
              id="instagram-logo-img"
              className={styles.desc_logo}
              alt="instagram"
            />
            <a href="https://instagram.com/knockoutspizzas" className={styles.ig_a} >@knockoutspizzas</a>
          </div>

          <div className={`${styles.contact_div} ${styles.directions}`}>
            <img
              src={whatsapp_logo}
              alt="whatsapp"
              className={styles.desc_logo}
              id="whatsapp-logo-img"
            />
            <p>
              <strong>Sede Santa Rita: </strong>+58 412 87388
            </p>
            <img
              src={whatsapp_logo}
              alt="whatsapp"
              className={styles.desc_logo}
            />
            <p>
              <strong>Sede La Morita I: </strong>+58 412 8480076
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
