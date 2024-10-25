import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
// Nested Component dalam 1 file
// dibagi menjadi 3 bagian : header,body,footer
// children ini tugasnya utk mengambil seluruh element tag html, jadi wajib ada
const CardProducts = (props) => {
    const {children} = props;
    return(
    <div className="w-full max-w-sm bg-white border border-[#00AA5B] rounded-lg shadow-xl mx-3 my-2 flex flex-col justify-between">
        {children}
    </div>
    );
}

//kenapa Link to gapakai a hrefmenghasilkan pengalaman pengguna yang lebih cepat dan mulus karena tidak ada proses refresh yang membutuhkan waktu.
const Header = (props) => {
    const {image, id} = props;
    return (
        <Link to={`/product/${id}`}> 
            <img src={image} alt="product" className="p-5 rounded-md hover:bg-[#00AA5B] object-cover h-15 bg-white aspect-[4/3] md:aspect-[3/4] xl:aspect-[4/3] overflow-hidden group relative hover:scale-95 transition-all duration-500 w-full h-full bg-cover bg-center group-hover:scale-125 grou-hover:rotate-12" />
        </Link>
    )
}

const Body = (props) => {
    const {name, children} = props;
    return (
        <div className="px-5 pb-5 h-full">
        <a href="#">
            <h5 className="text-black font-semibold tracking-tight text-xl">{name.substring(0,20)}...</h5>
            <p className="text-m text-black">{children.substring(0,100)}...</p> 
        </a>
    </div>
    )
}

const Footer = (props) => {
    const {price, id} = props;
    const dispatch = useDispatch();
    return (
<div className="flex items-center justify-between px-5 pb-5">
<span className="text-black font-bold text-xl">${price.toLocaleString('id-ID', {styles: 'currency', currency: 'USD'})}</span>
    <Button classname="bg-[#00AA5B] text-white" onClick={() => dispatch(addToCart({id, qty:1}))}><span className="font-bold text-xl text-left">+</span> Keranjang</Button>
</div>
    )
}
// Nested component, tanpa perlu membuat conditional rendering create file 
CardProducts.Body = Body
CardProducts.Header = Header
CardProducts.Footer = Footer

export default CardProducts;