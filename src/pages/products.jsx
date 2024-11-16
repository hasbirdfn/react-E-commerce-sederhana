import { Fragment, useContext, useEffect, useState } from "react";
import CardProducts from "../components/Fragments/CardProducts";
import Counter from "../components/Fragments/Counter";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkMode";

const ProductsPage = () => {
  const [products, setProducts] = useState([]); // State untuk produk
  const [isLoading, setIsLoading] = useState(true); // State untuk loading status
  const [error, setError] = useState(null); // State untuk menyimpan error jika ada
  const { isDarkMode } = useContext(DarkMode); // Context untuk dark mode
  useLogin(); // Middleware untuk memeriksa login

  // Mengambil dan menampilkan data dari API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts(); // Tunggu hasil dari fungsi async
        setProducts(data); // Simpan data ke state
      } catch (err) {
        setError(err.message); // Simpan pesan error
      } finally {
        setIsLoading(false); // Set loading selesai
      }
    };

    fetchProducts(); // Panggil fungsi async
  }, []);

  return (
    <Fragment>
      <Navbar />
      {/* Tambahkan padding-top agar konten tidak tertutup oleh navbar */}
      <div className="pt-20">
        <div
          className={`flex flex-col lg:flex-row justify-center py-5 w-full ${
            isDarkMode ? "bg-green-600 text-white" : "bg-gray-100 text-black"
          }`}
        >
          {/* Bagian produk */}
          <div className="w-full lg:w-4/6 flex flex-wrap justify-center">
            {isLoading ? ( // Tampilkan pesan loading
              <p>Loading products...</p>
            ) : error ? ( // Tampilkan pesan error jika ada
              <p className="text-red-500">Error: {error}</p>
            ) : products.length > 0 ? ( // Tampilkan produk jika tersedia
              products.map((product) => (
                <CardProducts key={product.id} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                  <CardProducts.Header image={product.image} id={product.id} />
                  <CardProducts.Body name={product.title}>
                    {product.description}
                  </CardProducts.Body>
                  <CardProducts.Footer price={product.price} id={product.id} />
                </CardProducts>
              ))
            ) : (
              <p>No products found.</p> // Tampilkan pesan jika produk kosong
            )}
          </div>

          {/* Bagian Table keranjang */}
          <div className="w-full lg:w-2/6 mt-5 lg:mt-0">
            <h1
              className={`text-3xl font-bold text-[#00AA5B] ml-5 mb-2 ${
                isDarkMode && "text-white"
              }`}
            >
              Cart
            </h1>
            <TableCart products={products} />
          </div>
        </div>

        {/* Counter */}
        <div className="mt-5 flex justify-center mb-10">
          <Counter />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
