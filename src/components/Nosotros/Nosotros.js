
import ControlledCarousel from './Carousel.js';
import Contacto from './Contacto/Contacto.js';
import './Nosotros.css';




export default function Nosotros() {
  return (
    <div>
    
      <ControlledCarousel  />
     
      <div id="cont">
        <p className="textoNosotros">En Nori Sushi nos caracterizamos por escoger los mejores ingredientes en nuestro inovadora barra giratoria.
          Nuestro chef es un experto en sabores y tradiciones y te aseguramos que encontrarás sushi auténtico y delicioso. Ven a disfrutar del real sabor de la comida!</p>
        
          <img className="imagenNosotros1" src="img/sushi1.webp" />
          <img className="imagenNosotros2" src="img/sushi2.webp" />
        
      </div>


      <div className='contacto'>

        <div className="formContacto">
        <Contacto className="form" />
        </div>
       
        <div className="imagenContacto">
        <img  className="mensaje" src="img/contacto.png" />
        </div>
          
        
      </div>

    </div>
  )
}



