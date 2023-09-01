import axios from "axios";

export function useClimate(city = 'Belo Horizonte') {
    const key = '80c7f5de9f4d4cd295d182750231608';
    const instance = axios.create({
        baseURL: 'http://api.weatherapi.com/v1/',
        timeout: 1000
    })

    axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log('Erro:', err)
        })
}

