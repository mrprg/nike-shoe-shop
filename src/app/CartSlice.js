import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartState: false,
}

const CartSlice = createSlice({
    initialState,
    name:"cart",
    reducers: {
        setOpenCart: (action, state) => {

        },
        setCloseCart: (action, state) => {

        }
    }
})

export const { setOpenCart, setCloseCart } = CartSlice.actions;

export default CartSlice.reducer;