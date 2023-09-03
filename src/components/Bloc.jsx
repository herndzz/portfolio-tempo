export default function Bloc({ data }) {
    let iconSize = 50; //Tamanho do ícone.

    return (
        <div>
            <h2>{`${data.location.name} - ${data.location.region}, ${data.location.country}`}</h2>
            <h4>{`Atualizado: ${data.current.last_updated}`}</h4>
            <p className="blocDescription">Descrição: {data.current.condition.text}</p>
            <div style={{ display: "flex", alignItems: "center" }}>
                <p className="temperature">{`Celsius: ${data.current.temp_c}`} <br /> {`Fahrenheit: ${data.current.temp_f}`}</p>
                <img
                    className="icon"
                    src={data.current.condition.icon}
                    alt={'icon'}
                    style={{ width: iconSize, height: iconSize }}
                />
            </div>
        </div>
    );
}