import './App.css';
import Header from './components/Header.jsx';
import { useClimate } from './hooks/climate';
import Main from './components/Main.jsx';

function App() {
  useClimate('Vitória');
  function searchCity() {
  }

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
