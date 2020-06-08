import Head from 'next/head'
import Link from 'next/link'
import styles from '../components/Home.module.css'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function AddVehicles() {

    return (
        <div className={styles.body}>
            <Head>
                <title>GMOV - Totem</title>
            </Head>
            <Header />
            <div className={styles.miolo}>
                <div className={styles['page-title']}>
                    <p>Adicionar Veículos</p>
                </div>

                <div className={styles.vehicle}>
                    <div>
                        <div className={styles.divButton}>
                            <button className={styles.greentbutton} value="Confirmar">Novo Cavalo</button>
                            <button className={styles.greentbutton} value="Confirmar">Nova Carreta</button>
                        </div>
                    </div>

                </div>
                <div className={styles.addvehicle}>
                    <p>ou</p>
                </div>
                <div className={styles.addvehicle}>
                    <p>Já possui um veículo cadastrado em nossa base?<br />
                        Busque aqui para adicioná-lo à sua lista no app.</p>
                </div>
                <div className={styles.referencies}>
                    <label for="username">Placa do Veículo:</label><br></br>
                    <input type="text" id="refname" name="refname" /><br></br>
                    <button className={styles.defaultbutton}>Buscar</button>
                </div>

            </div>
        </div>
    )

}
