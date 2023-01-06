import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice.js";

export const Store = configureStore({ 
        reducer: {
            cart: CartSlice
        }
 });