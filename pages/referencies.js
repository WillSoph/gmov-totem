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
                    <p>Referências Profissionais</p>
                </div>

                <div className={styles.referencies}>
                    <label for="username">Nome Completo:</label><br></br>
                    <input type="text" id="refname" name="refname" /><br></br>
                    <label for="pwd">Telefone:</label><br></br>
                    <input type="text" id="tel" name="pwteld" /><br></br><br></br>
                </div>
                <div className={styles['page-title']}>
                    <p>Referências Pessoais</p>
                </div>
                <div className={styles.referencies}>
                    <label for="username">Nome Completo:</label><br></br>
                    <input type="text" id="refname" name="refname" /><br></br>
                    <label for="pwd">Telefone:</label><br></br>
                    <input type="text" id="tel" name="pwteld" /><br></br><br></br>
                    <button className={styles.defaultbutton}>Salvar</button>
                </div>


            </div>
        </div>
    )

}
