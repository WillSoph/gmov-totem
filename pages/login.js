import Head from 'next/head'
import Link from 'next/link'
import styles from '../components/Home.module.css'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Login() {

    return (
        <div className={styles.body}>
            <Head>
                <title>GMOV - Totem</title>
            </Head>
            <div className={styles.miolologin}>
                <div id={styles.logologin}>
                    <Link href="/index"><a><img src="assets/images/logo/logo-painel.svg" /></a></Link>
                </div>
                <div className={styles.loginpage}>
                    <label htmlFor="username">CPF</label><br></br>
                    <input type="text" id="refname" name="refname" /><br></br>
                    <label htmlFor="username">Senha</label><br></br>
                    <input type="text" id="refname" name="refname" /><br></br>
                    <Link href="/"><button className={styles.defaultbutton2}>Entrar</button></Link><br></br>
                    <button className={styles.cadastrobutton}>Cadastre-se</button>
                </div>

            </div>
        </div >
    )

}
