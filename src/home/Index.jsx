import React from 'react'

import Navbar from '../navbar/Navbar';
import FrameInicial from '../home/frameIncial/FrameInicial'
import FilterCategoria from '../home/filterCategorias/FilterCategoria';
import Poema from '../home/poema/Poema';
import Noticias from '../home/noticias/Noticias';
import Duvidas from '../home/duvidas/Duvidas'
import Footer from '../footer/Footer'
import CarouselTextConclusao from './carousel/CarouselTextConclusao';
import SegundoTexto from './segundoTexto/SegundoTexto';
import Hero from './hero/Hero';
import PrimeiroTexto from './primeiroTexto/PrimeiroTexto';
import Frame3 from './frameIncial/Frame3';
import Frame2 from './frameIncial/Frame2';
import TerceiroTexto from './terceiroTexto/TerceiroTexto';
import QuartoTexto from './quartoTexto/QuartoTexto';
import QuintoTexto from './quintoTexto/QuintoTexto';

export default function Index() {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main>
        <Hero/>
        <PrimeiroTexto/>
        <FrameInicial/>
        <SegundoTexto/>
        <Frame2/>
        <TerceiroTexto/>
        <FilterCategoria/>
        <QuartoTexto/>
        <QuintoTexto/>
        <Frame3/>
        <Noticias/>
        <Poema/>
        <Duvidas/>
      </main>

      <footer>
        <Footer/>
      </footer>

    </div>
  )
}
