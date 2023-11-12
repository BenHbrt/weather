import './Footer.scss';

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container">
                <div className="footer_container_title">About this Project</div>
                <div><a href="https://github.com/BenHbrt/weather" target="_blank" >Code</a></div>
                <div><Link to={'./credits'}>Credits</Link></div>
            </div>
            <div className="footer_container">
                <div className="footer_container_title">About Me</div>
                <a href="https://github.com/BenHbrt" target="_blank">
                    <img className="footer_container_icon" src={require('../img/icons/github-mark-white.png')} alt="github logo" height="20px"/>
                </a>
                <a href="https://www.linkedin.com/in/benherbertcz/" target="_blank">
                    <img className="footer_container_icon" src={require('../img/icons/In-White-26@2x.png')} alt="linkedin logo" height="20px"/>
                </a>
            </div>
            <div className="footer_container">
                <div className="footer_container_title">Privacy and Data</div>
                <div><Link to={'./cookies'}>Cookies</Link></div>
            </div>
            
        </footer>
    );
}

export default Footer;