import './App.css';
import { Route, Routes, useLocation } from "react-router-dom"
import React, { useEffect } from 'react';

import Index from './pages/Index.jsx'
import Sobre from './pages/Sobre.jsx'
// import SaudeColetiva from './pages/saudeColetiva.jsx'
// import Noticias from './pages/Noticias.jsx'
// import Contatos from './pages/Contatos.jsx'



function App() {

  
  const location = useLocation();

  useEffect(() => {
    let title = '';
    switch (location.pathname) {
      case '/sobre':
        title = 'Sobre a Pesquisa';
        break;
      // case '/gravacoes':
      //   title = 'Gravações';
      //   break;
      // case '/noticias':
      //   title = 'Noticias';
      //   break;
      // case '/saudecoletiva':
      //   title = 'Saúde Coletiva';
      //   break;
      // case '/contatos':
      //   title = 'Contatos';
      //   break;
      // case '/destaques':
      //   title = 'Destaques';
      //   break;
      
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
        {/* <Route path="/saudecoletiva" element={<SaudeColetiva />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/contatos" element={<Contatos />} /> */}
      </Routes>
    );

}

export default App;
