import { useState } from "react";
import axios from "axios";
import key from "../token";

export default async function fetchData(city) { //Função assíncrona para evitar possíveis erros de variáveis 'indefinidas'. Salvo em uma constante.
    try {
        const res = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`);
        setData(res.data); //Salva o estado da variável data.
    } catch (err) {
        console.error('Erro ao buscar dados da API:', err);
        // Aqui você pode definir um estado de erro e mostrar uma mensagem de erro ao usuário.
    }
};
