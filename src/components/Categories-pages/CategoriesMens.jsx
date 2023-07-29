import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";

const CategoriesMens = () => {
  // get products from product context
  const { products } = useContext(ProductContext);

  // get only women's clothing
  const filteredProducts = products.filter((item) => {
    return item.category === "men's clothing";
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
      {filteredProducts.map((product) => {
        // destructure product
        const { id, image, category, title, price } = product;

        return (
          <div key={id} className="border rounded-lg border-gray-300 w-60  overflow-hidden">
            <div className="border-b border-gray-300 h-52 w-100 mb-4 relative overflow-hidden transition-all">
              <div className="w-full h-full flex justify-center items-center">
                {/* image */}
                <div className="w-full h-full">
                  <img
                    src={image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
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
        );
      })}
    </div>
  );
};

export default CategoriesMens;
