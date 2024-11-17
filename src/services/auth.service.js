import instance from "./axiosInstance";
import {jwtDecode} from "jwt-decode"; 
// Fungsi login dengan validasi input, error handling lebih baik, dan timeout
/*
Mengapa Menggunakan Axios Instance?
Menghindari Duplikasi:
Jika Anda sering menggunakan API yang sama, Anda tidak perlu menulis ulang baseURL atau konfigurasi lainnya setiap kali melakukan permintaan.
Memudahkan Perubahan Global:
Jika URL dasar API berubah (misalnya, dari staging ke production), Anda cukup mengganti di satu tempat saja.
Meningkatkan Konsistensi
*/

export const login = async (data) => {
    try {
        const res = await instance.post("auth/login", data);
        return { success: true, token: res.data.token };
    } catch (error) {
        if (error.response) {
            // Tangani status HTTP tertentu
            switch (error.response.status) {
                case 401:
                    return { success: false, message: "Invalid username or password" };
                case 500:
                    return { success: false, message: "Server error. Please try again later." };
                default:
                    return { success: false, message: error.response.data || "Unexpected error occurred" };
            }
        } else if (error.request) {
            // Tidak ada respons dari server
            return { success: false, message: "No response from server. Please check your connection." };
        } else {
            // Kesalahan lainnya
            return { success: false, message: error.message };
        }
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

