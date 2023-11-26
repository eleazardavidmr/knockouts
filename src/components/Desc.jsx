import React from 'react';
import ReactDOM from 'react-dom';
import styles from "../componentsCss/desc.module.css";
import {motion} from "framer-motion"
import {Navbar} from './Navbar'
export function Desc() {

  return (

    <> 
    <Navbar />
      <section className={styles.desc}>
        <section
          className={`${styles.visitanoscontainer} ${styles.desc_container}`}
        >
          <motion.p className={styles.desc_p}>
            <h2>¡Visitanos!</h2>
            Tenemos una amplia variedad de opciones entre pizzas🍕, choco
            Knockouts🍫, y calzones. ¡Estamos seguros de que todo te
            encantará!🥰🤩 Deliciosas pizzas, excelente atencion y un genial
            ambiente son algunas de las cualidades que nos definen🍕🌟💯¡ven a
            visitarnos! Nuestros ingredientes los hallarás frescos y deliciosos
            disponemos de amplia variedad: jamon, chistorra, maiz, tocineta,
            chorizo, campiñones y muchos más.
            <h2>¡Te esperamos!</h2>
          </motion.p>

          <motion.p className={styles.desc_p}>
            <h2>Nuestra misión y visión</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            minima ut eaque aliquam. Ad iusto repellendus, aliquam hic quidem
            rem cupiditate repudiandae commodi quod, magnam dolorum nam magni
            consequatur tempora! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Rem, temporibus nam. Sapiente enim cupiditate eius
            assumenda placeat aliquid recusandae expedita labore vel molestias
            ipsum necessitatibus delectus, similique voluptate. Nihil, iusto!
          </motion.p>
        </section>
      </section>
    </>
  );
}
