import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";
import { FaSun, FaMoon } from 'react-icons/fa';

const AuthLayout = (props) => { 
  const { children, title, type, subject } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode); // diambil dari export darkmode halaman DarkMode 

  return (
    <div className={`flex justify-center min-h-screen items-center ${isDarkMode && "bg-green-600 text-white"}`}>
      <div className="w-full max-w-xs relative"> {/* Menambahkan relative agar tombol absolute terkait dengan kontainer ini */}
       {/* Button DarkMode */}
        <button 
          className="absolute right-2 top-2 p-2 text-white rounded-md" 
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? <FaSun size={24} className="text-yellow-500" /> : <FaMoon size={24} className="text-[#00AA5B]" />}
        </button>

        {/* Judul / title */}
        <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-[#00AA5B]" }`}>{title}</h1>

        {/* <Subject subject={subject} /> */}
        <p className={`font-medium mb-8 ${isDarkMode ? "text-[#F0F0F0]" : "text-slate-500"}`}>
          {subject === "login" ? "Welcome, Please Enter Your Details" : "Please Create Your Account"}
        </p> 
    {/* Konten login page */}
        {children}
      {/* Navigation footer */}
        <Navigation type={type} />
      </div>
    </div>
  );
};

// bagian link footer
const Navigation = ({ type }) => {
  const { isDarkMode} = useContext(DarkMode); 
  if (type === "login") {
    return (
      <p className={`text-center mt-5 ${isDarkMode ? "text-[#F0F0F0]" : "text-slate-900" }`}>Don't have an account?{" "}
        <Link to="/register" className={`font-bold text-sm ${isDarkMode ? "text-white" : "text-[#00AA5B]"}`}>Register</Link>
      </p>
    );
  } else {
    return (
      <p className={`text-center mt-5 ${isDarkMode ? "text-[#F0F0F0]" : "text-slate-900" }`}>Already an account?{" "}
      <Link to="/login" className={`font-bold text-sm ${isDarkMode ? "text-white" : "text-[#00AA5B]"}`}>Login</Link>
    </p>
    );
  }
};

export default AuthLayout;
