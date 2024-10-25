import { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import { getDetailProduct } from "../services/product.service";
import { FaWhatsapp } from 'react-icons/fa';
import { useLogin } from "../hooks/useLogin";

export const DetailProductPage = () => {
  const username = useLogin() // untuk menghnadle ketika mau mengakses ke halaman detailproduct
    const{id} = useParams()  // Mengambil parameter ID dari URL
    const [product,setProduct] = useState({});

    useEffect(() => {
        getDetailProduct(id, (data) => {
            setProduct(data);  // Menyimpan data produk berdasarkan ID
        })
    }, [id]);
    
 // Membuat link WhatsApp dengan pesan dinamis
 const message = `Saya ingin membeli produk ${product.title}, bisa konsultasi?`;
 const whatsappLink = `https://wa.me/6285795501902?text=${encodeURIComponent(message)}`;

    return(
<div className="w-100 min-h-screen flex justify-center items-center">
   {Object.keys (product).length > 0 &&  <div className="flex font-sans max-w-xl" >
     <div className="flex-none w-56 relative">
    <img src={product.image} alt={product.title} className="p-5 rounded-md object-cover h-15 bg-white aspect-[4/3] md:aspect-[3/4] xl:aspect-[4/3] overflow-hidden group relative hover:scale-95 transition-all duration-500 w-full h-full bg-cover bg-center group-hover:scale-125 grou-hover:rotate-12" loading="lazy" />
  </div>
  <form className="flex-auto p-6">
    <div className="flex flex-wrap">
      <h1 className="flex-auto font-medium text-slate-900">
      {product.title}
      </h1>
      <div className="w-full flex-none mt-2 order-1 text-3xl font-bold text-[#00AA5B]">
      ${product.price.toLocaleString("id-ID", {styles: "currency", currency: "USD"})}
      </div>
      <div className="text-sm font-medium text-slate-400">
            {product.category}
      </div>
      <div className="text-sm font-medium text-slate-400">
      Review: {product.rating.rate}/5 {product.rating.count}
      </div>
    </div>
    <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
      <div className="space-x-2 flex text-sm">
       {product.description}
      </div>
    </div>
    <div className="flex space-x-4 mb-5 text-sm font-medium">
      <div className="flex-auto flex space-x-4">
      <Link 
            to={whatsappLink} 
            className="h-10 px-6 font-semibold rounded-full bg-[#00AA5B] text-white flex items-center gap-2" 
            target="_blank" 
            rel="noopener noreferrer"
        >
            <FaWhatsapp className="text-lg" />
            Buy
        </Link>
        <button className="h-10 px-6 font-semibold rounded-full border border-slate-500 text-[#00AA5B] bg-white flex items-center gap-2" type="button">
          + Bag
        </button>
      </div>
      <button className="flex-none flex items-center justify-center w-9 h-9 rounded-full text-[#00AA5B] bg-violet-50" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>
    </div>
    <p className="text-sm text-slate-500">
      Free shipping on all continental US orders.
    </p>
  </form>
</div>}
 </div>
);
};

export default DetailProductPage;








// langkah langkah pengerjaan, 1. buat halaman detail, 2. panggil parameter id mennggunakan react-reouter-dom, 3.lakukan destructuring utk pemganggilan id, 4. lakukan panggil fetch pordoct API pada file product.service, 5. setelah dibuat getDetailProduct, saatnya panggil didalam file detailProduct.jsx 