import React from 'react';
import ReactDOM from 'react-dom';
import styles from "../componentsCss/hero.module.css";
import { motion } from "framer-motion"
import hero_image from '../img/knockouts-logo.png'

export function Hero() {
  const stylesHero = {
    backgroundImage: `linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ), url(${hero_image})`,
  };

  return (
    <>
      <section className={styles.hero} style={stylesHero}>
        <div className="hero_container">
          <motion.h1
            initial={{ y: 100, scale: 0.5, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            ¡Es hora de Pizza!
          </motion.h1>
          <motion.a
            initial={{
              scale: 1
            }}
            whileHover={{
              scale: 1.05
            }}
            transition={{
              duration: 0.300,
            }}
            href="https://wa.me/c/584128738824"
            className={styles.hero_btn}
          >
            Haz un pedido aquí
          </motion.a>
        </div>
      </section>
    </>
  );
}

export default Hero;
