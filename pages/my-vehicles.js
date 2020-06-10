import Head from 'next/head'
import Link from 'next/link'
import styles from '../components/Home.module.css'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function MyVehicles() {

    return (
        <div className={styles.body}>
            <Head>
                <title>GMOV - Totem</title>
            </Head>
            <Header />
            <div className={styles.miolo}>
                <div className={styles['page-title']}>
                    <p>Meus Veículos</p>
                </div>

                <div className={styles.vehicle}>
                    <div><FontAwesomeIcon icon="truck" size="6x" color="#f5ba43" className={styles['icon-vehicle']} />
                        <div className={styles.divButton}>
                            <Link href="/add-vehicle"><button className={styles.defaultbutton} value="Confirmar">Adicionar</button></Link>
                        </div>
                    </div>

                </div>
                <div className={styles.myvehicles}>
                    <div className={styles.myvehiclesitem}><p className={styles.negrit}>Placa: </p>
                        <p>BUX8181</p>
                    </div>
                    <div className={styles.myvehiclesitem}><p className={styles.negrit}>Renavam: </p>
                        <p>00627065295</p>
                    </div>
                    <div className={styles.myvehiclesitem}><p className={styles.negrit}>Categoria: </p>
                        <p>Cavalo</p>
                    </div>
                    <div className={styles.myvehiclesitem}><p className={styles.negrit}>Descrição: </p>
                        <p>Caçamba Basculante 27-5 eix</p>
                    </div>

                </div>

            </div>
        </div>
    )

}
