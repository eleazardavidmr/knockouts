import React from "react";
import ReactDOM from "react-dom";
import { Navbar } from "./Navbar";
import styles from "../componentsCss/about.module.css";
import { motion } from "framer-motion";
import ownersPhoto from "../img/owners.jpeg";

export function About() {
  return (
    <>
      <Navbar />
      <section className={styles.fullAbout}>
        <div className={styles.intro}>
          <motion.img
            src={ownersPhoto}
            className={styles.ownersImg}
            alt="Owners"
          />
          <p>*Texto de Ejemplo*</p>
        </div>
        <section className={styles.desc}>
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={styles.desc_p}
          >
            <p>¡Visitanos!</p>
            Tenemos una amplia variedad de opciones entre pizzas🍕, choco
            Knockouts🍫, y calzones. ¡Estamos seguros de que todo te
            encantará!🥰🤩 Deliciosas pizzas, excelente atencion y un genial
            ambiente son algunas de las cualidades que nos definen🍕🌟💯¡ven a
            visitarnos! Nuestros ingredientes los hallarás frescos y deliciosos
            disponemos de amplia variedad: jamon, chistorra, maiz, tocineta,
            chorizo, campiñones y muchos más.
            <p>¡Te esperamos!</p>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={styles.desc_p}
          >
            <p>Nuestra misión y visión</p>
            *Texto de Ejemplo*
          </motion.p>
        </section>
      </section>
    </>
  );
}
