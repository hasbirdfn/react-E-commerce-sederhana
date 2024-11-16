import axios from "axios";
import {jwtDecode} from "jwt-decode"; // Pastikan import ini benar, tanpa kurung kurawal

// Fungsi login dengan async/await
export const login = async (data, callback) => {
    try {
        const res = await axios.post("https://fakestoreapi.com/auth/login", data);
        callback(true, res.data.token); // Callback sukses
    } catch (error) {
        callback(false, error); // Callback error
    }
};

// Fungsi getUsername tetap sederhana karena synchronous
export const getUsername = (token) => {
    try {
        const decoded = jwtDecode(token);
        return decoded.user; // Asumsinya struktur token memiliki "user"
    } catch (error) {
        console.error("Invalid token:", error);
        return null; // Mengembalikan null jika token tidak valid
    }
};






//fetch menggunakan then catch
// import axios from "axios";
// import { jwtDecode } from "jwt-decode";
// export const login = (data,callback) => {
//     axios.post("https://fakestoreapi.com/auth/login",data)
//     .then((res) => {
//         callback(true,res.data.token);
//     })
//     .catch((error) => {
//         callback(false,error)
//     })
// } 


// export const getUsername = (token) => {
//     const decoded = jwtDecode(token);
//     return decoded.user;
// }

