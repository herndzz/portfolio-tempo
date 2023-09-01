import LogoClima from '../img/sun-solid.svg'

function Header() {
    return(
        <header className="main-header">
            <img className="logo" src={LogoClima} alt="logo"/>
            <ul className="links">
                <li><a href="">Previsão do Tempo</a></li>
                <li><a href="">Clima</a></li>
            </ul>
        </header>
    );
}

export default Header;