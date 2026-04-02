import baseAPI from "../api/api";

const addProduct = (data) => {
    return baseAPI.post("/add-product", data)
}




export {
    addProduct
}