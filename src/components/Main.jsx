import cloud from "../img/cloud.png";
import sun from "../img/sun.png";
import Search from "./Search";
import cities from "../citiesExample";

function Bloc() {
    let iconSize = 30; //Ajuste de tamanho do ícone

    //Ao usar uma arrow function dentro do método map, não deve-se colocar parênteses após a seta.
    const listCities = cities.map(city => 
        <li className="cities-item" key={city.id}> {/*Identificador do item na lista.*/}
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
        <ul style={{display: "flex", listStyle: "none"}}>{listCities}</ul>
    );
}

export default function Main() {
    return (
        <div className="main">
            <Search />
            <Bloc />
        </div>
    );
}