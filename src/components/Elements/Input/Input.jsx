import { forwardRef } from "react";

const Input = forwardRef((props,ref) => {
    const {type, name, placeholder} = props;
    return (
        <input
            className="text-sm border rounded w-full py-2 px-3 text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#00AA5B] focus:border-[#00AA5B] placeholder:opacity-50"
            type= {type}
            name= {name}
            placeholder={placeholder}
            id={name}
            ref={ref}
            required
        />
    )
});

export default Input;