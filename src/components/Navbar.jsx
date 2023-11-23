import logo_img from "./img/kno-logo-c-png.png";
import styles from "../componentsCss/navbar.module.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { RegisterPage } from "./RegisterPage";

export function Navbar() {
  return (
    <>
      <header>
        <div className={styles.h1_img_container}>
          <Link to="/" className={styles.a_container}>
            <img className={styles.header_logo} src={logo_img} alt="Imagen" />
            <h1>Knockouts Pizzas</h1>
          </Link>
        </div>

        <nav>
          <ul>
            <Link to="" className={styles.nav_a}>
              Especialidades
            </Link>
            <a className={styles.nav_a} >Menú</a>
            <Link className={styles.nav_a}>Contacto</Link>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" exact />
        <Route path="/register" Component={RegisterPage} />
      </Routes>
    </>
  );
}
