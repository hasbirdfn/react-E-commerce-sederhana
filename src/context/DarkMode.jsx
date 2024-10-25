import {createContext, useState} from "react";

const DarkModeContext = createContext();

const DarkModeContextProvider = ({children}) => { //panggil props children
    // buat useState darkmode
     const [isDarkMode, setIsDarkMode] = useState();

     return (
        <DarkModeContext.Provider value={{isDarkMode, setIsDarkMode}}>
            {children}
        </DarkModeContext.Provider>
     )
}

export const DarkMode = DarkModeContext;
export default DarkModeContextProvider;


// value isDarkMode dan setIsDarkMode itu yang akan dikirim secara global nnati bisa diakses dihalaman apapun.
// 