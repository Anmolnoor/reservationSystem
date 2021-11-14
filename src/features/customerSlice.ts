import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Customer {
    id: string;
    name: string;
    food: string[];
}

interface CustomerState {
    values: Customer[];
}

interface AddFoodToCustomer {
    id: string;
    food: string }

const initialState: CustomerState = {
    values: [],
}

export const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<Customer>) => {
            state.values.push(action.payload);
        },
        addFoodToCustomer : (state, action: PayloadAction<AddFoodToCustomer>) => {
            state.values.forEach(customer => {
                if (customer.id === action.payload.id) {
                    customer.food.push(action.payload.food);
                }
            } )
        },
        removeCustomer: (state, action: PayloadAction<string>) => {
            state.values = state.values.filter(customer => customer.id !== action.payload);
        }
    }
});

export const { addCustomer, addFoodToCustomer, removeCustomer } = customerSlice.actions;

export default customerSlice.reducer;
export type RootState = ReturnType<typeof customerSlice.reducer>;
export type AppDispatch = typeof customerSlice.actions;