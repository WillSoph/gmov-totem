export default function Header() {
    return (
        <>
            <div className="area">
                <video autoPlay={true} id="webCamera">
                </video>

                <input type="text" id="base_img" name="base_img" />
                <button type="button" onClick={() => takeSnapShot()}>Tirar foto e salvar</button>

                <img id="imagemConvertida" />
                <p id="caminhoImagem" className="caminho-imagem"><a href="" target="_blank"></a></p>

            </div>
        </>
    )
}