import FormularioReservacion from './FormularioReservacion';
import {Tabs, Tab} from 'react-bootstrap'
import "./Reservacion.css";
import ListaReservas from './ListaReservas/ListaReservas';

export default function Reservacion() {

  return (
    <Tabs defaultActiveKey={"reserva"} fill >

      <Tab title={"Reserva con Nosotros"} 
      eventKey={"reserva"}>

      <FormularioReservacion/>
      </Tab>
     
      <Tab title={"Reservas"} 
      eventKey={"reservaciones"} 
      mountOnEnter={true} 
      unmountOnExit={true}>

       <ListaReservas/>
      </Tab>

    </Tabs>
  )

}