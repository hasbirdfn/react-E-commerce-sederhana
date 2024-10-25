import axios from "axios";


export const getProducts = (callback) => {
    axios
    .get("https://fakestoreapi.com/products")
    .then((res) =>{
        callback(res.data);
    })
    .catch((error) => {
        callback(error);
    })
}

export default getProducts;


export const getDetailProduct = (id, callback) => {
    axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
        callback(res.data)
    })
    .catch((error) => {
        console.log(error);
    })
}