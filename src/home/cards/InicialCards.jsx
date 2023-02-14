import React from 'react'
import './InicialCards.scss'
import './responsive.css'
import pdf from '../../assets/pdf.webp'
import site from '../../assets/site.webp'
import { Link } from "react-router-dom";

export default function InicialCards() {
    const items = [{
            image: pdf,
            title: 'Ficha de notificação de violência Prefeitura Municipal de [...]',
            link: 'https://drive.google.com/file/d/1kaDFIrn55E6luXpnvfw8-q_bRFZiTRCE/view',
        },
        {
            image: site,
            title: 'Conheça mais sobre o grupo de pesquisa',
            link: '/sobre',
        },
        {
            image: pdf,
            title: 'Implementação de um ambulatório psicossocial para pessoas expostas [...]',
            link: 'https://drive.google.com/file/d/1XvfGG-lYGkEBrMO9L9AmFL_vr9uy3mGi/view?usp=sharing',
        },
        {
            image: site,
            title: 'Veja alguns destaques sobre o site e a pesquisa',
            link: '/destaques',
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