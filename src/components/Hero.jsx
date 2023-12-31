import React from "react";
// import images
import WomanImg from "../img/WomanImg.png";
// import Link
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center">
          {/* pretitle */}
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>
            New Trend
          </div>
          {/* title */}
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            AUTUMN SALE STYLISH <br />
            <span className="font-semibold">WOMENS</span>
          </h1>
          <Link to='/categories/all' className="self-start uppercase font-semibold border-b-2 bg-cyan-200	px-3 py-3 rounded-2xl hover:bg-zinc-300">Discover More</Link>
        </div>
        {/* image */}
        <div className="hidden lg:block">
          <img src={WomanImg} className="h-[700px] " alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
