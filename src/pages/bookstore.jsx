import { Fragment, useState } from "react";
import Button from "../components/Elements/Button";
import BookStore from "../components/Fragments/BookStore";


const books = [
    {
        id: 1,
        name: "Atomic Habbits",
        price: 250000,
        image: "/images/book.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, perferendis."
    },
    {
        id: 2,
        name: "Filosofis Teras",
        price: 120000,
        image: "/images/book.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, perferendis."
    },
];

const email = localStorage.getItem("email");
// item
const BookPage = () => {
    const [cart,setCart] = useState([
        {
            id:1,
            qty:1,
        }
    ]);


    const handleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.href = "/login";
    }

     const handleAddToCartBook = (id) => {
        if(cart.find((item) => item.id === id)) {
            setCart(
                cart.map((item) => 
                    item.id === id ? {...item, qty: item.qty + 1} : item
            )
        )
        } else {
            setCart(
                [...cart, {id, qty: 1}]
            );
        }
     }
    return (
        <Fragment>
        <div className="flex justify-end text-white bg-green-800 items-center h-20 px-5">
        {email}
        <Button classname="bg-green-600 hover:bg-green-700 ml-3" onClick={handleLogout}>Keluar</Button>
        </div>
        <div className="flex justify-center p-5">
            <div className="w-4/6 flex flex-wrap">
            {books.map((book) => {
                return (
                <BookStore key={book.id}>
                <BookStore.Header image={book.image} />
                <BookStore.Body name={book.name}>
                    {book.description}
                </BookStore.Body>
                <BookStore.Footer price={book.price} id={book.id} handleAddToCartBook={handleAddToCartBook} />
                   
            </BookStore>
                );
            })}            
            </div>
                <div className="w-2/6">
                    <h1 className="font-bold text-3xl text-[#00AA5B]">Cart Books</h1>
                    <table className="text-left table-auto border-separate border-spacing-x-5">
                        <thead>
                            <tr>
                                <td>Books</td>
                                <td>Price</td>
                                <td>Qty</td>
                                <td>Total</td>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => {
                                const book = books.find((book) => book.id === item.id);
                                return (
                                    <tr key={item.id}>
                                        <td>{book.name}</td>
                                        <td>Rp{book.price.toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}</td>
                                        <td>{item.qty}</td>
                                        <td> {(item.qty * book.price).toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    )
}

export default BookPage;