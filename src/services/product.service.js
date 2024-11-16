import axios from "axios";
export const getProducts = async () => {
    try {
        const res = await axios.get("https://fakestoreapi.com/products");
        return res.data; // Harus mengembalikan array
    } catch (error) {
        console.error("Error fetching products:", error);
        return []; // Kembalikan array kosong jika terjadi error
    }
};


export const getDetailProduct = async (id) => {
    try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        return res.data;
    } catch (error) {
        throw error;
    }
};


// export const getProducts = (callback) => {
//     axios
//     .get("https://fakestoreapi.com/products")
//     .then((res) =>{
//         callback(res.data);
//     })
//     .catch((error) => {
//         callback(error);
//     })
// }

// export default getProducts;


// export const getDetailProduct = (id, callback) => {
//     axios
//     .get(`https://fakestoreapi.com/products/${id}`)
//     .then((res) => {
//         callback(res.data)
//     })
//     .catch((error) => {
//         console.log(error);
//     })
// }