import "./Tutorial.css"

import InstructionsIcon from "../../assets/instructions.png"


function Tutorial(){
    return(
        <main className="container">
            <div className="content-instructions">
                <h1 className="title">Instruções <img src={InstructionsIcon} alt="Ícone que representa as instruções" /> </h1>
                <ol className="instructions">
                    <li>Abra o relatório desejado no <a href="https://app.powerbi.com/">Power BI Service</a>.</li>
                    <li>Clique em "File" (Arquivo) no canto superior esquerdo.</li>
                    <li>Selecione "Publish to web" (Publicar na web).</li>
                    <li>Escolha as opções de publicação conforme necessário, como o período de atualização e a interatividade.</li>
                    <li>Clique em "Create" (Criar) e copie o código embed gerado.</li>
                </ol>
            </div>
            <div className="content-example">

            </div>
        </main>
    )
}

export default Tutorial