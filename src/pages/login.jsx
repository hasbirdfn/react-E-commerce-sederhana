import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayouts"; 

// text for Login 
const LoginPage = () => {
    return (
        <AuthLayout title="Login" type="login" subject="login">
            {/* form login ini yg akan menjadi children di AuthLayuout */}
            <FormLogin/>
           
        </AuthLayout>
    );
};

export default LoginPage;