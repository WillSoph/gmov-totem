import Link from 'next/link'
import styles from '../components/Home.module.css'
import Menu from '../components/Menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
    return (
        <>
            <Menu />
            <div className={styles.header}>
                <div id={styles.logo}>
                    <Link href="/index"><a><img src="assets/images/logo/logo-painel.svg" /></a></Link>
                </div>
                <div><FontAwesomeIcon icon="comment" size="3x" color="white" className={styles['top-icons']} /></div>
                <div><Link href="complete-information"><FontAwesomeIcon icon="bell" size="3x" color="white" className={styles['top-icons']} /></Link></div>

            </div>
            <div id={styles.greetings}>
                <p>Bem-Vindo João</p>
            </div>
            <div id={styles.usericon}>
                <Link href="/edit-user"><a>
                    <FontAwesomeIcon icon="user" size="2x" color="white" />
                </a></Link>
            </div>
        </>
    )
}