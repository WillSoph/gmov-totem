import Head from 'next/head'
import Link from 'next/link'
import styles from '../components/Home.module.css'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Register1() {

    return (
        <div className={styles.body}>
            <Head>
                <title>GMOV - Totem</title>
            </Head>
            <Header />
            <div className={styles.mioloRegister}>
                <div className={styles['page-title']}>
                    <p>Cadastro</p>
                </div>
                <div className={styles.referencies}>
                    <button onClick={() => loadCamera()} className={styles.photoButton}><FontAwesomeIcon icon="camera-retro" size="lg" color="#fff" className={styles.camera} />Clique para enviar sua CNH</button>
                    <div className={styles.area}>
                        <video autoPlay={true} id='webCamera'>
                        </video>

                        <input type="text" id='base_img' name="base_img" />
                        <button type="button" onClick={() => takeSnapShot()}>Tirar foto e salvar</button>

                        <img id={styles.imagemConvertida} />
                        <p id={styles.caminhoImagem} className={['caminho-imagem']}><a href="" target="_blank"></a></p>

                    </div>
                </div>

                <form id={styles.registerForm}>
                    <div className={styles.registerName}><label htmlFor="name">Nome Completo</label><br></br>
                        <input type="text" name="Nome" /></div>
                    <div><label htmlFor="name">Celular</label><br></br>
                        <input type="text" name="Nome" /></div>
                    <div><label htmlFor="name">Data de Nascimento</label>
                        <input type="text" name="Nome" /></div>
                    <div><label htmlFor="name">PIS</label>
                        <input type="text" name="Nome" /></div>
                    <div><label htmlFor="name">CPF</label>
                        <input type="text" name="Nome" /></div>
                    <div><label htmlFor="name">Senha</label>
                        <input type="text" name="Nome" /></div>
                    <div><label htmlFor="name">Confirmar Senha</label>
                        <input type="text" name="Nome" /></div>
                </form>

                {/* <button className={styles.cancelbutton2}><FontAwesomeIcon icon="camera-retro" size="lg" color="#fff" className={styles.camera} />Clique para enviar sua CNH (verso)</button> */}
                <Link href="/add-vehicle"><button className={styles.cancelbutton3}>Cancelar</button></Link>
                <Link href="/register-2"><button className={styles.defaultbutton}>Próximo</button></Link>

            </div>
        </div>
    )

    function loadCamera() {
        //Captura elemento de vídeo
        var video = document.querySelector("#webCamera");
        //As opções abaixo são necessárias para o funcionamento correto no iOS
        video.setAttribute('autoplay', '');
        video.setAttribute('muted', '');
        video.setAttribute('playsinline', '');
        //--

        //Verifica se o navegador pode capturar mídia
        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ audio: false, video: { facingMode: 'user' } })
                .then(function (stream) {
                    //Definir o elemento víde a carregar o capturado pela webcam
                    video.srcObject = stream;
                })
                .catch(function (error) {
                    alert("Oooopps... Falhou :'(");
                });
        }
    }

    function takeSnapShot() {
        //Captura elemento de vídeo
        var video = document.querySelector("#webCamera");
        //Criando um canvas que vai guardar a imagem temporariamente
        var canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        var ctx = canvas.getContext('2d');

        //Desnehando e convertendo as minensões
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        //Criando o JPG
        var dataURI = canvas.toDataURL('image/jpeg'); //O resultado é um BASE64 de uma imagem.
        document.querySelector("#base_img").value = dataURI;

        sendSnapShot(dataURI); //Gerar Imagem e Salvar Caminho no Banco
    }

    function sendSnapShot(base64) {
        var request = new XMLHttpRequest();
        request.open('POST', './save_photos.php', true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

        request.onload = function () {
            console.log(request);
            if (request.status >= 200 && request.status < 400) {
                //Colocar o caminho da imagem no SRC
                var data = JSON.parse(request.responseText);

                //verificar se houve erro
                if (data.error) {
                    alert(data.error);
                    return false;
                }

                //Mostrar informações
                document.querySelector("#imagemConvertida").setAttribute("src", data.img);
                document.querySelector("#caminhoImagem a").setAttribute("href", data.img);
                document.querySelector("#caminhoImagem a").innerHTML = data.img.split("/")[1];
            } else {
                alert("Erro ao salvar. Tipo:" + request.status);
            }
        };

        request.onerror = function () {
            alert("Erro ao salvar. Back-End inacessível.");
        }

        request.send("base_img=" + base64); // Enviar dados
    }



}

