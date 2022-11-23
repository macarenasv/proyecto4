import { addDoc, collection } from "firebase/firestore";
import { useFormik } from 'formik';
import { db } from '../../config/firestore';
import "./Reservacion.css";

export default function Reservacion() {
  const { handleSubmit, handleChange, values } = useFormik( {
    initialValues: {
      name: "",
      surname: "",
      email: "",
      phoneNumber: "",
      reservationTime: "",
    },
    onSubmit: async function ( values ) {
      console.log( values )
      try {
        const docRef = await addDoc( collection( db, "Contactos" ), values );
        console.log( "Document written with ID: ", docRef.id );
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

      <label htmlFor='phoneNumber'>Número de Teléfono</label>
      <textarea id='phoneNumber' name='phoneNumber' type="number" value={ values.phoneNumber } onChange={ handleChange }></textarea>
      
      
      <label htmlFor='reservationTime'>Hora de Reserva</label>
      <textarea id='reservationTime' name='reservationTime' type="datetime-local" value={ values.reservationTime }  onChange={ handleChange }></textarea>

      <button type='submit'>Enviar</button>
    </form>
  )
}