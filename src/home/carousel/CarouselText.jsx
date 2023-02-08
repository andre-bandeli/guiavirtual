import React from 'react'
import './carouselText.scss'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import TitleContainer from '../titleContainer/TitleContainer'

import {primeiroSlider} from './slidesCarousel'
import { useState } from 'react';


export default function CarouselText() {


  const [inicialSlider] = useState(primeiroSlider);
  return (
    <div className='carouselTextContainer'>
      <TitleContainer 
            title="Título da pesquisa" 
            subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
      <div className='carouselTextContainer'>
      <Carousel className='carouselTextBootstrap' indicators={false}>
          {inicialSlider.map((d) => (
            <Carousel.Item className='carouselTextlItem' interval={10500}>
                <div className="carouselTextItemContent">
                    <div className="imagemCarousel">
                      <img src={d.imgSrc} alt="" />
                    </div>
                    <div className="textCarousel">
                        <h3>
                            It is a long established fact that a reader will be distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of 
                            letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop
                            publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem 
                            ipsum' will uncover many web sites still
                            in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose 
                            (injected humour and the like).
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