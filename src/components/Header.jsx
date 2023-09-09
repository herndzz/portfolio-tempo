import logoClima from '../img/clima-logo.png';

export default function Header() {
    let logoSize = 50; //Ajuste de tamanho da logo! 
    //Obs: ao adicionar uma estilização em elementos sempre passar um objeto dentro de outro objeto no atributo 'style'.

    return (
        <div>
            <div className="navbar">
                <div style={{display: "flex", alignItems: "center"}}>
                    <a href="#">
                        <img className="logo" src={logoClima} alt="logo"
                        style={{ width: logoSize, height: logoSize }} />
                    </a>
                    <h2 style={{color: "#fff"}}>Clima & Tempo</h2>
                </div>
            </div>
        </div>
    );
}