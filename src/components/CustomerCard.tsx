import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFoodToCustomer, removeCustomer, RootState } from '../features/customerSlice';

interface CustomerCardProps {
    name: string,
    id: string,
    food: string[],
}

export default function CustomerCard({name, id, food}: CustomerCardProps) {

    const [customerInput, setCustomerInput] = useState("");
    const dispatch = useDispatch();
    return (
        <div className="customer-food-card-container" key={id}>
            <p>{name}</p>
            <div className="customer-foods-container">
                <div className="customer-food">
                    {food.map((food) => {
                        return <p>{food}</p>})}
                    </div>
              <div className="customer-food-input-container">
                <input value={customerInput} onChange={(e)=>{
                    setCustomerInput(e.target.value)
                }} />
                <button onClick={()=>{
                    if(!customerInput)return;

                    dispatch(addFoodToCustomer({id, food: customerInput}))

                    setCustomerInput("");
                }} >Add</button>
              </div>
            </div>
            <div  onClick={()=>{dispatch(removeCustomer(id))}}
             className="customer-food-input-btn">Delete</div>
          </div>
    )
}
