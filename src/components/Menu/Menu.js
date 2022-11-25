
import { Container } from 'react-bootstrap';
import './Menu.css';

export default function Menu(props) {
  

  return (
    <Container> 
      <h1> Menú </h1>
   <div class="container">
  <div class="Sushi-1">hola 1
  <img src={`img/${props.image}`} alt='sushi 1'/>
  </div>
  <div class="Sushi-2">hola 2
  <img src={`img/${props.image}`} />
  </div>
  <div class="Sushi-3">hola 3
  <img src={`img/${props.image}`} />
  </div>
  <div class="Sushi-4">hola 4
  <img src={`img/${props.image}`} />
  </div>
  <div class="Sushi-5">hola 5
  <img src={`img/${props.image}`} />
  </div>
  <div class="Sushi-6">hola 6
  <img src={`img/${props.image}`} />
  </div>
</div>
    </Container>
  );
}