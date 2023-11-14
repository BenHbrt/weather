import './Button.scss';

const Button = ({ text, func, active, selectedMode }) => {

    let image = "";
    if (text === "Add") {
        image = "Tick";
    } else {
        image = text.split(" ")[0]
    }

    const clickHandler = () => {
        
    }
    
    return (
        <div className={`button ${image} ${active ? "" : "disabled"} ${selectedMode ? selectedMode === text ? "selected" : "" : ""}`} onClick={() => {if (active) {func()}}}>
            <img src={require(`../../img/icons/${image}.png`)} alt={`${image} icon`} />
            <span>{text}</span>
        </div>
    );
}

export default Button;