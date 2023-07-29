import { useState } from "react";
// import react router dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
// import components
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import All from "./components/Categories-pages/All";
import Electronics from "./components/Categories-pages/Electronics";
import Jewelery from "./components/Categories-pages/Jewelery";
import Mens from "./components/Categories-pages/Mens";
import Womens from "./components/Categories-pages/Womens";


function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />

            <Route path="categories" element={<Categories />}>
              <Route path="all" element={<All />} />
              <Route path="mens" element={<Mens />} />
              <Route path="womens" element={<Womens />} />
              <Route path="jewelery" element={<Jewelery />} />
              <Route path="electronics" element={<Electronics />} />
            </Route>
          </Routes>
          <Sidebar />
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
