import axios from "axios";
import { useState, useEffect } from "react";
import Bloc from "./Bloc";
import key from "../token";

export default function Search() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState('');

  //O UseEffect sempre será chamado quando ocorrer alguma mudança na variável 'city'.
  useEffect(() => {
    const fetchData = async () => { //Função assíncrona para evitar possíveis erros de variáveis 'indefinidas'. Salvo em uma constante.
      try {
        const res = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`);
        setData(res.data); //Salva o estado da variável data.
      } catch (err) {
        console.error('Erro ao buscar dados da API:', err);
        // Aqui você pode definir um estado de erro e mostrar uma mensagem de erro ao usuário.
      }
    };

    fetchData(); // Chamada de função.
  }, [city]); 

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="container">
      <input placeholder='Digite sua cidade aqui!' value={city} onChange={handleCityChange}/>
      <button>Buscar</button>
      {data ? ( <Bloc data={data} /> ) : (
        // Adicione uma mensagem de carregamento ou erro aqui.
        <p>Tente fazer uma pesquisa ou aguarde alguns segundos...</p>
      )}
    </div>
  );
}