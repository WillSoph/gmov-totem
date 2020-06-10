import Link from 'next/link'
import styles from '../components/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Menu() {
    // function opacityBack() {
    //     document.querySelector('.background-content').style.opacity = "0.2"
    // }
    // function backOpacity() {
    //     document.querySelector('.background-content').style.opacity = "1.0"
    // }
    return (
        <>

            <input type="checkbox" id={styles.checkmenu} />
            <label htmlFor={styles.checkmenu}>
                <FontAwesomeIcon icon="bars" size="2x" id={styles.btnmenu} color="white" className={styles['top-icons']} />
                <FontAwesomeIcon icon="times" size="2x" id={styles.cancelmenu} color="white" className={styles['top-icons']} />

            </label>
            <div className={styles.sidebar}>
                <div className={styles['menu-header']}>
                    <img src="assets/images/logo/logo-painel.svg" />
                    <p>Willians Ferreira</p>
                    <p>willians.ferreira@logisticag2l.com.br</p>
                    <p>Versão: 2.0.4</p>
                </div>
                <ul>
                    <li><Link href="/"><a><FontAwesomeIcon icon="home" size="lg" color="white" className={styles['icon-menu']} />HOME</a></Link></li>
                    <li><a href="/interest-region"><FontAwesomeIcon icon="map-marked" size="lg" color="white" className={styles['icon-menu']} />REGIÃO DE INTERESSE</a></li>
                    <li><a href="/my-vehicles"><FontAwesomeIcon icon="truck-moving" size="lg" color="white" className={styles['icon-menu']} />VEÍCULOS</a></li>
                    <li><Link href="/offers"><a><FontAwesomeIcon icon="truck-loading" size="lg" color="white" className={styles['icon-menu']} />OFERTAS DE FRETES</a></Link></li>
                    <li><a href="/card-list"><FontAwesomeIcon icon="wallet" size="lg" color="white" className={styles['icon-menu']} />SALDO DOS CARTÕES</a></li>
                    <li><a href="/login"><FontAwesomeIcon icon="sign-out-alt" size="lg" color="white" className={styles['icon-menu']} />SAIR</a></li>
                </ul>
            </div>

        </>
    )
}