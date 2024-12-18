import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getDetailProduct } from "../services/product.service";  // Import fungsi getDetailProduct
import { FaWhatsapp } from 'react-icons/fa';
import { useLogin } from "../hooks/useLogin";  // Fungsi untuk handle login jika perlu

export const DetailProductPage = () => {
  const username = useLogin(); // agar tidak dapat mengaskses data ketika belum ada token
  const { id } = useParams();  // Mengambil parameter ID dari URL
  const [product, setProduct] = useState({});

  useEffect(() => {
    // Fungsi async untuk mengambil data produk berdasarkan ID
    const fetchProduct = async () => {
      try {
        const data = await getDetailProduct(id);  // Mengambil data produk
        setProduct(data);  // Menyimpan data produk ke state
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();  // Panggil fungsi untuk mengambil produk saat komponen dimuat
  }, [id]);

  // Membuat pesan dinamis untuk WhatsApp
  const message = `Saya ingin membeli produk ${product.title}, bisa konsultasi?`;
  const whatsappLink = `https://wa.me/6285795501902?text=${encodeURIComponent(message)}`;


  /* 
  Gunakan product && product.id jika Anda ingin memastikan objek memiliki properti id atau properti tertentu yang Anda butuhkan.
Gunakan Object.keys(product).length > 0 jika Anda ingin memeriksa apakah objek memiliki properti apa pun, dan objek tidak kosong (misalnya, product tidak kosong).
  */
  return (
    <div className="w-100 min-h-screen flex justify-center items-center">
      {product && product.id ? ( //Tujuan: Memeriksa apakah objek product ada dan memiliki properti id.
        <div className="flex font-sans max-w-xl">
          <div className="flex-none w-56 relative">
            <img 
              src={product.image} 
              alt={product.title} 
              className="p-5 rounded-md object-cover h-15 bg-white aspect-[4/3] md:aspect-[3/4] xl:aspect-[4/3] overflow-hidden group relative hover:scale-95 transition-all duration-500 w-full h-full bg-cover bg-center group-hover:scale-125 group-hover:rotate-12" 
              loading="lazy" 
            />
          </div>
          <form className="flex-auto p-6">
            <div className="flex flex-wrap">
              <h1 className="flex-auto font-medium text-slate-900">{product.title}</h1>
              <div className="w-full flex-none mt-2 order-1 text-3xl font-bold text-[#00AA5B]">
                ${product.price.toLocaleString("id-ID", {style: "currency", currency: "USD"})}
              </div>
              <div className="text-sm font-medium text-slate-400">{product.category}</div>
              <div className="text-sm font-medium text-slate-400">
                Review: {product.rating?.rate}/5 ({product.rating?.count} reviews)
              </div>
            </div>
            <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
              <div className="space-x-2 flex text-sm">{product.description}</div>
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
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
              </button>
            </div>
            <p className="text-sm text-slate-500">
              Free shipping on all continental US orders.
            </p>
          </form>
        </div>
      ) : (
        <p>Loading Detail Product.</p>
      )}
    </div>
  );
};

export default DetailProductPage;
