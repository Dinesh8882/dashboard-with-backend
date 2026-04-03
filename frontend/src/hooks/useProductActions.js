import { useState } from "react";


const useProductActions = (initialProducts = []) => {

    const [products, setProducts] = useState(initialProducts);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editProduct, setEditProduct] = useState({});

    const startEditing = (index) => {
        // console.log(products[index]);
    };

    //   const cancelEditing = () => {
    //     setEditingIndex(null);
    //     setEditProduct({});
    //   };

    const saveEdit = () => {

    };

    const deleteProduct = (index) => {
        setProducts(prevProduct => prevProduct.filter((_, i) => index !== i))
    };

    const handleChange = (e) => {

    };
    return {
        products,
        editingIndex,
        editProduct,
        startEditing,
        saveEdit,
        deleteProduct,
        handleChange
    }
}

export default useProductActions