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
                    <p>Complete seu cadastro</p>
                </div>
                <div className={styles.information}>
                    <p>Consulte abaixo os itens que necessitam ser atualizados.</p>
                </div>
                <div className={styles.divButton}>
                    <button className={styles.defaultbutton}>Cadastro de Referências Profissionais</button>
                    <Link href="/"><button className={styles.cancelbutton} value="Confirmar">Cancelar</button></Link>
                </div>


            </div >
        </div >
    )

}
