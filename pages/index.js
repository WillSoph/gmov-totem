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
          <div>
            <FontAwesomeIcon icon="truck" size="3x" color="#53a4cf" />
            <h1>92</h1>
            <h4>Cargas Disponíveis</h4>
            <span>Escolha a sua agora!</span>
          </div>
        </Link>
        <Link href="/prizes">
          <div>
            <FontAwesomeIcon icon="trophy" size="3x" color="#53a4cf" />
            <h1>12850</h1>
            <h4>Pontos</h4>
            <span>Troque por prêmios!</span>
          </div>
        </Link>
        <Link href="/prizes">
          <div>
            <FontAwesomeIcon icon="question-circle" size="3x" color="#53a4cf" />
            <h1>Dúvidas</h1>
            <h4>Precisa de uma ajuda do suporte?</h4>
            <span>Toque aqui para conversar</span>
          </div>
        </Link>
        <Link href="/card-list">
          <div>
            <FontAwesomeIcon icon="wallet" size="3x" color="#53a4cf" />
            <h1>Saldo</h1>
            <h4>Seu saldo em tempo real!</h4>
            <span>Consulte agora!</span>
          </div>
        </Link>
      </div>
    </div>
  )
}
