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
                    <p>Adicionando Novo Cartão</p>
                </div>

                <div className={styles.cardlist}>
                    <FontAwesomeIcon icon="credit-card" size="6x" color="#f5ba43" className={styles['icon-menu']} />
                    <p>Digite os 4 ÚLTIMOS dígitos do seu cartão.</p>

                    <div className={` ${['user-edit']} ${styles.useropt}`} id='dadospessoais'>
                        <form id={styles.userForm}>
                            <label htmlFor="name">xxxx xxxx xxxx</label>
                            <input type="text" name="Nome" placeholder="0000" />
                            <label htmlFor="name">Nome do titular no cartão</label>
                            <input type="text" name="Nome" />
                        </form>
                    </div>

                    <div className={styles.divButton}>
                        <Link href="/add-card">
                            <button className={styles.defaultbutton} value="Confirmar">Salvar</button>
                        </Link>
                    </div>
                    <div className={styles.divButton}>
                        <Link href="/card-list">
                            <button className={styles.cancelbutton} value="Confirmar">Voltar</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )

}
