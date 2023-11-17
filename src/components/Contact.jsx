import styles from "../componentsCss/contact.module.css";
import stylesDesc from "../componentsCss/desc.module.css";
export function Contact() {
  return (
    <>
      <div className={styles.fullDivMenuSection}>
        <section className={`${styles.contact_container}`}>
          <h2 className={styles.contactH2}>Contáctanos:</h2>
          <div className={stylesDesc.contact_div}>
            <img
              src="src/components/img/hogar-logo.png"
              id="ig-logo-sr"
              alt="direccion"
              className={stylesDesc.desc_logo}
            />
            <p>
              <strong>Santa Rita: </strong>Av. Alfaragua, diagonal a la
              licorería El Mandúco
            </p>
            <p></p>
            <br />
          </div>

          <div className={stylesDesc.contact_div}>
            <img
              src="src/components/img/hogar-logo.png"
              alt="direccion"
              className={stylesDesc.desc_logo}
            />
            <p>
              <strong>La Morita I: </strong>Detrás de Makro
            </p>
          </div>

          <div className={stylesDesc.contact_div}>
            <img
              src="src/components/img/instagram-logo.png"
              id="instagram-logo-img"
              className={stylesDesc.desc_logo}
              alt="instagram"
            />
            <p>@knockoutspizzas</p>
          </div>

          <div className={`${stylesDesc.contact_div} ${styles.directions}`}>
            <img
              src="src/components/img/whatsapp-logo.png"
              alt="whatsapp"
              className={stylesDesc.desc_logo}
              id="whatsapp-logo-img"
            />
            <p>
              <strong>Sede Santa Rita: </strong>+58 412 87388
            </p>
            <img
              src="src/components/img/whatsapp-logo.png"
              alt="whatsapp"
              className={stylesDesc.desc_logo}
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
