import React from 'react'

import Navbar from '../navbar/Navbar';
import FilterCategoria from '../home/filterCategorias/FilterCategoria';
import Poema from '../home/poema/Poema';
import Noticias from '../home/noticias/Noticias';
import Duvidas from '../home/duvidas/Duvidas'
import Footer from '../footer/Footer'
import CarouselTextConclusao from './carousel/CarouselTextConclusao';
import SegundoTexto from './segundoTexto/SegundoTexto';
import Hero from './hero/Hero';
import PrimeiroTexto from './primeiroTexto/PrimeiroTexto';
import Frame3 from './frame/Frame3';
import Frame2 from './frame/Frame2';
import TerceiroTexto from './terceiroTexto/TerceiroTexto';
import QuartoTexto from './quartoTexto/QuartoTexto';
import QuintoTexto from './quintoTexto/QuintoTexto';
import Frame1 from './frame/Frame1';

export default function Index() {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main>
        <Hero/>
        <PrimeiroTexto/>
        <Frame1/>
        <SegundoTexto/>
        <Frame2/>
        <TerceiroTexto/>
        <FilterCategoria/>
        <QuartoTexto/>
        <QuintoTexto/>
        <Frame3/>
        <Noticias/>
        <Duvidas/>
      </main>

      <footer>
        <Footer/>
      </footer>

    </div>
  )
}
