import React from 'react'
import './header.scss'
import './responsive.css'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import {primeiroSlider} from './slides'
import { useState } from 'react';


export default function Header() {


  const [inicialSlider] = useState(primeiroSlider);
  return (
    <div className='headerContainer'>
      <div className='carouselContainer'>
      <Carousel className='carouselBootstrap' indicators={false}>
          {inicialSlider.map((d) => (
            <Carousel.Item className='carouselItem' interval={2500}>
              <img
                src={d.imgSrc} alt={d.imgAlt}
              />
              <div className="carouselItemContent">
                  <h1>{d.primeiroTexto}</h1>
                  <h2>{d.segundoTexto}</h2>
 
                  <button className='btn-header'>
                    <a href={d.link}>ver mais</a>
                  </button> 
                </div>
            </Carousel.Item>
          ))}
      </Carousel>
      </div>
    </div>
  )
}