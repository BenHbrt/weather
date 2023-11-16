import './Homepage.scss';

import CurrentWeather from './display/CurrentWeather';

const Homepage = ({ locations }) => {

    return (
        <main>
            <div className="homepage">
                {
                    locations ? locations.map((location) => {
                        return <CurrentWeather loc={location}/>
                    })
                    : null
                }
            </div>
            <button onClick={() => console.log(locations)} >Locations</button>
        </main>
    );
}

export default Homepage;