import React from 'react'

import Navbar from '../components/navbar/Navbar';
import FilterCategoria from './index_components/filterCategorias/FilterCategoria';
import Poema from './index_components/poema/Poema';
import Noticias from './index_components/noticias/Noticias';
import Duvidas from './index_components/duvidas/Duvidas'
import Footer from '../components/footer/Footer'
import CarouselTextConclusao from './index_components/carousel/CarouselTextConclusao';
import SegundoTexto from './index_components/segundoTexto/SegundoTexto';
import Hero from './index_components/hero/Hero';
import PrimeiroTexto from './index_components/primeiroTexto/PrimeiroTexto';
import Frame3 from './index_components/frame/Frame3';
import Frame2 from './index_components/frame/Frame2';
import TerceiroTexto from './index_components/terceiroTexto/TerceiroTexto';
import QuartoTexto from './index_components/quartoTexto/QuartoTexto';
import QuintoTexto from './index_components/quintoTexto/QuintoTexto';
import Frame1 from './index_components/frame/Frame1';

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
