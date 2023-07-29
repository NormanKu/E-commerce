import React,{ useContext } from "react";
// import product context
import { ProductContext } from "../contexts/ProductContext.jsx";
import TrendingItem from "./TrendingItem.jsx";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'

const TrendingSlider = () => {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 235;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 235;
  };

  // get products from product context
  const { products } = useContext(ProductContext);
  // get only men's & women's clothing
  const filteredProducts = products.filter((item) => {
    return item.category === "jewelery" || item.category === "electronics";
  });
  return (
    <div className="m-0 p-0 pb-40">
      <div className="mx-auto mx-auto max-w-screen-xl py-0 px-5 flex flex-col">
        <div className="flex flex-row justify-between mb-7">
          <h3 className="font-semibold text-4xl">You may like...</h3>
          <div>
            <button title="scroll left" onClick={slideLeft} className="bg-black rounded-lg py-2 px-2 mr-3">
              <AiOutlineArrowLeft className="text-2xl text-white"  />
            </button>
            <button  title="scroll right" onClick={slideRight}  className="bg-black	 rounded-lg py-2 px-2" >
              <AiOutlineArrowRight className="text-2xl text-white" />
            </button>
          </div>
        </div>
        <div id="slider" className="flex flex-nowrap flex-row gap-10 overflow-x-scroll overflow-y-hidden relative py-4 px-3">
          {filteredProducts.map((product) => {
            return <TrendingItem  product={product} key={product.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TrendingSlider;
