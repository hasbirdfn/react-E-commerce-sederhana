import { useEffect, useState } from "react";
import { getUsername } from "../services/auth.service";


export const useLogin = () => {
    const[username, setUsername] = useState("")
    useEffect(() => {
        // mengambil username berdasarkan yg login pada navbar
        // menggunakan npm jwt
        const token = localStorage.getItem("token");
        if(token) {
          setUsername(getUsername(token));
        } else {
          window.location.href = '/login';
        }
      }, [])
      return username;
}