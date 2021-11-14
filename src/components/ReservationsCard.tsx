import React from 'react'
import { useDispatch } from 'react-redux';
import { addCustomer } from '../features/customerSlice';
import { removeReservation } from '../features/reservationSlice';
import {v4 as uuid} from 'uuid';

interface ReservationsCardProps {
    name: string,
    index: number,
}

export default function ReservationsCard({name, index}: ReservationsCardProps) {

    const dispatch = useDispatch();
    return (
        <div onClick={() => {dispatch(removeReservation(index))
        dispatch(addCustomer({
            id : uuid(),
            name,
            food : [ ],
        }))
        }}  className="reservation-card-container">{name}</div>
    )
}
