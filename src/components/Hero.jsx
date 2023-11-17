import styles from "../componentsCss/hero.module.css";
export function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <h1>¡Las mejores pizzas!</h1>
        <a
          href="https://instagram.com/knockoutspizzas"
          className={styles.hero_btn}
        >
          Saber más
        </a>
      </section>
    </>
  );
}
