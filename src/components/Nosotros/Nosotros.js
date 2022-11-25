import Contacto from './Contacto/Contacto.js';
import './Nosotros.css';



export default function Nosotros() {
  return (
    <div>
      <container>
        <p className="textoNosotros">En Nori Sushi nos caracterizamos por escoger los mejores ingredientes en nuestro inovadora barra giratoria.
          Nuestro chef es un experto en sabores y tradiciones y te aseguramos que encontrarás sushi auténtico y delicioso. Ven a disfrutar del real sabor de la comida!</p>
        <div>
          <img className="imagenNosotros" variant="bottom" src="img/card.webp" />
        </div>

      </container>

      <div className='contacto'>
        <Contacto className="form"/>
        <div>
          <img className="imagenContacto" variant="bottom" src="img/contacto.png" />
        </div>
      </div>
    </div>
  )
}



