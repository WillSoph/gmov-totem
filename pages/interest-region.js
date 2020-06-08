import Head from 'next/head'
import Link from 'next/link'
import styles from '../components/Home.module.css'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Offers() {

    return (
        <div className={styles.body}>
            <Head>
                <title>GMOV - Totem</title>
            </Head>
            <Header />
            <div className={styles.miolo}>
                <div className={styles['page-title']}>
                    <p>Regiões de Interesse</p>
                </div>
                <div className={styles.interest}>
                    <fieldset>
                        <legend>Selecione suas regiões de Interesse</legend>
                        <input type="checkbox" name="favorite_region" value="Cats" />São Paulo<br></br>
                        <input type="checkbox" name="favorite_region" value="Dogs" />Rio de Janeiro<br></br>
                        <input type="checkbox" name="favorite_region" value="Birds" />Rio Grande do Sul<br></br>
                        <br></br>
                    </fieldset>
                </div>
                <div className={styles.divButton}>
                    <button className={styles.defaultbutton} value="Confirmar">Confirmar</button>
                </div>


            </div >
        </div >
    )

}
