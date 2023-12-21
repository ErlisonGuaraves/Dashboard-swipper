import "./Tutorial.css"

import InstructionsIcon from "../../assets/instructions.png"
import LogisticaDash from "../../assets/logisticaDash.png"
import GlpiDash from "../../assets/glpiDash.png"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';


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
                    <li>Abra o relatório desejado no <a href="https://app.powerbi.com/"  >Power BI Service</a>.</li>
                    <li>Clique em "Ficheiro" (Arquivo) no canto superior esquerdo.</li>
                    <li>Selecione "Codigo Incorporado".</li>
                    <li>Escolha as opções de publicação conforme necessário, como o período de atualização e a interatividade.</li>
                    <li>Copie o código que inicia com {`<iframe>`}</li>
                </ol>
            </div>
            <div className="content-example">
               
            </div>
        </main>
    )
}

export default Tutorial