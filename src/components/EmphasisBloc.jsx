import { useState } from "react";
import key from "../token";

export default function EmphasisBloc({city}) {
    const [data, setData] = useState(null);
    let iconSize = 50; //Tamanho do ícone.

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