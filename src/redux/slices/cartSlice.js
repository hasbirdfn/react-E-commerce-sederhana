import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart", // nama cart
    initialState: {
        // Mengambil data dari localStorage dan parsing menjadi array kosong jika tidak ada
        data: JSON.parse(localStorage.getItem("cart") || "[]"), 
    },
    reducers: {
        // cari berdasarkan id, apakah item.id itu === payload.id
        // jika sama maka tambahkan qty + 1
        //jika tidak maka tambahkan data id dan qtynya 
        // nama item ini bebas
       addToCart : (state,action) => {
        const itemInCart = state.data.find((item) => item.id === action.payload.id)
            if (itemInCart) {
                itemInCart.qty++
            } else { 
                // Menambahkan data baru dan qty ke item yang baru ditambahkan
                state.data.push(action.payload)
            }
       }
    }
});

// export biasa fungsi dari addtocart
// export default itu export reducernya
export const {addToCart} = cartSlice.actions; //mengekspor addToCart agar bisa digunakan dalam komponen React untuk menambah item ke dalam keranjang.
export default cartSlice.reducer; // melakukan export reducer

// initialize Mengatur state awal dari cart dengan mengambil data yang disimpan di localStorage (jika ada). Jika tidak ada data di localStorage, maka akan diinisialisasi sebagai array kosong ([]).


