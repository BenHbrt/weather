import './Button.scss';

const Button = ({ text, func, active }) => {

    return (
        <div className={`button ${text} ${active ? "" : "disabled"}`} onClick={() => {if (active) {func()}}}>
            <img src={require(`../../img/icons/${text}.png`)} alt={`${text} icon`} />
            <span>{text}</span>
        </div>
    );
}

export default Button;