import './App.scss';

import { Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Location from './components/Location';
import Credits from './components/Credits';
import NoPage from './components/NoPage';

function App() {
  return (
    <>
      <Header />
        <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/location/:loc" element={<Location />} />
            <Route path="/credits" element={<Credits />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;