import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";

import './App.css';
import Footer from "./components/Footer/Footer";

import Menu from './components/Menu/Menu';
import Navbar from './components/Navbar/Navbar';
import Nosotros from './components/Nosotros/Nosotros';
import Reservacion from './components/Reservacion/Reservacion';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route
            path="/about-us"
            element={ <Nosotros /> }
            
          />
          <Route
            path="/menu"
            element={ <Menu image="Nori.png"/> }
          />
          <Route
            path="/reservations"
            element={ < Reservacion /> }
          />
          <Route
            path="/"
            element={ <Nosotros /> }
          />

        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;