import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../componentsCss/footer.module.css'
export function Footer(){
	return(
<>
			<div className={styles.main}>
				<div className={styles.dev}>
				<p>Designed by:</p>
				<span>Eleazar Muñoz</span>
				</div>
			</div>
</>
		)
}