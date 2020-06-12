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
                <div><Link href="/completeInformation"><a><FontAwesomeIcon icon="bell" size="3x" color="white" className={styles['top-icons']} /></a></Link></div>

            </div>
            <div id={styles.greetings}>
                <div className={styles.userHome}>
                    <Link href="/edit-user"><a>
                        <FontAwesomeIcon icon="user" size="sm" color="white" className={styles.greetingsIcon} /><span>Bem-Vindo João</span>
                    </a></Link>
                </div>
                <div className={styles.userHome}>
                    <Link href="/card-list"><a>
                        <FontAwesomeIcon icon="trophy" size="sm" color="white" className={styles.greetingsIcon} /><span>12850 Pontos</span>
                    </a></Link>
                </div>
                <div className={styles.userHome}>
                    <Link href="/card-list"><a>
                        <FontAwesomeIcon icon="wallet" size="sm" color="white" className={styles.greetingsIcon} /><span>Saldo</span>
                    </a></Link>
                </div>
            </div>
        </>
    )
}