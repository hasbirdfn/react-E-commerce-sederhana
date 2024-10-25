import { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";
const InputForm = forwardRef((props,ref) => {
    const {label, name, type, placeholder} = props;
    // menggunakan props yg sama yaitu name, dan digunakan 2 component yg berbeda. kelebihan react
    //  name diambil dari input.jsx
    //Atribut htmlFor={name} pada elemen <label> di React digunakan untuk menghubungkan label dengan elemen input yang memiliki atribut id atau name yang sama.
    // yang sama pada label dan input adalah name{name}
    return (
        <div className="mb-6">
            
           <Label htmlFor={name}>{label}</Label>
            <Input type={type} placeholder={placeholder} name={name} ref={ref} required />
        </div> 
    );
});

export default InputForm