import './App.css';
import ApresentacaoPesquisa from './home/apresentacaoPesquisa/ApresentacaoPesquisa';
import InicialCards from './home/cards/InicialCards';
import Header from './home/header/Header';
import Navbar from './navbar/Navbar';
import NavSuperior from './navbar/NavSuperior';

function App() {
  return (
    <div className="App">
      <NavSuperior/>
      <Navbar/>
      <header className="App-header">
        <Header/>
      </header>
      <InicialCards/>
      <ApresentacaoPesquisa/>
    </div>
  );
}

export default App;
