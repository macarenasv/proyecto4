import { addDoc, collection } from "firebase/firestore";
import { useFormik } from 'formik';
import { db } from '../../config/firestore';
import "./Reservacion.css";

let minDate = new Date().toJSON().slice(0, 10);

export default function Reservacion() {
  const { handleSubmit, handleChange, values } = useFormik( {
    initialValues: {
      name: "",
      surname: "",
      email: "",
      phoneNumber: "",
      guests: "",
      reservationDate: "",
      reservationTime: "",
    
    },
    onSubmit: async function ( values ) {
      console.log( values )
      try {
        const docRef = await addDoc( collection( db, "Reserva" ), values );
        console.log( "Document written with ID: ", docRef.id );
        window.alert("Gracias por su reserva para: " + values.reservationDate + values.reservationTime)
      } catch ( e ) {
        console.error( "Error adding document: ", e );
      }
    }
  } )

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor='name'>Nombre</label>
      <input id='name' name='name' type="text" value={ values.name } onChange={ handleChange }></input>

      <label htmlFor='surname'>Apellido</label>
      <input id='surname' name='surname' type="text" value={ values.surname } onChange={ handleChange }></input>

      <label htmlFor='email'>Correo</label>
      <input id='email' name='email' type="email" value={ values.email } onChange={ handleChange }></input>

      <label htmlFor='phoneNumber'>Teléfono</label>
      <input id='phoneNumber' name='phoneNumber' type="tel" value={ values.phoneNumber } onChange={ handleChange }></input>
      
      <label htmlFor='guests'># Personas</label>
      <input id='guests' name='guests' type="number" min={1} max={10} value={ values.guests } onChange={ handleChange }></input>

      <label htmlFor='reservationDate'>Fecha</label>
      <input id='reservationDate' name='reservationDate' type="date" min={minDate} value={ values.reservationDate }  onChange={ handleChange }></input>
      
      <label htmlFor='reservationTime'>Hora de Reserva</label>
      <input id='reservationTime' name='reservationTime' type="time" min="12:00:00" max="23:00:00" value={ values.reservationTime} onChange={ handleChange }></input>

      <button type='submit'>Enviar</button>
    </form>
  )
}