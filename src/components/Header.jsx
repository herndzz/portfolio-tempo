import logoClima from '../img/clima-logo.png';

export default function Header() {
    let logoSize = 50; //Ajuste de tamanho da logo! 
    //Obs: ao adicionar uma estilização em elementos sempre passar um objeto dentro de outro objeto no atributo 'style'.

    return (
        <div>
            <div className="navbar">
                <img className="logo" src={logoClima} alt="logo" style={{width: logoSize, height: logoSize}}/> 
                <ul className="nav-links">
                    <li><a href="#">Previsão do Tempo</a></li>
                    <li><a href="#">Clima</a></li>
                </ul>
            </div>
        </div>
    );
}