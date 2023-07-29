import React, { useContext, useState } from "react";
// import useParams
import { useParams } from "react-router-dom";
// import cart context
import { CartContext } from "../contexts/CartContext.jsx";
// import product context
import { ProductContext } from "../contexts/ProductContext.jsx";
// import icons
import { IoMdClose, IoMdAdd, IoMdRemove } from "react-icons/io";
import TrendingSlider from "../components/TrendingSlider.jsx";

const ProductDetails = () => {
  // get the product id from the url
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addSpecificQuantityToCart } = useContext(CartContext);

  // Initialize product amount state
  const [productAmount, setProductAmount] = useState(1);

  // get the single product based on the id
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  const increaseAmount = () => {
    setProductAmount(productAmount + 1);
  };

  const decreaseAmount = () => {
    if (productAmount > 1) {
      setProductAmount(productAmount - 1);
    }
  };

  const handleAddToCart = () => {
    addSpecificQuantityToCart(product, Number(id), productAmount);
  };

  // if product is not found
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
        Loading...
      </section>
    );
  }

  // destructure the product
  const { title, price, description, image, rating } = product;
  return (
    <>
    <section className="pt-32  lg:py-20 h-screen flex items-center">
      <div className="container mx-auto">
        {/* image & text wrapper */}
        <div className="flex flex-col lg:flex-row items-center mb-8 lg:mx-0">
          {/* image */}
          <img src={image} className="max-w-[200px] lg:max-w-sm" alt="" />{" "}
          {/* text */}
          <div
            className="flex-1 text-center
           lg:text-left pl-20"
          >
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0 ">
              {title}
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6">
              $ {price}
            </div>
            <p className="mb-8">{description}</p>
            {/* Add to cart & amount */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-x-5">
                <div className="flex items-center flex-col">
                  <svg
                    className="w-4 h-4 text-yellow-300 mr-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <div>{rating.rate} </div>
                </div>
                <div>{rating.count} Reviews</div>
              </div>
              <div className="flex gap-x-2 h-[36px] text-2xl">
                <button
                  className="flex-1 h-full flex justify-center items-center cursor-pointer h-full"
                  onClick={decreaseAmount}
                >
                  <IoMdRemove />
                </button>
                <div className="h-full flex justify-center items-center px-2">
                  {productAmount}
                </div>

                <button
                  className="flex-1 h-full flex justify-center items-center cursor-pointer"
                  onClick={increaseAmount}
                >
                  <IoMdAdd />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="bg-primary px-8 py-4 text-white rounded-lg"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
    <div>
    <TrendingSlider />
    </div>

    </>
  );
};

export default ProductDetails;
