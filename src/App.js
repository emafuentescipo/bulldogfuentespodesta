import logo from './logo.svg';
import logoNL from './imagenes/descarga.jpeg'
import './App.css';
import NavBar from './components/NavBar'

import ItemListContainer from './components/ItemListContainer'

import CardWidget from './components/CartWidget'

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
         
          <CardWidget icono={logoNL} />
          <ItemListContainer greeting='Nombre asdasdasd' />
       
      </header>
    </div>
  );
}

export default App;
