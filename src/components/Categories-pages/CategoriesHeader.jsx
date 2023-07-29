import { useState } from "react";
import { Link } from "react-router-dom";

function CategoriesHeader() {
  const [btnName, setBtnName] = useState("All");

  const handleBtnName = (e) => {
    setBtnName(e);
  };

  return (
    <div className="flex justify-center mt-20 pt-10">
      {" "}
      {/* Add this wrapper */}
      <div className="flex flex-col bg-gray-200 p-5 rounded-md">
        <div className="mb-4">
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/"
            className="flex items-center text-blue-500 hover:underline"
          >
            <i className="fa-solid fa-angle-left mr-2"></i> Home
          </Link>
          <h3 className="text-lg font-semibold mt-2 text-center">{btnName}</h3>
        </div>
        <div className="filter-btns flex flex-row space-x-4">
          <Link to="all" onClick={() => handleBtnName("All")}>
            <button className="bg-blue-500 text-white py-1 px-3 rounded">
              All
            </button>
          </Link>
          <Link to="mens">
            <button
              onClick={() => handleBtnName("Mens")}
              className="bg-blue-500 text-white py-1 px-3 rounded"
            >
              Mens
            </button>
          </Link>
          <Link to="electronics">
            <button
              onClick={() => handleBtnName("electronics")}
              className="bg-blue-500 text-white py-1 px-3 rounded"
            >
              Electronics
            </button>
          </Link>
          <Link to="womens">
            <button
              onClick={() => handleBtnName("womens")}
              className="bg-blue-500 text-white py-1 px-3 rounded"
            >
              Womens
            </button>
          </Link>
          <Link to="jewelery">
            <button
              onClick={() => handleBtnName("Jewelery")}
              className="bg-blue-500 text-white py-1 px-3 rounded"
            >
              Jewelery
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategoriesHeader;
