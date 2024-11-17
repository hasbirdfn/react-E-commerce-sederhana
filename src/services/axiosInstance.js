import axios from "axios";

const instance = axios.create({
    baseURL: "https://fakestoreapi.com/",
    timeout: 5000, // 5 detik
    headers: {
        "Content-Type": "application/json",
    },
});

export default instance;
