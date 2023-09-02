import cloud from "../img/cloud.png";
import sun from "../img/sun.png";

let cities = [
    {id: 1, name: 'Belo Horizonte', temperature: 17, raining: true, description: "Leves pancadas de chuva na zona urbana."},
    {id: 2, name: 'São Paulo', temperature: 30, raining: false, description: "Muito sol durante o dia."},
    {id: 3, name: 'Vitória', temperature: 22, raining: true, description: "Chuvas no período da tarde."}
]; //Exemplos

function Bloc() {
    let iconSize = 30; //Ajuste de tamanho do ícone

    //Ao usar uma arrow function dentro do método map, não deve-se colocar parênteses após a seta.
    const listCities = cities.map(city => 
        <li key={city.id}> {/*Identificador do item na lista.*/}
            <h2>{city.name}</h2> {/*Nome da cidade.*/}
            <p className="blocDescription">{city.description}</p>
            <div style={{display: "flex"}}>
                <img className="icon" 
                src={city.raining ? (cloud) : (sun)} 
                alt={`icon${city.name}`}
                style={{width: iconSize, height: iconSize}}></img> {/*Icone representando o clima.*/}
                <p className="temperature">{city.temperature}</p>
            </div>
        </li>
    );
    return(
        <ul>{listCities}</ul>
    );
}

function Search() {
    return(
        <div>
            <input placeholder='Digite sua cidade aqui!'></input>
            <button>Buscar</button>
        </div>
    );
}

export default function Main() {
    return (
        <div>
            <Search />
            <Bloc />
        </div>
    );
}