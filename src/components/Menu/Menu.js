

import './Menu.css';

export default function Menu(props) {
  return (
  <div id="menu"> 
   
      <img className="img1" src="img/especial.png" width={350}/>
      
       <div id="banner">
      <img src={`img/${props.image1}`} width={350} className="m-2" alt="Especial del día 1"/> 
      <img src={`img/${props.image2}`} width={350} className="m-2" alt="Especial del día 2"/> 
      <img src={`img/${props.image3}`} width={350} className="m-2" alt="Especial del día 3"/> 
      <img src={`img/${props.image4}`} width={350} className="m-2" alt="Especial del día 4"/>
      <img src={`img/${props.image5}`} width={350} className="m-2" alt="Especial del día 5"/>
      <img src={`img/${props.image6}`} width={350} className="m-2" alt="Especial del día 6"/>
      </div>

    </div>
  );
}