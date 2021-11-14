import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import CustomerCard from "./components/CustomerCard";
import ReservationsCard from "./components/ReservationsCard";
import { getReservations } from "./features/reservationSlice";

function App() {

  const [reservationsInput, setReservationsInput] = useState("");
  const dispatch = useDispatch();
  const Reservations = useSelector((state: RootState) => state.reservations.value);
  const Customer = useSelector((state: RootState) => state.customer.values);

  const handleReservations = ()=>{
    if(!reservationsInput) return 
    
    dispatch(getReservations(reservationsInput));
    setReservationsInput("");
  }

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {Reservations.map((name: string, index: number) => (
                <ReservationsCard name={name} index={index} />
              ))}
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={reservationsInput} onChange={(e)=>{setReservationsInput(e.target.value)}} />
            <button onClick={handleReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {
            Customer.map((customer) => {
              return <CustomerCard id={customer.id} name={customer.name} food={customer.food} />
            })}

        </div>
      </div>
    </div>
  );
}

export default App;