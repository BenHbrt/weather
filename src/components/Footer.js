import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <a href="https://github.com/BenHbrt">
                <img src={require('../img/icons/github-mark-white.png')} alt="github logo" height="20px"/>
            </a>
            <a href="https://www.linkedin.com/in/benherbertcz/">
                <img src={require('../img/icons/In-White-26@2x.png')} alt="linkedin logo" height="20px"/>
            </a>
        </footer>
    );
}

export default Footer;