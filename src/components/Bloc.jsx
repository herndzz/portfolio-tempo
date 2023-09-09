export default function Bloc({ data }) {
    const { location, current } = data;
    let iconSize = 50; //Tamanho do ícone.

    return (
        <div>
            <h2>{`${location.name} - ${location.region}, ${location.country}`}</h2>
            <div>
                <div>
                    <h3>{`Atualizado: ${current.last_updated}`}</h3>
                    <p className="blocDescription">Clima: {current.condition.text}</p>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <p className="temperature">{`Celsius: ${current.temp_c}`} <br />
                            {`Fahrenheit: ${current.temp_f}`}</p>
                        <img
                            className="icon"
                            src={current.condition.icon}
                            alt={'icon'}
                            style={{ width: iconSize, height: iconSize }}
                        />
                    </div>
                </div>
                <div>
                    <h4>{`Umidade: ${current.humidity}%`}</h4>
                    <h4>{`Velocidade do vento: ${current.wind_kph}km/h`}</h4>
                    <h4>{`Direção do vento: ${current.wind_dir}`}</h4>
                </div>
            </div>
        </div>
    );
}