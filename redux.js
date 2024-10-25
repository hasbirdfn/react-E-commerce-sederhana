import { legacy_createStore } from "redux";

//reducer
const cartReducer = (
    state = {
        cart: [{id:1, qty: 20}], // nilai data 1 default
    },
    action) => { // pada action ini dihandle berdasarkan typenya, dalam bentuk switch case
// type ini nama action nya nanti
// payload nama datanya nanti
        switch(action.type) { // setelah dispatch, maka masuk ke switch mengirimkan action type
            case "ADD_TO_CART": // type ini yg dikirim
             return {
                ...state,
                cart: [...state.cart, action.payload], // yang dijalankan ini, dia akan merubah state cartnya
            };
            default:
                return state;
        }
};
//store
// bikin store / wadah dari state diatas untuk menyimpan statenya.
const store = legacy_createStore(cartReducer); // masukan parameter reducer yg tadi dibuat diatas
console.log("oncreate store : ", store.getState()) // akan menampilkan state yang ada didalam store ketika dia sudah selesai menmbuat storenya


//subscribe
store.subscribe(() => {
    console.log("STORE CHANGE", store.getState());
})
//dispatch
// ada sebuah action yang mau dilakukan dispatch
// dispatach ini untuk melakukan eventhandler, dan mengimkan data payload ke dalam reducer
//type / fungsi yang mau dijalankan adalah :"ADD_TO_CART"
// data yang akan dikirimkan adalah payload
const action1 = {type:"ADD_TO_CART", payload:{id:2, qty:20}} //nilai data 2
store.dispatch(action1); // melakukan dispatch
const action2 = {type:"ADD_TO_CART", payload:{id:10, qty:5}} //nilai data 2
store.dispatch(action2); // melakukan dispatch


// ALUR CODE DIATAS :
// ketika dispatch actionnya dilakukan, dia akan masuk ke dalam switch case, dan menjalankan / merubah state cartnya