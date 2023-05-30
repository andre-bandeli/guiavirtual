import React from 'react'

import Navbar from '../navbar/Navbar';
import FrameInicial from '../home/frameIncial/FrameInicial'
import TextoContainer from '../home/textos/TextoContainer';
import SegundoTextoContainer from '../home/textos/SegundoTextoContainer';
import FilterCategoria from '../home/filterCategorias/FilterCategoria';
import Poema from '../home/poema/Poema';
import Noticias from '../home/noticias/Noticias';
import Contatos from '../home/contatos/Contatos';
import Duvidas from '../home/duvidas/Duvidas'
import Footer from '../footer/Footer'
import CarouselTextConclusao from './carousel/CarouselTextConclusao';
import PrimeiroTextoContainer from './textos/PrimeiroTextoContainer';
import Hero from './hero/Hero';
import PrimeiroTexto from './primeiroTexto/PrimeiroTexto';
import Frame3 from './frameIncial/Frame3';
import Frame2 from './frameIncial/Frame2';

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
        <PrimeiroTextoContainer/>
        <Frame2/>
        <TextoContainer/>
        <FilterCategoria/>
        <SegundoTextoContainer/>
        <CarouselTextConclusao/>
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
