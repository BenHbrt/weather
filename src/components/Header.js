import './Header.scss';

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {

    const [hoverIcon, setHoverIcon] = useState(false);
    const location = useLocation();

    return (
        <header className="header">
            {
                location.pathname !== "/" ?
                <div className="header_home">
                    <div className="header_home_icon"
                    onMouseOver={() => setHoverIcon(true)}
                    onMouseLeave={() => setHoverIcon(false)}
                    onClick={() => setHoverIcon(false)}
                    >
                        {
                            hoverIcon ?
                            <Link to={"/"}>
                                <img src={require('../img/icons/home_filled.png')} alt="home icon" title="Home"/>
                            </Link>
                            :
                            <Link to={"/"}>
                                <img src={require('../img/icons/home.png')} alt="home icon" />
                            </Link>
                        }
                    </div>
                </div>
                :
                <div className="header_edit">
                    <div className="header_edit_icon"
                    onMouseOver={() => setHoverIcon(true)}
                    onMouseLeave={() => setHoverIcon(false)}
                    onClick={() => setHoverIcon(false)}
                    >
                        {
                            hoverIcon ?
                            <Link to={"/edit"}>
                                <img src={require('../img/icons/edit_filled.png')} alt="home icon" title="Edit locations"/>
                            </Link>
                            :
                            <Link to={"/edit"}>
                                <img src={require('../img/icons/edit.png')} alt="home icon" />
                            </Link>
                        }
                    </div>
                </div>
            }
            
            <div className="header_title">
                <img src={require('../img/icons/rainy-day.png')} alt="weather icon" />
                <div>Weather</div>
            </div>
        </header>
    );
}

export default Header;