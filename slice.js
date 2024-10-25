import { configureStore,createSlice } from "@reduxjs/toolkit"

// slice ini menggabungkan action dan reducer dalam cartslice sehingga tidak perlu membuat scr terpisah
// dimasukan semua action dan reducernya ke dalam cartSlice

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => { // addToCart adalaah action
            state.push(action.payload);// state jika ada perubahan
        },
    }, 
});

// store
const store = configureStore({
    reducer: {
        cart: cartSlice.reducer, // bisa dipakai banyak reducer
    },
});

// pada saat store dibuat
console.log("oncreate store : ", store.getState())
//subscribe ketika ada perubahan
store.subscribe(() => {
    console.log("STORE CHANGE", store.getState());
})

// menjalankan action ketika diklik
store.dispatch(cartSlice.actions.addToCart({ id: 1, qty: 10 }));
store.dispatch(cartSlice.actions.addToCart({ id: 2, qty: 20 }));