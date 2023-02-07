import React from 'react'
import './header.scss'
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
            <Carousel.Item className='carouselItem' interval={3500}>
              <img
                src={d.imgSrc}
              />
              <div className="carouselItemContent">
                  <h1>{d.primeiroTexto}</h1>
                  <h2>{d.segundoTexto}</h2>
                  <a href="#produtos">
                  <button className='btn-header'>
                    ver ofertas
                  </button> </a>
                </div>
            </Carousel.Item>
          ))}
      </Carousel>
      </div>
    </div>
  )
}