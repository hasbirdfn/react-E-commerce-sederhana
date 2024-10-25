import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useTotalPrice, useTotalPriceDispatch } from "../../context/TotalPriceContext";

const TableCart = (props) => {
    const {products} = props;
    const cart = useSelector((state) => state.cart.data);// mengambil state menggunakan state management
    
    // menggunakan useReducer tidak dibutuhkan total price ini dihalaman ini
    // menggunakan useContext/redux  dibutuhkan total price ini
    // const [totalPrice,setTotalPrice] = useState(0);  
    const dispatch = useTotalPriceDispatch();
    const {total} = useTotalPrice();
    // Fungsi dibawah ini untuk menjumlahkan
    useEffect(() => {
        //   // componentDidUpdate
          if(products.length > 0 && cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
              const product = products.find((product) => product.id === item.id) // product untuk menangkap cartnya
              return acc + product.price * item.qty;
              },0); // angka akhir total price, misal 200.000 akhrinya 0
              
              dispatch({
                type:"UPDATE",
                payload: {
                  total:sum, 
                }
              })
              localStorage.setItem("cart", JSON.stringify(cart));
          }
        },[cart, products]); // perubahaan apa yg kita pantau, yaitu cart, mau update state di cart

        // DOM Manipulation Total Price
        const totalPriceRef = useRef(null);
        useEffect(() => {
        if (cart.length > 0) {
            totalPriceRef.current.style.display = "table-row"; // if data ada ? ditampilkan
        } else {
            totalPriceRef.current.style.display = "none"; // uf data 0 ? tidak ditampilkan
        }
        })
    return(
        <table className="text-left table-auto border-separate border-spacing-x-5 w-full">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 && cart.map((item) => {
            const product = products.find((product) => product.id === item.id);
            return (
              <tr key={item.id}>
                <td>{product.title.substring(0,10)}...</td>
                <td>${product.price.toLocaleString('id-ID', {styles: 'currency', currency: 'USD'})}</td>
                <td>{item.qty}</td>
                <td>
                  ${(item.qty * product.price).toLocaleString('id-ID', {styles: 'currency', currency: 'USD'})}
                </td>
              </tr>
            );
          })}
          <tr ref={totalPriceRef}>
            <td colSpan={3}><b>Total Price</b></td>
            <td><b>${total.toLocaleString('id-ID', {styles: 'currency', currency: 'USD'})}</b></td>
          </tr>
        </tbody>
      </table>
    );
};

export default TableCart;