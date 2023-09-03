import axios from "axios";
import { useState } from "react";

/*function useClimate(city = 'Belo Horizonte') {
    const [data, setData] = useState([]);
    const key = '80c7f5de9f4d4cd295d182750231608'; //Minha chave da API.

    axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`)
        .then(res => {
            //console.log(res.data);
            //console.log(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`);
            const {location, current} = res.data;
            setData({location, current});
            console.log(data);
            return data;
        })
        .catch(err => {
            console.log('Erro:', err)
        })
}
*/
