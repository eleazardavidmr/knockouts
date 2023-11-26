import { Navbar } from './Navbar'
import styles from '../componentsCss/about.module.css'
import { motion } from 'framer-motion'


export function About(){
	return(

		<>
		<Navbar />
	<section className={styles.fullAbout}>
			<div  className={styles.intro}>
				<motion.img initial={{scale: 0.5, opacity: 0}} animate={{scale: 1.1, opacity: 1}} transition={{duration: 1, delay: 0.5}}  src="../src/components/img/owners.jpeg" className={styles.ownersImg} alt="Owners"/>
			<p>Somos una empresa familiar </p>
			</div>
	<section className={styles.desc}>

          <motion.p
          	initial={{ opacity: 0, scale: 0 }}
  			whileInView={{ opacity: 1, scale: 1 }}
  			viewport={{ once: true }}
  			transition={{duration: 0.5}}
  			className={styles.desc_p}>
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
  			transition={{duration: 0.5}}

          	className={styles.desc_p}>
            <p>Nuestra misión y visión</p>
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

	)
}