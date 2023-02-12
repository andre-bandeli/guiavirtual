import React from 'react'
import './InicialCards.scss'
import coracao from './coracao.png'
import pdf from './pdf.png'
import { Link } from "react-router-dom";

export default function InicialCards() {
    const items = [{
            image: pdf,
            title: 'Protocolo do fluxo intersetorial de atendimento [...]',
            link: '/',
        },
        {
            image: pdf,
            title: 'Protocolo do fluxo intersetorial de atendimento [...]',
            link: '/',
        },
        {
            image: pdf,
            title: 'Protocolo do fluxo intersetorial de atendimento [...]',
            link: '/',
        },
        {
            image: pdf,
            title: 'Protocolo do fluxo intersetorial de atendimento [...]',
            link: '/',
        },
    ];
  
    return (
      <div className="containerCards">
          <div className="InicialCards">
              {items.map((item, index) => (
              <div key={index} className="boxInicial">
                <div className="imagem">
                    <img src={item.image} alt="" />
                </div>
                <div className="texto">
                    <Link to={item.link}>{item.title}</Link>
                </div>
                  
              </div>
              ))}
          </div>
      </div>
      );
}