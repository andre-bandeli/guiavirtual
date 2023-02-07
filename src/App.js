import './App.css';
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
    </div>
  );
}

export default App;
