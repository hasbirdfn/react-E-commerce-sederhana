import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";
import Button from "../Elements/Button"; 
import InputForm from "../Elements/Input"; 


const FormLogin = () => {
    
    // kondisi login pesan error, atau sukses
    const[loginFailed,setLoginFailed] = useState("");

    const handleLogin = (event) => {
        event.preventDefault(); //agar tidak reload halaman
    // kondisi jika token ada maka masuk halaman product
    //data diambil dari authservice, ambil dari api login fakestore
    const data = {
        username: event.target.username.value,
        password: event.target.password.value,
    }
    // kita panggil datanya
    login(data, (status,res) => {
        if(status) {
            localStorage.setItem("token", res);
            window.location.href = "/products";
        } else {
            setLoginFailed(res.response.data);
        }
    })
    }

    //kondisi manipulasi dom focus ke username ketika di refresh halaman
    //Properti current pada objek useRef digunakan untuk mengakses elemen atau nilai yang disimpan. Misalnya, saat Anda ingin memfokuskan elemen input,
    /* 
    useRef(null) digunakan untuk menginisialisasi ref dengan null karena elemen belum ada saat pertama kali komponen dirender.
    current digunakan untuk mengakses elemen DOM yang di-refer setelah komponen dirender agar dapat dimanipulasi langsung, seperti memfokuskan input dengan 
    */
    const usernameRef = useRef(null);
    useEffect(() => {
        usernameRef.current.focus();    
    })

    return(
        <form onSubmit={handleLogin}>
            <InputForm
            label =  "Username"
            type = "text"
            placeholder = "Insert your username here..."
            name = "username"
            ref = {usernameRef} 
            />
            <InputForm
            label =  "Password"
            type = "password"
            placeholder = "******"
            name = "password"
           />
        <Button classname={`bg-[#00AA5B] text-white w-full`} type="submit">Login</Button>
        {loginFailed && <p className="text-red-500 text-center mt-5">{loginFailed}</p>}
        </form>
    )
}

export default FormLogin;
// localStorage.setItem('email',event.target.email.value); //untuk mengirimkan email ke localstorage sebagai login 
// localStorage.setItem('password',event.target.password.value); //untuk mengirimkan password ke localstorage sebagai login
// // console.log(event.target.email.value); 
// // console.log(event.target.password.value);
// window.location.href = "/products"; // mengarahkan ke halaman products setelah berhasil login
    // ketika klik handlelogin, maka data kekirim      