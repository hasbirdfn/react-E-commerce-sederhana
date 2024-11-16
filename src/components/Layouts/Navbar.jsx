import { useState, useEffect, useContext } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { FaCartPlus } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice } from "../../context/TotalPriceContext";
  
const Navbar = () => {
  //darkmode
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  //ambil berdasarkan login
  const username = useLogin();
  //totalCart
  const [totalCart, setTotalCart] = useState(0);
  //useSelector digunakan untuk mengambil data keranjang dari state global Redux.
  const cart = useSelector((state) => state.cart.data);  
  const {total} = useTotalPrice();
  // Update totalCart saat user melakukan tambah keranjang
  //Effect ini akan menghitung jumlah barang dalam keranjang (totalCart) setiap kali isi cart berubah. 
  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div
      className={`flex flex-col sm:flex-row fixed justify-between h-20 px-5 bg-[#00AA5B] font-bold items-center w-full z-50 ${
        isDarkMode && "bg-white text-[#00AA5B]"
      }`}
    >
      <h1
        className={`text-xl sm:text-2xl ${
          isDarkMode ? "text-[#00AA5B]" : "text-white"
        }`}
      >
        Selamat Datang, <span className="italic font-bold"></span> Di Toko ShoesGood
      </h1>
      
      <div
        className={`flex items-center mt-2 sm:mt-0 ${
          isDarkMode ? "text-[#00AA5B]" : "text-white"
        }`}
      >
        {username}
        <Button
          classname={`ml-3 ${
            isDarkMode
              ? "text-white bg-[#00AA5B]" // Dark mode: tulisan putih, bg hijau
              : "text-[#00AA5B] bg-white"  // Light mode: tulisan hijau, bg putih
          }`}
          onClick={handleLogout}
        >
          Keluar
        </Button>
        
        <div
        className={`flex items-center p-2 rounded-md ml-5 ${
          isDarkMode ? "bg-[#00AA5B] text-white" : "bg-white text-[#00AA5B]"
        }`}
      >
        <FaCartPlus />
      {totalCart} 
        </div>
        <div 
         className={`flex items-center p-2 rounded-md ml-5 ${
          isDarkMode ? "bg-[#00AA5B] text-white" : "bg-white text-[#00AA5B]"
        }`}
        >${total.toLocaleString('id-ID', {styles: 'currency', currency: 'USD'})}
        </div>
        <button
          className="p-2 text-white rounded"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? (
            <FaSun size={24} className="text-yellow-500" />
          ) : (
            <FaMoon size={24} className="text-gray-900" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
