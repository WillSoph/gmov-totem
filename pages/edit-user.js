import Head from 'next/head'
import styles from '../components/Home.module.css'
import Header from '../components/Header'


export default function EditUser() {

    return (
        <div className={styles.body}>
            <Head>
                <title>GMOV - Totem</title>
            </Head>
            <Header />
            <div className={styles.miolo}>
                {/* <div className={styles['tab-bar']}>
                    <button className="" onClick={() => openCity('dadospessoais')}>Dados Pessoais</button>

                    <button className="" onClick={() => openCity('documentos')}>Documentos</button>

                </div> */}
                <div className={` ${['user-edit']} ${styles.useropt}`} id='dadospessoais'>
                    <form id={styles.userForm}>
                        <label htmlFor="name">Nome Completo</label>
                        <input type="text" name="Nome" />
                        <label htmlFor="name">Celular</label>
                        <input type="text" name="Nome" />
                        <label htmlFor="name">Data de Nascimento</label>
                        <input type="text" name="Nome" />
                        <label htmlFor="name">Email</label>
                        <input type="text" name="Nome" />
                        <label htmlFor="name">PIS</label>
                        <input type="text" name="Nome" />
                        <button id="saveUser">Salvar</button>
                    </form>
                </div>
            </div>
            <style jsx>{`
        #documentos {
            display:block;
            top:27vh;
        }
      `}</style>
        </div>
    )

}
