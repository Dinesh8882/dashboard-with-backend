import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    currency: {
        type: String,
        default: "INR"
    },
    image: String,
    description: String,
    category: String,
    stock: Number
}, { timestamps: true });

const productModel = mongoose.model("product", productSchema)


export default productModel