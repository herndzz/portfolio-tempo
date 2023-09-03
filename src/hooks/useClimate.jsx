/*import axios from "axios";
import { useState } from "react";

//O UseEffect sempre será chamado quando ocorrer alguma mudança na variável 'city'.
export default async function fetchData(city){ //Função assíncrona para evitar possíveis erros de variáveis 'indefinidas'. Salvo em uma constante.
    const [data, setData] = useState(null);
    const key = '80c7f5de9f4d4cd295d182750231608'; // Minha chave da API.
    
    try {
        const res = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`);
        setData(res.data); //Salva o estado da variável data.
        return data;
    } catch (err) {
        console.error('Erro ao buscar dados da API:', err);
        // Aqui você pode definir um estado de erro e mostrar uma mensagem de erro ao usuário.
    }
};*/
