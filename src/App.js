import './App.scss';

import demoLocations from './utilities/demoLocations';

import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { convertFromStorage } from './utilities/localStorage';

import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Location from './components/Location';
import Credits from './components/Credits';
import Cookies from './components/Cookies';
import NoPage from './components/NoPage';
import Edit from './components/Edit';

function App() {

  const [locations, setLocations] = useState(null);

  const loadLocations = () => {
    const data = localStorage.getItem("Locations");
    let locationData = null
    if (data) {
        locationData = convertFromStorage(data);
    } else {
        locationData = demoLocations
    };
    setLocations(locationData);
  }

  useEffect(() => {
      loadLocations()
  }, []);

  return (
    <>
      <Header />
        <Routes>
            <Route exact path="/" element={<Homepage locations={locations} />} />
            <Route path="/location/:loc" element={<Location />} />
            <Route path="/credits" element={<Credits />} />
            <Route path="/cookies" element={<Cookies setLocations={setLocations}/>} />
            <Route path="/edit" element={<Edit locations={locations} setLocations={setLocations}/>} />
            <Route path="*" element={<NoPage />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;