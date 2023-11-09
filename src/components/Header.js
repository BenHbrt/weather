import './Header.scss';

const Header = () => {

    return (
        <header>
            <img src={require('../img/icons/rainy-day.png')} alt="weather icon" />
            <div>Weather</div>
        </header>
    );
}

export default Header;