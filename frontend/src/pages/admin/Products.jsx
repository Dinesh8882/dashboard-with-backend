import React, { useEffect, useState } from "react";
import useProductActions from "../../hooks/useProductActions";
import { getProducts } from "../../services/productService";

const Product = () => {
  const {
    products,
    setProducts,
    editingIndex,
    editProduct,
    startEditing,
    saveEdit,
    deletePro,
    handleChange } = useProductActions()

  const [loading, setLoading] = useState(false)


  useEffect(() => {
    const prod = async () => {
      try {
        setLoading(true)
        const res = await getProducts()
        if (res.data.success) {
          setTimeout(() => {
            setLoading(false)
            setProducts(res?.data?.products)
          }, 4000);
        }

      } catch (error) {

      }

    }
    prod()
  }, [])

  if( loading){
    return <p>Fatching data....</p>
  }

  


  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Product Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.length === 0 ? (
          <div>Product not found!</div>
        ) : (
          products?.map((product, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow hover:shadow-xl transition duration-300 bg-white"
            >
              {editingIndex === index ? (
                <div className="space-y-2">
                  <input
                    type="text"
                    name="name"
                    value={editProduct.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="number"
                    name="price"
                    value={editProduct.price}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="text"
                    name="currency"
                    value={editProduct.currency}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="text"
                    name="image"
                    value={editProduct.image}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="number"
                    name="stock"
                    value={editProduct.stock}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                  <div className="flex justify-between mt-2">
                    <button
                      onClick={saveEdit}
                      className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                      Save
                    </button>
                    <button
                      // onClick={cancelEditing}
                      className="px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded"
                  />
                  <h3 className="font-semibold text-xl">{product.name}</h3>
                  <p>
                    Price: {product.price} {product.currency}
                  </p>
                  <p>Stock: {product.stock}</p>
                  <div className="flex justify-between mt-3">
                    <button
                      onClick={() => startEditing(index)}
                      className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deletePro(product._id)}
                      className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Product;