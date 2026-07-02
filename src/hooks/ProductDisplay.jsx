import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layouts/Header";

const ProductDisplay = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <Header />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-slate-900 min-h-screen">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-slate-800 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-lg"
          >
            <Link to={`/Product/${product.id}`}>
              <div className="bg-white p-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-52 w-full object-contain"
                />
              </div>

              <div className="p-4">
                <h2 className="text-white font-semibold mb-2 line-clamp-2">
                  {product.title}
                </h2>

                <p className="text-slate-400 text-sm mb-3 line-clamp-3">
                  {product.description}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-green-400 text-xl font-bold">
                    ${product.price}
                  </span>

                  <span className="bg-slate-700 text-slate-200 px-2 py-1 rounded-md text-xs">
                    {product.category}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductDisplay;