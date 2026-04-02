import React, { useContext, useState } from "react";
import { addProduct } from "../../services/productService";
import Loading from "../../components/Loading";
import { UserContext } from "../../context/userContext";


import { toast } from 'react-toastify'
export default function AddProduct() {
  const { setProductData } = useContext(UserContext)
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    currency: "INR",
    image: "",
    stock: "",
  });
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      setLoading(true)
      e.preventDefault();
      const res = await addProduct(formData)
      if (res.data.success) {
        setProductData(res.data)
        setLoading(false)
        toast.success(res.data.message)
      }

      setFormData({
        name: "",
        price: "",
        currency: "INR",
        image: "",
        stock: "",
      })
    } catch (error) {
      toast.error(error.response?.message || error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-lg p-6">

        {/* Header */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Add New Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <div>
            <label className="text-sm text-gray-600">Product Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter product name"
              className="w-full mt-1 p-2.5 border rounded-lg focus:ring-2 focus:ring-black outline-none"
              required
            />
          </div>

          {/* Price + Currency */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm text-gray-600">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter price"
                className="w-full mt-1 p-2.5 border rounded-lg focus:ring-2 focus:ring-black outline-none"
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Currency</label>
              <select
                name="currency"
                value={formData.currency}
                onChange={handleChange}
                className="w-full mt-1 p-2.5 border rounded-lg focus:ring-2 focus:ring-black outline-none"
              >
                <option value="INR">INR</option>
                <option value="USD">USD</option>
              </select>
            </div>
          </div>

          {/* Image */}
          <div>
            <label className="text-sm text-gray-600">Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Paste image link"
              className="w-full mt-1 p-2.5 border rounded-lg focus:ring-2 focus:ring-black outline-none"
            />
          </div>

          {/* Image Preview */}
          {formData.image && (
            <img
              src={formData.image}
              alt="preview"
              className="w-full h-40 object-cover rounded-lg border"
            />
          )}

          {/* Stock */}
          <div>
            <label className="text-sm text-gray-600">Stock</label>
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              placeholder="Available stock"
              className="w-full mt-1 p-2.5 border rounded-lg focus:ring-2 focus:ring-black outline-none"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            {loading ? <Loading /> : "Add Product"}
          </button>

        </form>
      </div>
    </div>
  );
}