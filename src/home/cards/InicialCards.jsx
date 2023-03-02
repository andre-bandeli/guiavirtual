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
            target_link: '_blank',
        },
        {
            image: site,
            title: 'Conheça mais sobre o grupo de pesquisa',
            link: '/sobre',
            target_link: '_self',
        },
        {
            image: pdf,
            title: 'Leia a Dissertação completa clicando aqui',
            link: 'https://drive.google.com/file/d/191Bag34rct0145eot2atPMyiq7J5TMXk/view?usp=sharing',
            target_link: '_blank'
        },
        {
            image: site,
            title: 'Veja alguns destaques sobre o site e a pesquisa',
            link: '/destaques',
            target_link: '_self'
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
                    <Link to={item.link} target={item.target_link} >{item.title}</Link>
                </div>
                  
              </div>
              ))}
          </div>
      </div>
      );
}