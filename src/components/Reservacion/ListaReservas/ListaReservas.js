import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Container, Spinner, Table } from 'react-bootstrap';
import { db } from '../../../config/firestore';

import './lista-reservas.css';

export default function ListaReservas() {
    const [reservas, setReservas] = useState([])
    const [loadingData, setLoadingData] = useState(true)
    useEffect(() => {
        const obtenerReservaciones = async () => {
            const reservasCollectionRef = collection(db, "Reserva")
            const querySnapshot = await getDocs(
                reservasCollectionRef)
            const reservas = querySnapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setReservas(reservas)
            setLoadingData(false)
        }
        try {
            obtenerReservaciones()
        } catch (error) {
            console.error(error)
        }
    }, [])

    return (
        <Container>
            <h1 className='text-shadow-drop-center'> Lista de reservaciones</h1>
            {
                loadingData ? (
                    <Spinner animation="border" role="status">
                    </Spinner>
                ) : (
                    <Table striped border hover variant="light">
                        <thead>
                            <th>Nombre en la reserva</th>
                            <th>Número de personas</th>
                            <th>Fecha</th>
                            <th>Hora</th>

                        </thead>

                        <tbody>
                            {
                                reservas.length === 0 ?
                                    (<tr>
                                        <td colSpan={4}>No hay reservaciones</td>
                                    </tr>
                                    )
                                    : reservas.map(Reserva  => (
                                        <tr key={Reserva.id}>
                                            <td>
                                                {Reserva.name}
                                            </td>
                                            <td>
                                                {Reserva.guests}
                                            </td>
                                            <td>
                                                {Reserva.reservationDate}
                                            </td>
                                            <td>
                                                {Reserva.reservationTime}
                                            </td>
                                        </tr>
                                    ))
                            }

                        </tbody>
                    </Table>
                )
            }
        </Container>
    )
}