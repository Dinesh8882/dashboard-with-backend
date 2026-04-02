import express from "express";
import authMiddelware from "../middelwares/auth.middelware.js";
import { addProduct, getAllProducts, productFineById } from "../controllers/product.controllers.js";
import roleBaseAuth from "../middelwares/roleBase.middelware.js";

const productRouter = express.Router()

productRouter.post('/add-product', authMiddelware, roleBaseAuth(['admin']), addProduct)
productRouter.get('/products', getAllProducts)
productRouter.get('/products/:id',authMiddelware, productFineById)




export default productRouter