import React from 'react'

import Navbar from '../navbar/Navbar';
import NavSuperior from '../navbar/NavSuperior';
import Header from './header/Header'
import ApresentacaoPesquisa from '../home/apresentacaoPesquisa/ApresentacaoPesquisa';
import FrameInicial from '../home/frameIncial/FrameInicial'
import TextoContainer from '../home/textos/TextoContainer';
import SegundoTextoContainer from '../home/textos/SegundoTextoContainer';
import FilterCategoria from '../home/filterCategorias/FilterCategoria';
import Poema from '../home/poema/Poema';
import Noticias from '../home/noticias/Noticias';
import Contatos from '../home/contatos/Contatos';
import Duvidas from '../home/duvidas/Duvidas'
import Footer from '../footer/Footer'



import InicialCards from '../home/cards/InicialCards';
import SegundoFrame from './frameIncial/SegundoFrame';
import CarouselTextConclusao from './carousel/CarouselTextConclusao';
import TerceiroFrame from './frameIncial/TerceiroFrame';
import PrimeiroTextoContainer from './textos/PrimeiroTextoContainer';
import TextRunn from './runner/TextRunn';

export default function Index() {
  return (
    <div>
        <NavSuperior/>
        <Navbar/>
        <Header/>
        <InicialCards/>
        <TextRunn/>
        <ApresentacaoPesquisa/>
        <FrameInicial/>
        <PrimeiroTextoContainer/>
        <SegundoFrame/>
        <TextoContainer/>
        <FilterCategoria/>
        <SegundoTextoContainer/>
        <CarouselTextConclusao/>
        <TerceiroFrame/>
        <Noticias/>
        <Poema/>
        <Duvidas/>
        <Contatos/>
        <Footer/>

    </div>
  )
}
