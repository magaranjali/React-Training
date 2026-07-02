import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  // Get the product id from the URL
  const { id } = useParams();

  // State to store a single product
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="max-w-5xl mx-auto p-8">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Product Image */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-96 object-contain"
          />
        </div>

        {/* Product Details */}
        <div>
          <span className="bg-slate-200 px-3 py-1 rounded text-sm">
            {product.category}
          </span>

          <h1 className="text-3xl font-bold mt-4">
            {product.title}
          </h1>

          <p className="text-gray-600 mt-4">
            {product.description}
          </p>

          <h2 className="text-3xl font-bold text-green-600 mt-6">
            ${product.price}
          </h2>

          {product.rating && (
            <div className="mt-4">
              <p>
                <strong>{product.rating.rate}</strong> / 5
              </p>
              <p>{product.rating.count} Reviews</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;