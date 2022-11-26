import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";

import './App.css';
import Footer from "./components/Footer/Footer";

import Menu from './components/Menu/Menu';
import Navbar from './components/Navbar/Navbar';
import Nosotros from './components/Nosotros/Nosotros';
import Reservacion from './components/Reservacion/Reservacion';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route
            path="/about-us"
            element={<Nosotros />}

          />
          <Route
            path="/menu"
            element={
            <Menu
              name="Especiales del día"
              image1="kuraRoll.jpeg"
              image2="nigiriSalmon.jpeg"
              image3="misoRamen.jpeg"
              image4="edamame.jpeg"
           /> }

          />
          <Route
            path="/reservations"
            element={< Reservacion />}
          />
          <Route
            path="/"
            element={<Nosotros />}
          />

        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;