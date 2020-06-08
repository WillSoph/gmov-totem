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
                    <p>Prêmios</p>
                </div>

                <div className={styles.offers}>
                    <div><FontAwesomeIcon icon="trophy" size="6x" color="#f5ba43" className={styles['icon-menu']} />
                        <p>Em breve teremos aqui uma lista de prêmios exclusivos para você. Aproveite e comece agora a acumular pontos!</p>
                    </div>

                </div>

            </div>
        </div>
    )

}
