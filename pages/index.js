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
        <div>
          <FontAwesomeIcon icon="truck" size="3x" color="#53a4cf" />
          <h1>92</h1>
          <h4>Cargas Disponíveis</h4>
          <span>Clique para ver</span>
        </div>
        <Link href="/prizes">
          <div>
            <FontAwesomeIcon icon="trophy" size="3x" color="#53a4cf" />
            <h1>12850</h1>
            <h4>Pontos Disponíveis</h4>
            <span>Clique para usar</span>
          </div>
        </Link>
        <div>
          <FontAwesomeIcon icon="question-circle" size="3x" color="#53a4cf" />
          <h1>Dúvidas</h1>
          <h4>Abra um chamado</h4>
          <span>Clique para conversar</span>
        </div>
        <div>
          <FontAwesomeIcon icon="wallet" size="3x" color="#53a4cf" />
          <h1>Saldo</h1>
          <h4>Nos cartões cadastrados</h4>
          <span>Clique para ver</span>
        </div>
      </div>
    </div>
  )
}
