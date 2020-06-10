import Head from 'next/head'
import Link from 'next/link'
import styles from '../components/Home.module.css'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function NewCavalo() {

    return (
        <div className={styles.body}>
            <Head>
                <title>GMOV - Totem</title>
            </Head>
            <Header />
            <div className={styles.miolo}>
                <div className={styles['page-title']}>
                    <p>Adicionar Carreta</p>
                </div>
                <div className={styles.referencies}>
                    <label htmlFor="username">Tipo do Veículo:</label><br></br>
                    <input type="text" id="refname" name="refname" /><br></br>
                    <label htmlFor="username">Quantidade de Eixos:</label><br></br>
                    <input type="text" id="refname" name="refname" /><br></br>
                    <label htmlFor="username">Placa do Veículo:</label><br></br>
                    <input type="text" id="refname" name="refname" /><br></br>
                    <label htmlFor="username">Nome do proprietário - CRLV:</label><br></br>
                    <input type="text" id="refname" name="refname" /><br></br>
                    <label htmlFor="username">Renavam - CRLV:</label><br></br>
                    <input type="text" id="refname" name="refname" /><br></br>
                    <label htmlFor="username">CPF / CNPJ - ANTT:</label><br></br>
                    <input type="text" id="refname" name="refname" /><br></br>
                    <label htmlFor="username">RNTRC - ANTT:</label><br></br>
                    <input type="text" id="refname" name="refname" /><br></br>

                    <button className={styles.cancelbutton2}><FontAwesomeIcon icon="camera-retro" size="lg" color="#fff" className={styles.camera} />Clique para enviar sua CRLV</button>
                    <button className={styles.cancelbutton2}><FontAwesomeIcon icon="camera-retro" size="lg" color="#fff" className={styles.camera} />Clique para enviar sua ANTT</button>
                    <Link href="/add-vehicle"><button className={styles.cancelbutton3}>Cancelar</button></Link>
                    <button className={styles.defaultbutton}>Salvar</button>
                </div>

            </div>
        </div>
    )

}
