import "./Tutorial.css"

import InstructionsIcon from "../../assets/instructions.png"


import React, { useRef, useState } from 'react';


import 'swiper/css';
import 'swiper/css/pagination';



function Tutorial(){

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };

    return(
            <div className="content-instructions">
                <h1 className="title">Instruções Para Criar Sua Apresentação <img src={InstructionsIcon} alt="Ícone que representa as instruções" /> </h1>
                <ol className="instructions">
                    <li>Abra o relatório desejado no <a href="https://app.powerbi.com/" target="_blank" >Power BI Service</a> Copie o código que inicia com {`<iframe>`}.</li>
                    <li>Clique No botão + para Criar Apresentação</li>
                    <li>Vá em Dashboards</li>
                    <li>Clique em Apresentar</li>
                </ol>
            </div>
    )
}

export default Tutorial;