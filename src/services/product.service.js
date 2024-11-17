import instance from "./axiosInstance";

// Mendapatkan daftar produk
export const getProducts = async () => {
    try {
        const res = await instance.get("products");
        return res.data; // Mengembalikan data produk
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error; // Lemparkan error agar bisa ditangkap di `ProductsPage`
    }
};


// Mendapatkan detail produk berdasarkan ID
export const getDetailProduct = async (id) => {
    try {
        const res = await instance.get(`products/${id}`);
        return res.data; // Mengembalikan data produk
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error; // Lemparkan error agar bisa ditangkap di `ProductsPage`
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