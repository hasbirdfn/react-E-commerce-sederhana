import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayouts"; 
const RegisterPage  = () => {
    // catatan, title disini sebuah teks yang berfungsi sebagai judul, type disini sebuah teks yang berfungsi sebagai judul, dan subject disini sebuah teks yang berfungsi sebagai halaman
    
    return (
        <AuthLayout title="Register" type="register" subject="register">
            <FormRegister/>
        
        </AuthLayout>
    );
};

export default RegisterPage ;