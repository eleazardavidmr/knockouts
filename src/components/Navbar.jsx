import logo_img from "./img/kno-logo-c-png.png";
import styles from "../componentsCss/navbar.module.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import { Desc } from './Desc'
export function Navbar() {
  return (
    <>
      <header>
        <div className={styles.h1_img_container}>
          <Link to='/' className={styles.a_container}>
            <img className={styles.header_logo} src={logo_img} alt="Imagen" />
            <motion.h1>
              Knockouts Pizzas
            </motion.h1>
          </Link>
        </div>

        <nav>
          <ul>
            <Link to="/about" className={styles.nav_a}>
              Acerca de Nosotros
            </Link>
            <Link to='/menu' className={styles.nav_a}>Menú</Link>
            <Link to='/contact'className={styles.nav_a}>Contacto</Link>
          </ul>
        </nav>
      </header>
    </>
  );
}
