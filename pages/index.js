import Head from 'next/head'
import Link from 'next/link'
import styles from '../components/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from '../components/Header'


export default function Index() {
  return (
    <div className={styles.body}>
      <Head>
        <title>GMOV - Totem</title>
      </Head>
      <Header />
      <div className={styles.conteudo}>
        <Link href="/offers">
          <div className={styles.homeoffer}>
            <div className={styles.cardtitle}>
            </div>
            <div className={styles.cardcontent}>
              <FontAwesomeIcon icon="road" size="4x" color="#fff" />
              <h1>92</h1>
              <h4>Cargas Disponíveis</h4>
              <button className={styles.defaultbuttonHome}>Escolha a sua agora!</button>
            </div>
          </div>
        </Link>
        <Link href="/my-vehicles">
          <div className={styles.homeoffer}>
            <div className={styles.cardVeiclesTitle}>
            </div>
            <div className={styles.cardcontent}>
              <FontAwesomeIcon icon="truck-moving" size="4x" color="#fff" />
              <h1>Meus Veículos</h1>
              <h4>Consulte ou adicione novos</h4>
              <button className={styles.defaultbuttonHome}>Clique aqui!</button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
