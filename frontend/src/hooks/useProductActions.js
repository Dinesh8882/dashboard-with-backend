import { useState } from "react";
import { deleteProduct } from '../services/productService'

const useProductActions = () => {

    const [products, setProducts] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editProduct, setEditProduct] = useState({});
    const [loading, setLoading] = useState({
        deleteLoading: false
    })

    const startEditing = (index) => {
        // console.log(products[index]);
    };

    const saveEdit = () => {

    };

    const deletePro = async (id) => {
        try {
            
            setLoading(prevLoading => ({
                ...prevLoading,
                deleteLoading: true
            }))
            const res = await deleteProduct(id)
        

            if (res.data.success) {
                setProducts(prev => prev.filter(p => p._id !== id))
                setLoading(prevLoading => ({
                    ...prevLoading,
                    deleteLoading: true
                }))
            }
            
            
        } catch (error) {
            console.log(error.message || error.response.message);
        }
    };

    const handleChange = (e) => {

    };


    return {
        products,
        setProducts,
        editingIndex,
        editProduct,
        startEditing,
        saveEdit,
        deletePro,
        handleChange
    }
}

export default useProductActions