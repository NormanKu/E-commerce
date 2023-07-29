import React from "react";
// import link
import { Link } from "react-router-dom";

import Product from "../components/Product.jsx";

const TrendingItem = ({ product }) => {
  // destructure product
  const { id, image, category, title, price } = product;

  return (
    <>
      <div className="border rounded-lg border-gray-300 w-60 flex-shrink-0 overflow-hidden">
        <div className="border-b border-gray-300 h-52 w-100 mb-4 relative overflow-hidden transition-all">
          <div className="w-full h-full flex justify-center items-center">
            {/* image */}
            <div className="w-full h-full">
              <img
                src={image}
                alt=""
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
        {/* category & title & price */}
        <div className="grid col-auto px-4 py-0">
          <div className="text-sm capitalize text-gray-500 mb-1">
            {category}
          </div>
          <Link to={`/product/${id}`}>
            <h2 className="font-semibold text-lg mb-1">{title}</h2>
          </Link>
          <div className="font-semibold text-red-500">＄ {price}</div>
        </div>
      </div>
    </>
  );
};

export default TrendingItem;
