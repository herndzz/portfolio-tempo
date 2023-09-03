import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function Search() {
    const [data, setData] = useState([]);
    const key = '80c7f5de9f4d4cd295d182750231608'; //Minha chave da API.

    let iconSize = 30;
    
    //URL: http://api.weatherapi.com/v1/current.json?key=80c7f5de9f4d4cd295d182750231608&q=Belo Horizonte
    useEffect(() => {
        let city = 'Contagem'; //Cidade a ser pesquisada.
        axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`) //Faz uma chamada da API aqui.
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.error('Erro ao buscar dados da API:', err);
            });
    }, []);
    
    const {location, current} = data; //Desestruturação de objeto.
    //console.log(location.name);
    //let lastUpdate = (new Date() - new Date(current.last_updated)) / 1000 / 60 / 60;
    return ( 
        <div>
            <input placeholder='Digite sua cidade aqui!'></input>
            <button>Buscar</button>
            <div>
                <h2>{ `${location.name} - ${location.region}, ${location.country}` }</h2> {/*Aqui onde exibe o nome.*/}
                <h4>{ `Atualizado: ${current.last_updated}` }</h4> 
                <p className="blocDescription">{ } </p> 
                <div style={{ display: "flex", alignItems: "center" }}>
                    <p className="temperature">{ `Celsius: ${current.temp_c}` } <br /> {`Fahrenheit: ${current.temp_f}` }</p> {/*Temperatura*/}
                    <img className="icon" src={ current.condition.icon }
                        alt={ 'icon' }
                        style={{ width: iconSize, height: iconSize }}>
                    </img> {/*Icone representando o clima.*/}
                </div>
            </div>
        </div>
    );
}