import React, { useState } from "react";
import useProductActions from "../../hooks/useProductActions";

const Product = () => {

  const fakeProducts = [
    {
      name: "Laptop",
      price: 75000,
      currency: "INR",
      image: "s",
      stock: 12,
    },
    {
      name: "Wireless Headphones",
      price: 2500,
      currency: "INR",
      image: "es",
      stock: 35,
    },
    {
      name: "Smartphone",
      price: 45000,
      currency: "INR",
      image: "hne",
      stock: 20,
    },
    {
      name: "Smart Watch",
      price: 6000,
      currency: "INR",
      image: "h",
      stock: 50,
    },
    {
      name: "Camera",
      price: 35000,
      currency: "INR",
      image: "ra",
      stock: 8,
    },
  ];

  const { products,
    editingIndex,
    editProduct,
    startEditing,
    saveEdit,
    deleteProduct,
    handleChange } = useProductActions(fakeProducts)




  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Product Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
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
                    onClick={() => deleteProduct(index)}
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;