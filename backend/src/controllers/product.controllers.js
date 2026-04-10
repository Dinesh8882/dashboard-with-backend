import productModel from "../models/product.models.js";


const addProduct = async (req, res) => {
    try {

        const { name, price, image, description, category, stock } = req.body

        const product = await productModel.create({
            name,
            price,
            image,
            description,
            category,
            stock
        })

        if (!product) {
            return res.status(400).json({
                success: false,
                message: "something is wrong!"
            })
        }


        res.status(200).json({
            success: true,
            message: "Product added successfuly !",
            product
        })



    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const getAllProducts = async (req, res) => {
    try {
        const products = await productModel.find()


        if (products.length === 0) {
            return res.status(200).json({
                success: true,
                message: "Products not found!",
                products
            })
        }

        res.status(200).json({
            success: true,
            message: "fateched products successfully!",
            products
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const productFineById = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await productModel.findById(id)
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "Product found",
            product
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const deteleProduct = async (req, res) => {
    try {
        const { id } = req.params
        const deleteProduct = await productModel.findOneAndDelete(id)

        if (!deleteProduct) {
            return res.status(400).json({
                success: false,
                message: "Product not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "Product deleted successfuly!"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


export {
    addProduct,
    getAllProducts,
    productFineById,
    deteleProduct
}