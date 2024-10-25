import { Fragment,useContext,useEffect,useState } from "react";
import CardProducts from "../components/Fragments/CardProducts";
import Counter from "../components/Fragments/Counter";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkMode";


const ProductsPage = () => {
  const [products,setProducts] = useState([]);
  const {isDarkMode, setIsDarkMode} = useContext(DarkMode); // diambil dari export darkmode halaman DarkMode 
  useLogin(); // agar halaman tidak  dapat diakses jika belum punmya token

  // mengambil dan menampilkan data dari api product.service
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    })
  }, [])

  return (
    <Fragment>
      <Navbar/>
  {/* Tambahkan padding-top agar konten tidak tertutup oleh navbar */}
  <div className="pt-20"> {/* Gunakan pt-20 sesuai tinggi navbar */}
    <div className={`flex flex-col lg:flex-row justify-center py-5 w-full ${isDarkMode && "bg-green-600 text-white"}`}> 
      {/* Bagian produk */}
      <div className="w-full lg:w-4/6 flex flex-wrap justify-center">
        {products.length > 0 && products.map((product) => (
          <CardProducts key={product.id} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <CardProducts.Header image={product.image} id={product.id}/>
            <CardProducts.Body name={product.title}>
              {product.description}
            </CardProducts.Body>
            <CardProducts.Footer price={product.price} 
            id={product.id} /> 
          </CardProducts>
        ))}
      </div>

      {/* Bagian keranjang */}
      <div className="w-full lg:w-2/6 mt-5 lg:mt-0">
        <h1 className={`text-3xl font-bold text-[#00AA5B] ml-5 mb-2 ${isDarkMode && "text-white"}`}>Cart</h1>
        <TableCart products={products}/>
      </div>
    </div>

    {/* Counter */}
    <div className="mt-5 flex justify-center mb-10">
      <Counter />
    </div>
  </div>
</Fragment>

  )
}

export default ProductsPage;