import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => { 
    return (
        <form action=""> 
        <InputForm
        label="Fullname" 
        type="text" 
        placeholder="Insert your name here..." 
        name="fullname"
         />
        <InputForm
        label="Email" 
        type="email" 
        placeholder="example@gmail.com" 
        name="email"
         />
     <InputForm 
        label="Password" 
        type="password" 
        placeholder="******" 
        name="password"
         />
        <InputForm 
        label="Confirm Password" 
        type="password" 
        placeholder="******" 
        name="confirmPassword"
         />
       
          <Button classname="bg-green-500 text-white w-full">Register</Button>
      </form>
    );
}

export default FormRegister;