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
                            <button className={styles.defaultbutton} value="Confirmar">Adicionar</button>
                        </div>
                    </div>

                </div>
                <div className={styles.offers}>
                    <div><b>Placa: </b>
                        <p>Angra dos Reis - RJ</p>
                    </div>
                    <div><b>Renavam: </b>
                        <p>Jundiaí - SP</p>
                    </div>
                    <div><b>Categoria: </b>
                        <p>Cavalo</p>
                    </div>
                    <div><b>Descrição: </b>
                        <p>Caçamba Basculante 27-5 eix</p>
                    </div>

                </div>

            </div>
        </div>
    )

}
