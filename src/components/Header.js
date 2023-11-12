import './Header.scss';

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {

    const [hoverHome, setHoverHome] = useState(false);
    const location = useLocation();

    return (
        <header className="header">
            {
                location.pathname !== "/" ?
                <div className="header_home">
                <div className="header_home_icon"
                onMouseOver={() => setHoverHome(true)}
                onMouseLeave={() => setHoverHome(false)}
                onClick={() => setHoverHome(false)}
                >
                    {
                        hoverHome ?
                        <Link to={"/"}>
                            <img src={require('../img/icons/home_filled.png')} alt="home icon" />
                        </Link>
                        :
                        <img src={require('../img/icons/home.png')} alt="home icon" />
                    }
                </div>
                </div>
                : null
            }
            
            <div className="header_title">
                <img src={require('../img/icons/rainy-day.png')} alt="weather icon" />
                <div>Weather</div>
            </div>
        </header>
    );
}

export default Header;