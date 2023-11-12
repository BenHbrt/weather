import './Homepage.scss';

const Homepage = ({ locations }) => {

    return (
        <main>
            <div>
                {
                    locations ? locations.map((location) => {
                        return <div key={location.locName}>{location.locName}</div>
                    })
                    : null
                }
            </div>
            <button onClick={() => console.log(locations)} >Locations</button>
        </main>
    );
}

export default Homepage;