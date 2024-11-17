import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
    // State untuk menyimpan status login
    const [loginFailed, setLoginFailed] = useState(""); // Pesan error
    const [loading, setLoading] = useState(false); // Indikator tombol loading

    const usernameRef = useRef(null);

    // Fokus otomatis pada input username saat halaman dimuat
    useEffect(() => {
        usernameRef.current.focus();
    }, []);

    const handleLogin = async (event) => {
        event.preventDefault(); // Mencegah reload halaman
        setLoading(true); // Mengaktifkan indikator loading

        const data = {
            username: event.target.username.value,
            password: event.target.password.value,
        };

        try {
            const result = await login(data); // Memanggil fungsi login (async/await)
            if (result.success) {
                localStorage.setItem("token", result.token); // Simpan token ke localStorage
                window.location.href = "/products"; // Redirect ke halaman produk
            } else {
                setLoginFailed(result.message); // Tampilkan pesan error
            }
        } catch (error) {
            setLoginFailed("An unexpected error occurred."); // Pesan error umum
        } finally {
            setLoading(false); // Matikan indikator loading
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <InputForm
                label="Username"
                type="text"
                placeholder="Insert your username here..."
                name="username"
                ref={usernameRef}
            />
            <InputForm
                label="Password"
                type="password"
                placeholder="******"
                name="password"
            />
            <Button
                classname={`bg-[#00AA5B] text-white w-full`}
                type="submit"
                disabled={loading} // Disable tombol saat loading
            >
                {loading ? "Logging in..." : "Login"} {/* Ubah teks tombol saat loading */}
            </Button>
            {loginFailed && <p className="text-red-500 text-center mt-5">{loginFailed}</p>}
        </form>
    );
};

export default FormLogin;

// localStorage.setItem('email',event.target.email.value); //untuk mengirimkan email ke localstorage sebagai login 
// localStorage.setItem('password',event.target.password.value); //untuk mengirimkan password ke localstorage sebagai login
// // console.log(event.target.email.value); 
// // console.log(event.target.password.value);
// window.location.href = "/products"; // mengarahkan ke halaman products setelah berhasil login
    // ketika klik handlelogin, maka data kekirim      