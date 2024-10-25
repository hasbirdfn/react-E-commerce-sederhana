import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayouts"; 

// text for Login 
const LoginPage = () => {
    return (
        <AuthLayout title="Login" type="login" subject="login">
            <FormLogin/>
           
        </AuthLayout>
    );
};

export default LoginPage;