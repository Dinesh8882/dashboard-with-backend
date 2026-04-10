import express from "express";
import authMiddelware from "../middelwares/auth.middelware.js";
import { addProduct, deteleProduct, getAllProducts, productFineById } from "../controllers/product.controllers.js";
import roleBaseAuth from "../middelwares/roleBase.middelware.js";

const productRouter = express.Router()

productRouter.post('/add-product', authMiddelware, roleBaseAuth(['admin']), addProduct)
productRouter.get('/products', getAllProducts)
productRouter.get('/products/:id', authMiddelware, productFineById)
productRouter.delete('/delete/:id', authMiddelware, roleBaseAuth(['admin']), deteleProduct)




export default productRouter