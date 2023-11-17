import styles from "../componentsCss/desc.module.css";

export function Desc() {
  return (
    <>
      <section className={styles.desc}>
        <section
          className={`${styles.visitanoscontainer} ${styles.desc_container}`}
        >
          <p className={styles.desc_p}>
            <h2>¡Visitanos!</h2>
            Tenemos una amplia variedad de opciones entre pizzas🍕, choco
            Knockouts🍫, y calzones. ¡Estamos seguros de que todo te
            encantará!🥰🤩 Deliciosas pizzas, excelente atencion y un genial
            ambiente son algunas de las cualidades que nos definen🍕🌟💯¡ven a
            visitarnos! Nuestros ingredientes los hallarás frescos y deliciosos
            disponemos de amplia variedad: jamon, chistorra, maiz, tocineta,
            chorizo, campiñones y muchos más.
            <h2>¡Te esperamos!</h2>
          </p>
          <p className={styles.desc_p}>
            <h2>Quiénes Somos</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            minima ut eaque aliquam. Ad iusto repellendus, aliquam hic quidem
            rem cupiditate repudiandae commodi quod, magnam dolorum nam magni
            consequatur tempora! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nobis, temporibus inventore ullam libero saepe aut
            laborum culpa nemo pariatur harum iusto magni dolorem! Ut saepe
            tenetur accusamus blanditiis molestias amet!
          </p>
          <p className={styles.desc_p}>
            <h2>Nuestra misión y visión</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            minima ut eaque aliquam. Ad iusto repellendus, aliquam hic quidem
            rem cupiditate repudiandae commodi quod, magnam dolorum nam magni
            consequatur tempora! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Rem, temporibus nam. Sapiente enim cupiditate eius
            assumenda placeat aliquid recusandae expedita labore vel molestias
            ipsum necessitatibus delectus, similique voluptate. Nihil, iusto!
          </p>
        </section>
        <section
          className={`${styles.desc_container} ${styles.especialidades}`}
        >
          <h2>Especialidades:</h2>
          <p>Choco knockout:</p>
          <img
            src="src/components/img/chocho-pizza.png"
            alt="choco pizza"
            className={styles.desc_img}
          />
        </section>
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
      </section>
    </>
  );
}
