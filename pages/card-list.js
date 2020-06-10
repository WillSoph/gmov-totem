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
                    <p>Meus Cartões</p>
                </div>

                <div className={styles.cardlist}>
                    <FontAwesomeIcon icon="credit-card" size="6x" color="#f5ba43" className={styles['icon-menu']} />
                    <p>Você ainda não tem um cartão na sua conta. Adicione agora mesmo.</p>

                    <div className={styles.divButton}>
                        <Link href="/add-card"><a>
                            <button className={styles.greentbutton} value="Confirmar">Adicionar</button></a>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )

}
