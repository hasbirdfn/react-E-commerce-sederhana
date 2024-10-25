import { configureStore, createAction, createReducer } from "@reduxjs/toolkit"

// createAction
const addToCart = createAction("ADD_TO_CART");

// reducer
// kalo reducer >1 yang mau dijalankan tinggal copy aja cart reducernya
const cartReducer = createReducer([], (builder) => {
    // panggil add tocart menggunakan builder
    builder.addCase(addToCart, (state,action) => {
        state.push(action.payload); //  dengan multiple reducer
    });
})

// login reducer
const login = createAction("CREATE_SESSION");
const loginReducer = createReducer({status:false}, (builder) => {
    builder.addCase(login, (state,action) => {
        state.status = true;
    })
});

// store
const store = configureStore({
    reducer: {
        login: loginReducer,
        cart: cartReducer, // bisa dipakai banyak reducer
    },
});

//subscribe
store.subscribe(() => {
    console.log("STORE CHANGE", store.getState());
})

// pada saat store dibuat
console.log("oncreate store : ", store.getState())
// dispatch action
//cara manggil lebih sederhana
store.dispatch(addToCart({id:1, qty:20})); 
store.dispatch(addToCart({id:10, qty:15})); 
store.dispatch(login());
// cara manggil lebih lengkap
// const action1 = {type: "ADD_TO_CART", payload: {id:1, qty:20}};
// store.dispatch(action1);