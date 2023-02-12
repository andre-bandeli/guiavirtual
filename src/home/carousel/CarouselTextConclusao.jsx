import React from 'react'
import './carouselText.scss'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import TitleContainer from '../titleContainer/TitleContainer'

import {segundoSlider} from './slidesCarousel'
import { useState } from 'react';


export default function CarouselTextConclusao() {


  const [inicialSlider] = useState(segundoSlider);
  return (
    <div className='carouselTextContainer'>
      <TitleContainer title="Concluindo"
        subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
      <div className='carouselTextContainer'>
        <Carousel className='carouselTextBootstrap' indicators={false}>
          {segundoSlider.map((d) => (
          <Carousel.Item className='carouselTextlItem' interval={10500}>
            <div className="carouselTextItemContentConclusao">
              <div className="textCarousel">
                <h3>
                  {d.texto}
                </h3>
              </div>

            </div>
          </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  )
}