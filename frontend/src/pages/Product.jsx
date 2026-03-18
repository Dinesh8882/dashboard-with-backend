import React, { useState } from "react";

const ProductPage = () => {
  const [cart, setCart] = useState([]);

  // Fake Product Data
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      image: "https://via.placeholder.com/200"
    },
    {
      id: 2,
      name: "Phone",
      price: 20000,
      image: "https://via.placeholder.com/200"
    },
    {
      id: 3,
      name: "Headphones",
      price: 2000,
      image: "https://via.placeholder.com/200"
    },
    {
      id: 4,
      name: "Smart Watch",
      price: 5000,
      image: "https://via.placeholder.com/200"
    }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-6">
        Products
      </h1>

      {/* Cart Info */}
      <div className="text-center mb-4">
        🛒 Items in Cart: <span className="font-bold">{cart.length}</span>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded"
            />

            <h2 className="text-lg font-semibold mt-3">
              {product.name}
            </h2>

            <p className="text-gray-600">
              ₹{product.price}
            </p>

            <button
              onClick={() => addToCart(product)}
              className="mt-3 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}

      </div>
    </div>
  );
};

export default ProductPage;