import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

// store
// penyimpanan global yang mengelola seluruh state dalam aplikasi

// cartReducer untuk mengelola bagian state yang disebut cart
const store = configureStore({
    reducer: {cart:cartReducer},
});


// pada saat store dibuat
console.log("oncreate store : ", store.getState())

//subscribe
//tangkap perubahannya
store.subscribe(() => {
    console.log("STORE CHANGE", store.getState());
})


export default store;