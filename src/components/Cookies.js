import demoLocations from '../utilities/demoLocations';

const Cookies = ({ setLocations }) => {

    const deleteCookies = () => {
        localStorage.removeItem("Locations");
        setLocations(demoLocations);
    };

    return (
        <main>
            <div>Cookies</div>
            <button onClick={deleteCookies}>Remove Cookies</button>
        </main>
    );
}

export default Cookies;