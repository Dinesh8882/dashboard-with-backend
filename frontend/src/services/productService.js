import baseAPI from "../api/api";

const addProduct = (data) => {
    return baseAPI.post("/add-product", data)
}

const getProducts = () => {
    return baseAPI.get("/products")
}

const deleteProduct = (id) => {
    return baseAPI.delete(`/delete/:${id}`)
}


export {
    addProduct,
    getProducts,
    deleteProduct
}