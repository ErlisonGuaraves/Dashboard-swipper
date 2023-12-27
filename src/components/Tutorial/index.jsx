import React from 'react';

// assets
import InstructionsIcon from "../../assets/instructions.png"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./Tutorial.css"

function Tutorial(){

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };

    return(
        <main id="container">
            <div className="content-instructions">
                <h1 className="title">Instruções <img src={InstructionsIcon} alt="Ícone que representa as instruções" /> </h1>
                <ol className="instructions">
                    <li>Abra o relatório desejado no <a href="https://app.powerbi.com/" target="_blank" >Power BI Service</a>.</li>
                    <li>Clique em "Ficheiro" (Arquivo) no canto superior esquerdo.</li>
                    <li>Selecione "Codigo Incorporado".</li>
                    <li>Escolha as opções de publicação conforme necessário, como o período de atualização e a interatividade.</li>
                    <li>Copie o código que inicia com {`<iframe>`}</li>
                </ol>
            </div>
        </main>
    )
}

export default Tutorial