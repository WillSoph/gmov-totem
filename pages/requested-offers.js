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
                    <p>Ofertas Solicitadas</p>
                </div>
                <div className={styles['tab-bar-offers']}>
                    <Link href="/offers"><a><button className="">Disponíveis</button></a></Link>
                    <Link href="/requested-offers"><a><button className="">Solicitadas</button></a></Link>
                </div>



                <div className={styles.offers}>
                    <div><FontAwesomeIcon icon="home" size="lg" color="black" className={styles['icon-menu']} /><b>Origem: </b>
                        <p>Angra dos Reis - RJ</p>
                    </div>
                    <div><FontAwesomeIcon icon="map-marked-alt" size="lg" color="black" className={styles['icon-menu']} /><b>Destino: </b>
                        <p>Jundiaí - SP</p>
                    </div>
                    <div><FontAwesomeIcon icon="truck-moving" size="lg" color="black" className={styles['icon-menu']} /><b>Veículo: </b>
                        <p>Rodotrem 8m-9e-74t</p>
                    </div>

                </div>

            </div>
        </div>
    )

}
