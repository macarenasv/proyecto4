
import { Container } from 'react-bootstrap';
import './Menu.css';

export default function Menu(props) {
  return (
  <div> 
   
      <img src="img/especial.png" width={400}/>
      
       <div id="banner">
      <img src={`img/${props.image1}`} width={500} className="m-2"/> 
      <img src={`img/${props.image2}`} width={500} className="m-2"/> 
      <img src={`img/${props.image3}`} width={500} className="m-2 mb-5"/> 
      <img src={`img/${props.image4}`} width={500} className="m-2 mb-5"/>
      </div>

    </div>
  );
}