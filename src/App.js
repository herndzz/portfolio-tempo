import './App.css';
import Header from './components/header.jsx';
import { useClimate } from './hooks/climate';

function App() {
  useClimate('Vitória');
  function searchCity() {
  }

  return (
    <div className="App">
      <Header/>
      <input placeholder='Digite sua cidade aqui!'></input>
      <button>Buscar</button>
      <p>Hello</p>
    </div>
  );
}

export default App;
