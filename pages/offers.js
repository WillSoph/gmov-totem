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
                    <p>Ofertas</p>
                </div>
                <div className={styles['tab-bar-offers']}>
                    <Link href="/offers"><a><button className="">Disponíveis</button></a></Link>
                    <Link href="/requested-offers"><a><button className="">Solicitadas</button></a></Link>
                </div>

                <div className={` ${styles['form-edit']} ${styles.offersopt}`} id={styles.Disponiveis}>
                    <form id={styles.userForm}>
                        <label htmlFor="name">Estado de Origem</label>
                        <select>
                            <option selected="" value="">Selecione o Estado (UF)</option>
                            <option value="Acre">Acre</option>
                            <option value="Alagoas">Alagoas</option>
                            <option value="Amapá">Amapá</option>
                            <option value="Amazonas">Amazonas</option>
                            <option value="Bahia">Bahia</option>
                            <option value="Ceará">Ceará</option>
                            <option value="Distrito Federal">Distrito Federal</option>
                            <option value="Espírito Santo">Espírito Santo</option>
                            <option value="Goiás">Goiás</option>
                            <option value="Maranhão">Maranhão</option>
                            <option value="Mato Grosso">Mato Grosso</option>
                            <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                            <option value="Minas Gerais">Minas Gerais</option>
                            <option value="Pará">Pará</option>
                            <option value="Paraíba">Paraíba</option>
                            <option value="Paraná">Paraná</option>
                            <option value="Pernambuco">Pernambuco</option>
                            <option value="Piauí">Piauí</option>
                            <option value="Rio de Janeiro">Rio de Janeiro</option>
                            <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                            <option value="Rio Grande do Norte">Rio Grande do Norte</option>
                            <option value="Rondônia">Rondônia</option>
                            <option value="Roraima">Roraima</option>
                            <option value="Santa Catarina">Santa Catarina</option>
                            <option value="São Paulo">São Paulo</option>
                            <option value="Sergipe">Sergipe</option>
                            <option value="Tocantins">Tocantins</option>
                        </select>
                        <label htmlFor="name">Estado de Destino</label>
                        <select>
                            <option>Rio de Janeiro</option>
                        </select>
                    </form>

                    <div className={styles.offers}>
                        <div><FontAwesomeIcon icon="home" size="lg" color="black" className={styles['icon-menu']} /><b>Origem: </b>
                            <p>Angra dos Reis - RJ</p>
                        </div>
                        <div><FontAwesomeIcon icon="map-marked-alt" size="lg" color="black" className={styles['icon-menu']} /><b>Destino: </b>
                            <p>Jundiaí - SP</p>
                        </div>
                        <div><FontAwesomeIcon icon="truck-moving" size="lg" color="black" className={styles['icon-menu']} /><b>Veículo: </b>
                            <p>Rodotrem 8m-9e-74t</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )

}
