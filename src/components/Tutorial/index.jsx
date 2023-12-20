import "./Tutorial.css"

import InstructionsIcon from "../../assets/instructions.png"
import LogisticaDash from "../../assets/LogisticaDash.png"
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
                    <li>Clique em "File" (Arquivo) no canto superior esquerdo.</li>
                    <li>Selecione "Publish to web" (Publicar na web).</li>
                    <li>Escolha as opções de publicação conforme necessário, como o período de atualização e a interatividade.</li>
                    <li>Clique em "Create" (Criar) e copie o código embed gerado.</li>
                </ol>
            </div>
            <div className="content-example">
                <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide> <img src={LogisticaDash} alt="" /></SwiperSlide>           
                    <SwiperSlide> <img src={GlpiDash} alt="" /></SwiperSlide>           
            </Swiper>
            </div>
        </main>
    )
}

export default Tutorial