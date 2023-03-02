import './App.css';
import { Route, Routes, useLocation } from "react-router-dom"
import React, { useEffect } from 'react';


// import ApresentacaoPesquisa from './home/apresentacaoPesquisa/ApresentacaoPesquisa';
// import InicialCards from './home/cards/InicialCards';
// import Header from './home/header/Header';
// import Navbar from './navbar/Navbar';
// import FrameInicial from './home/frameIncial/FrameInicial'
// import NavSuperior from './navbar/NavSuperior';
// import CarouselText from './home/carousel/CarouselText';
// import FilterCategoria from './home/filterCategorias/FilterCategoria';
// import TextoContainer from './home/textos/TextoContainer';
// import Noticias from './home/noticias/Noticias';
// import Footer from './footer/Footer'
// import Poema from './home/poema/Poema';
// import Contatos from './home/contatos/Contatos';
// import Duvidas from './home/duvidas/Duvidas'

import Index from './home/Index';
import Sobre from './sobre/Sobre'
import Gravacoes from './gravacoes/Gravacoes';
import SaudeColetiva from './saudeColetiva/SaudeColetiva';
import Noticias from './noticias/Noticias';
import Contatos from './contatos/Contatos';
import Destaques from './destaques/Destaques';

function App() {

  
  const location = useLocation();

  useEffect(() => {
    let title = '';
    switch (location.pathname) {
      case '/sobre':
        title = 'Sobre a Pesquisa';
        break;
      case '/gravacoes':
        title = 'Gravações';
        break;
      case '/noticias':
        title = 'Noticias';
        break;
      case '/saudecoletiva':
        title = 'Saúde Coletiva';
        break;
      case '/contatos':
        title = 'Contatos';
        break;
      case '/destaques':
        title = 'Destaques';
        break;
      
      default:
        title = 'Guia Virtual de Atendimento';
        break;
    }
    document.title = title;
  }, [location]);


  return (
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/gravacoes" element={<Gravacoes />} />
        <Route path="/saudecoletiva" element={<SaudeColetiva />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/contatos" element={<Contatos />} />
        <Route path="/destaques" element={<Destaques />} />
      </Routes>
    );
  //   <div className="App">
  //     <NavSuperior/>
  //     <Navbar/>
  //     <header className="App-header">
  //       <Header/>
  //     </header>
  //     <InicialCards/>
  //     <ApresentacaoPesquisa/>
  //     <FrameInicial/>
  //     <CarouselText/>
  //     <FrameInicial/>
  //     <TextoContainer/>
  //     <FilterCategoria/>
  //     <TextoContainer/>
  //     <FrameInicial/>
  //     <CarouselText/>
  //     <Noticias/>
  //     <Duvidas/>
  //     <Poema/>
  //     <Contatos/>
  //     <Footer/>
  //   </div>
  // );
}

export default App;
