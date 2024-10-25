// label ini digunakan untuk semua pada login dan register,
// children disini utk mengambil tag element label, agar bisa digunakan className disini 
// htmlfor untuk ketika di klik judul label, maka fokus ke tag elemen html

import { useContext } from "react";
import { DarkMode } from "../../../context/DarkMode";

//Jika Anda ingin label berada di atas elemen input (bukan di sampingnya), menggunakan block adalah cara standar untuk mengatur elemen form.
const Label = (props) => {
    const {htmlFor, children} = props;
    const { isDarkMode } = useContext(DarkMode);
    return (
        <label htmlFor={htmlFor} className={`block text-sm font-bold text-slate-700 mb-2 after:content-["*"]  after:ml-0.5 ${isDarkMode ? " after:text-yellow-500" : "after:text-red-500"}`}>
        {children}
      </label>
    );
};

export default Label;